import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F8F9FA] text-[#0F172A] flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full border border-[#E2E5E9] bg-white p-8 text-center space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[#DC2324] font-bold">
            ERROR 404 // ROUTE NOT FOUND
          </span>
          <h1 className="text-2xl font-bold tracking-tight">Resource Unavailable</h1>
          <p className="text-sm text-[#4B5563]">
            The requested technical document or service route does not exist.
          </p>
          <div className="pt-2">
            <Link
              href="/en"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#DC2324] text-white text-sm font-semibold hover:bg-[#B81B1C] transition-colors"
            >
              Return to Workshop Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}

