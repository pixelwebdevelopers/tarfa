import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

/**
 * Industrial Electric Motor Icon
 * Accurately depicts an industrial squirrel-cage induction motor:
 * stator cooling ribs, terminal connection box, drive shaft with keyway, and mounting feet.
 */
export function MotorIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Motor Stator Housing */}
      <rect x="5" y="7" width="11" height="10" rx="1" />
      {/* Stator Cooling Fins / Ribs */}
      <path d="M5 10h11" />
      <path d="M5 14h11" />
      {/* Terminal Connection Box on Top */}
      <rect x="8" y="4" width="5" height="3" rx="0.5" />
      {/* Drive Shaft extending out with Keyway */}
      <path d="M16 12h5" />
      <path d="M19 10.5v3" />
      {/* Rear Cooling Fan Cover */}
      <path d="M5 7.5a4 4 0 0 0 0 9" />
      {/* Base Mounting Feet */}
      <path d="M4 17v3h3" />
      <path d="M14 20h3v-3" />
    </svg>
  );
}

/**
 * Industrial Chiller Compressor Icon
 * Depicts a semi-hermetic / screw refrigeration compressor with
 * compression body, suction port, discharge flange, and cylinder head.
 */
export function CompressorIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Compressor Barrel Housing */}
      <rect x="4" y="8" width="13" height="9" rx="1.5" />
      {/* Screw Rotor Compression Lines */}
      <path d="M7 11c1-1 2.5-1 3.5 0s2.5 1 3.5 0" />
      <path d="M7 14c1-1 2.5-1 3.5 0s2.5 1 3.5 0" />
      {/* Suction Service Flange on Top */}
      <rect x="7" y="4" width="4" height="4" rx="0.5" />
      <path d="M9 2v2" />
      {/* High-Pressure Discharge Nozzle on Right */}
      <path d="M17 11h3v3h-3" />
      <path d="M20 12.5h2" />
      {/* Oil Sump / Sight Glass */}
      <circle cx="9" cy="12.5" r="1" />
      {/* Base Mounts */}
      <path d="M5 17v3" />
      <path d="M16 17v3" />
      <path d="M3 20h16" />
    </svg>
  );
}

/**
 * Centrifugal Water & Process Pump Icon
 * Depicts a classic industrial centrifugal volute casing with
 * center suction eye flange, tangential upward discharge nozzle, and mounting foot.
 */
export function PumpIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Volute Spiral Casing */}
      <circle cx="11" cy="13" r="6" />
      {/* Center Suction Eye Flange */}
      <circle cx="11" cy="13" r="2.5" />
      {/* Impeller internal blades */}
      <path d="M11 10.5v-1" />
      <path d="M13.5 13h1" />
      <path d="M11 15.5v1" />
      <path d="M8.5 13h-1" />
      {/* Tangential Vertical Discharge Nozzle */}
      <path d="M14 8V3h4v5.5" />
      <path d="M13 3h6" />
      {/* Drive Shaft Coupler */}
      <path d="M5 13H2" />
      {/* Base Mounting Foot */}
      <path d="M7 19v2h8v-2" />
    </svg>
  );
}

/**
 * Generator, Alternator & Transformer Icon
 * Depicts electromagnetic transformer core with primary & secondary inductive winding coils
 * and high-voltage ceramic insulators/bushings.
 */
export function TransformerIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Transformer Tank / Enclosure */}
      <rect x="4" y="7" width="16" height="13" rx="1" />
      {/* Primary & Secondary Interlinked Induction Coils */}
      <circle cx="9" cy="14" r="3" />
      <circle cx="15" cy="14" r="3" />
      {/* High-Voltage Bushings on Top */}
      <path d="M8 7V3" />
      <path d="M6.5 4h3" />
      <path d="M16 7V3" />
      <path d="M14.5 4h3" />
      {/* Magnetic Core Flux Line */}
      <path d="M12 10v8" />
    </svg>
  );
}

/**
 * Stator Core Lamination Ring Icon
 * Depicts an electrical steel stator core with internal radial slots and teeth for rewinding.
 */
export function StatorCoreIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Outer Stator Core Lamination Ring */}
      <circle cx="12" cy="12" r="9" />
      {/* Inner Rotor Bore */}
      <circle cx="12" cy="12" r="4.5" />
      {/* Stator Winding Slots & Teeth */}
      <path d="M12 3v4.5" />
      <path d="M12 16.5V21" />
      <path d="M3 12h4.5" />
      <path d="M16.5 12H21" />
      <path d="M5.6 5.6l3.2 3.2" />
      <path d="M15.2 15.2l3.2 3.2" />
      <path d="M18.4 5.6l-3.2 3.2" />
      <path d="M8.8 15.2l-3.2 3.2" />
    </svg>
  );
}

