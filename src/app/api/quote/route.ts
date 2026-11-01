import { NextRequest, NextResponse } from "next/server";
import { COMPANY_DETAILS } from "@/config/contact";

// In-memory rate limiter (per-IP window)
interface RateLimitEntry {
  count: number;
  resetTime: number;
}
const rateLimitMap = new Map<string, RateLimitEntry>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 submissions per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) {
    return true;
  }

  entry.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "anonymous";

    // 1. Rate Limiting Check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please wait a minute before submitting again, or call us directly.",
        },
        { status: 429 }
      );
    }

    const data = await req.json();

    // 2. Honeypot Anti-Spam Check
    // If the hidden 'website_hp' field is filled, it's a spam bot.
    if (data.website_hp) {
      // Silently accept to avoid alerting bot
      return NextResponse.json({
        success: true,
        message: "Quotation request logged successfully.",
      });
    }

    // 3. Payload Validation
    const { fullName, phone, email, company, equipmentType, powerRating, message } = data;

    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid phone number for contact." },
        { status: 400 }
      );
    }

    if (!equipmentType || typeof equipmentType !== "string") {
      return NextResponse.json(
        { success: false, error: "Please select an equipment category." },
        { status: 400 }
      );
    }

    // 4. Construct Email Message & Log Dispatch
    const quotePayload = {
      timestamp: new Date().toISOString(),
      recipient: process.env.CONTACT_RECIPIENT_EMAIL || COMPANY_DETAILS.email,
      sender: process.env.CONTACT_SENDER_EMAIL || "quotes@tarfamaintenance.com",
      data: {
        fullName: fullName.trim(),
        company: (company || "Not Specified").trim(),
        phone: phone.trim(),
        email: (email || "Not Provided").trim(),
        equipmentType,
        powerRating: (powerRating || "Not Specified").trim(),
        message: (message || "No additional message provided.").trim(),
      },
    };

    console.log("[QUOTE_SUBMISSION_RECEIVED]", JSON.stringify(quotePayload, null, 2));

    // If Resend API key is provided, transmit email
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_your_api_key_here") {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: quotePayload.sender,
            to: quotePayload.recipient,
            subject: `[Tarfa Quote Request] ${equipmentType} from ${fullName.trim()} (${company || "Individual"})`,
            text: `
New Technical Quotation Request from Tarfa Website:

- Name: ${quotePayload.data.fullName}
- Company: ${quotePayload.data.company}
- Phone: ${quotePayload.data.phone}
- Email: ${quotePayload.data.email}
- Equipment Class: ${quotePayload.data.equipmentType}
- Power/Voltage Rating: ${quotePayload.data.powerRating}
- Message / Failure Symptoms:
${quotePayload.data.message}

Received at: ${quotePayload.timestamp}
Client IP: ${ip}
            `.trim(),
          }),
        });

        if (!resendRes.ok) {
          console.warn("[RESEND_DISPATCH_WARNING]", await resendRes.text());
        }
      } catch (emailErr) {
        console.error("[EMAIL_TRANSMISSION_ERROR]", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Quotation request successfully received. An engineer will contact you within 24 hours.",
    });
  } catch (error) {
    console.error("[QUOTE_ROUTE_ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please call us directly.",
      },
      { status: 500 }
    );
  }
}