/**
 * Dynamic Rotor Balancing & Testing Icon
 * Depicts a balanced cylindrical rotor mounted on dual balancing machine pedestals
 * with dynamic rotation calibration arrows.
 */
export function RotorBalancingIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Cylindrical Rotor Body */}
      <rect x="7" y="9" width="10" height="6" rx="0.5" />
      {/* Center Balancing Shaft */}
      <path d="M2 12h5" />
      <path d="M17 12h5" />
      {/* Left Bearing Pedestal */}
      <path d="M4 12v6" />
      <path d="M2 18h4" />
      {/* Right Bearing Pedestal */}
      <path d="M20 12v6" />
      <path d="M18 18h4" />
      {/* Dynamic Rotation Balancing Indicator */}
      <path d="M9 5c1.8-1 4.2-1 6 0" />
      <path d="M15 5h-2.5V3" />
      {/* Vibration Pick-Up Sensor Probe */}
      <path d="M12 7v2" />
    </svg>
  );
}

// ==========================================
// SECTOR SPECIFIC INDUSTRIAL ICONS
// ==========================================

/**
 * Government Projects & Public Utilities Icon
 * Depicts a municipal water tower / pumping reservoir structure.
 */
export function GovernmentWorksIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Water Tower Tank */}
      <path d="M6 5h12l-1.5 5h-9z" />
      <path d="M9 3h6v2H9z" />
      {/* Supporting Structural Legs */}
      <path d="M7.5 10L6 21" />
      <path d="M16.5 10L18 21" />
      {/* Central Riser Pipe */}
      <path d="M12 10v11" />
      {/* Structural Cross Bracing */}
      <path d="M6.8 15h10.4" />
      <path d="M7 12l10 6" />
      <path d="M17 12L7 18" />
    </svg>
  );
}

/**
 * Steel & Heavy Metal Manufacturing Icon
 * Depicts structural steel I-beam cross-section & smelting furnace profile.
 */
export function SteelIndustryIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Structural Steel Wide-Flange I-Beam */}
      <path d="M4 4h16v3h-6v10h6v3H4v-3h6V7H4z" />
      {/* Molten Pouring Spark Lines */}
      <path d="M19 9l2 1" />
      <path d="M19 15l2-1" />
    </svg>
  );
}

/**
 * Cement & Mineral Industries Icon
 * Depicts an industrial cement rotary kiln on support trunnion rollers.
 */
export function CementIndustryIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Rotary Kiln Cylinder with 10-degree tilt */}
      <path d="M3 10.5l16-3.5v7l-16 3.5z" />
      {/* Kiln Drive Bull Gear Ring */}
      <path d="M10 9v7" />
      <path d="M12 8.5v7" />
      {/* Left Trunnion Roller Support */}
      <circle cx="6" cy="18" r="1.5" />
      <path d="M4 21h4" />
      {/* Right Trunnion Roller Support */}
      <circle cx="16" cy="16" r="1.5" />
      <path d="M14 19h4" />
      {/* Clinker Feed Hood */}
      <path d="M19 7h2v7h-2" />
    </svg>
  );
}

/**
 * Civil Construction & Infrastructure Icon
 * Depicts a tower crane jib and hook over infrastructure site.
 */
export function ConstructionIndustryIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Crane Mast Tower */}
      <path d="M7 21V5h2v16" />
      {/* Mast Lacing */}
      <path d="M7 9l2 2" />
      <path d="M7 13l2 2" />
      <path d="M7 17l2 2" />
      {/* Crane Horizontal Jib */}
      <path d="M3 6h18" />
      {/* Apex & Pendant Lines */}
      <path d="M8 2l-5 4" />
      <path d="M8 2l13 4" />
      {/* Hoist Trolley, Cable & Lifting Hook */}
      <rect x="15" y="5" width="2" height="2" />
      <path d="M16 7v6" />
      <path d="M15 13a1 1 0 0 0 2 0v-1" />
      {/* Base */}
      <path d="M4 21h8" />
    </svg>
  );
}

/**
 * Healthcare & Hospital Facilities Icon
 * Depicts a hospital facility with medical cross and emergency beacon.
 */
export function HealthcareIndustryIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Hospital Building */}
      <rect x="4" y="4" width="16" height="17" rx="1" />
      {/* Medical Cross */}
      <path d="M12 8v6" />
      <path d="M9 11h6" />
      {/* Facility Entrance */}
      <path d="M10 21v-4h4v4" />
      {/* Continuous Power Pulse Line */}
      <path d="M2 13h2" />
      <path d="M20 13h2" />
    </svg>
  );
}

/**
 * Flour Mills & Grain Silo Icon
 * Depicts twin industrial grain storage silos with bucket elevator leg.
 */
export function FlourMillIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Left Grain Silo */}
      <path d="M4 8l3-4 3 4" />
      <rect x="4" y="8" width="6" height="13" rx="0.5" />
      {/* Right Grain Silo */}
      <path d="M14 8l3-4 3 4" />
      <rect x="14" y="8" width="6" height="13" rx="0.5" />
      {/* Vertical Elevator Conveyor Pipe between Silos */}
      <path d="M11.5 6v15" />
      <path d="M12.5 6v15" />
      <path d="M10 8h4" />
    </svg>
  );
}

/**
 * Food Processing & Cold Storage Icon
 * Depicts sub-zero refrigerated storage chamber with snowflake freezing symbol.
 */
export function ColdChainFoodIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Cold Storage Warehouse Body */}
      <path d="M3 20V7l9-4 9 4v13H3z" />
      {/* Internal Sub-Zero Snowflake */}
      <path d="M12 9v6" />
      <path d="M9 12h6" />
      <path d="M10 10l4 4" />
      <path d="M14 10l-4 4" />
      {/* Insulated Cold-Room Door Base */}
      <path d="M8 20v-3h8v3" />
    </svg>
  );
}

// ==========================================
// WORKFLOW / PROCESS STAGE ICONS
// ==========================================

/** Stage 01: Receipt & Initial Log Inspection */
export function LogInspectionIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Quality Logging Clipboard */}
      <rect x="5" y="4" width="14" height="17" rx="1" />
      <path d="M9 2h6v3H9z" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
      <path d="M8 17h4" />
      {/* Caliper / Magnifying Inspect Point */}
      <circle cx="16" cy="15" r="2" />
      <path d="M17.5 16.5L20 19" />
    </svg>
  );
}

/** Stage 02: Mechanical Teardown & Diagnostics */
export function TeardownIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Heavy Mechanical Open-End Wrench */}
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      {/* Disassembly Bearing Puller Jaws */}
      <path d="M5 5l4 4" />
      <circle cx="18" cy="6" r="1" />
    </svg>
  );
}

/** Stage 03: Precision Rewinding & Slot Insulation */
export function RewindingSpoolIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Copper Wire Spool Flanges */}
      <path d="M5 4h14v3H5z" />
      <path d="M5 17h14v3H5z" />
      {/* Spool Barrel */}
      <rect x="7" y="7" width="10" height="10" />
      {/* Wound Copper Wire Strands */}
      <path d="M7 9h10" />
      <path d="M7 11h10" />
      <path d="M7 13h10" />
      <path d="M7 15h10" />
      {/* Outgoing Copper Conductor to Winding Needle */}
      <path d="M17 12h4l-2-2" />
    </svg>
  );
}

/** Stage 04: Varnish Impregnation & Thermal Baking */
export function BakingOvenIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Thermal Baking Oven Chamber */}
      <rect x="4" y="4" width="16" height="15" rx="1" />
      {/* Oven Inspection Glass Window */}
      <rect x="7" y="7" width="10" height="6" rx="0.5" />
      {/* Internal Heating Radiator Elements */}
      <path d="M9 10c.5-.8 1.5-.8 2 0s1.5.8 2 0" />
      {/* VPI Temperature Dial */}
      <circle cx="12" cy="16" r="1" />
      {/* Oven Legs */}
      <path d="M6 19v3" />
      <path d="M18 19v3" />
    </svg>
  );
}

/** Stage 05: Dynamic Rotor Balancing Machine */
export function BalancingRigIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return <RotorBalancingIcon className={className} size={size} {...props} />;
}

/** Stage 06: Full No-Load Run & Electrical Sign-off */
export function ElectricalTestIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Electrical Test Console */}
      <rect x="3" y="4" width="18" height="14" rx="1" />
      {/* Sinusoidal Surge / Megger Waveform Display */}
      <path d="M6 11c1 0 1.5-3 2.5-3s2 6 3 6 2-4 3-4 1.5 1 2.5 1" />
      {/* High-Pot Voltage Terminals */}
      <path d="M8 18v3" />
      <path d="M16 18v3" />
      <circle cx="17" cy="8" r="1" />
    </svg>
  );
}

/** Stage 07: Protective Coating & Crated Dispatch */
export function DispatchCrateIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Heavy-Duty Equipment Packaging Crate */}
      <rect x="3" y="5" width="18" height="15" rx="1" />
      {/* Structural Corner & Center Steel Braces */}
      <path d="M3 5l18 15" />
      <path d="M21 5L3 20" />
      <path d="M10 5v15" />
      <path d="M14 5v15" />
      {/* Transport Forklift / Skid Pocket Base */}
      <path d="M6 20v2" />
      <path d="M18 20v2" />
    </svg>
  );
}

