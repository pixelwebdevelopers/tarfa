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
// WORKFLOW / PROCESS STAGE ICONS (ENGINEERED)
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
      {/* Technical Inspection Clipboard */}
      <rect x="4" y="4" width="16" height="17" rx="2" />
      <path d="M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1z" />
      {/* Verified Inspection Checkmarks */}
      <path d="M7.5 9.5l1.5 1.5 3-3" />
      <line x1="14" y1="9.5" x2="17" y2="9.5" />
      <path d="M7.5 13.5l1.5 1.5 3-3" />
      <line x1="14" y1="13.5" x2="17" y2="13.5" />
      {/* Dimensional Caliper / Gauge Marks */}
      <line x1="7.5" y1="17.5" x2="16.5" y2="17.5" />
      <line x1="7.5" y1="16.5" x2="7.5" y2="18.5" />
      <line x1="12" y1="16.5" x2="12" y2="18.5" />
      <line x1="16.5" y1="16.5" x2="16.5" y2="18.5" />
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
      {/* Machine Gear & Bearing Assembly */}
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6l1.4 1.4m10 10l1.4 1.4M5.6 18.4l1.4-1.4m10-10l1.4-1.4" />
      {/* Diagonal Mechanic Wrench Tool */}
      <path d="M17 7l3.5-3.5a1.5 1.5 0 0 1 2.1 2.1L19.1 9.1" />
      <path d="M7 17l-3.5 3.5a1.5 1.5 0 0 0 2.1 2.1L9.1 19.1" />
    </svg>
  );
}

/** Stage 03: Precision Stator Rewinding & Copper Coils */
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
      {/* Stator Core Frame with Winding Slots */}
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <line x1="8" y1="3" x2="8" y2="21" />
      <line x1="16" y1="3" x2="16" y2="21" />
      {/* Concentric Copper Winding Coils */}
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="16" x2="16" y2="16" />
      {/* Copper Winding Needle / Lead Wire */}
      <circle cx="12" cy="11.5" r="1.5" fill="currentColor" />
      <path d="M16 10l3-3h2" />
    </svg>
  );
}

/** Stage 04: Varnish Impregnation & Thermal Baking Oven */
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
      {/* Heavy Curing Oven Chamber */}
      <rect x="3" y="3" width="18" height="17" rx="1.5" />
      {/* Oven Control Panel / Digital Display */}
      <line x1="3" y1="7" x2="21" y2="7" />
      <circle cx="6" cy="5" r="0.75" fill="currentColor" />
      <circle cx="9" cy="5" r="0.75" fill="currentColor" />
      <line x1="14" y1="5" x2="18" y2="5" />
      {/* Insulated Oven Window */}
      <rect x="6" y="10" width="12" height="7" rx="1" />
      {/* Thermal Heat Convection Waves */}
      <path d="M9 12.5c.6-.8 1.4-.8 2 0s1.4.8 2 0" />
      <path d="M9 15c.6-.8 1.4-.8 2 0s1.4.8 2 0" />
      {/* Heavy Base Supports */}
      <line x1="6" y1="20" x2="6" y2="22" />
      <line x1="18" y1="20" x2="18" y2="22" />
    </svg>
  );
}

/** Stage 05: Dynamic Rotor Balancing Machine (ISO 1940) */
export function BalancingRigIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
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
      {/* Motor Rotor Body with Lamination Segments */}
      <rect x="7" y="8" width="10" height="7" rx="1" />
      <line x1="10" y1="8" x2="10" y2="15" />
      <line x1="12" y1="8" x2="12" y2="15" />
      <line x1="14" y1="8" x2="14" y2="15" />
      {/* Center Rotor Shaft */}
      <line x1="2" y1="11.5" x2="7" y2="11.5" />
      <line x1="17" y1="11.5" x2="22" y2="11.5" />
      {/* Dual Precision Bearing Pedestals */}
      <path d="M4 11.5v6.5" />
      <path d="M2 18h4" />
      <path d="M20 11.5v6.5" />
      <path d="M18 18h4" />
      {/* Dynamic Rotation Balancing Indicator */}
      <path d="M9 4.5a5 5 0 0 1 6 0" />
      <path d="M14.5 3.5l1.5 1-1.5 1" />
      {/* Vibration Pick-Up Sensor Probe */}
      <line x1="12" y1="6.5" x2="12" y2="8" />
    </svg>
  );
}

/** Stage 06: Surge Comparison & Electrical High-Pot Testing */
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
      {/* Electrical Test Analyzer Console */}
      <rect x="3" y="4" width="18" height="14" rx="2" />
      {/* Oscilloscope Screen */}
      <rect x="5" y="6" width="10" height="10" rx="1" />
      {/* Surge Waveform on Screen */}
      <path d="M6 11c1-2 1.5-2 2 0s1.5 2 2 0 1.5-2 2 0 1.5 2 2 0" />
      {/* High-Voltage Flash Symbol */}
      <path d="M18 7l-1.5 3h2l-2 3" />
      {/* Control Dials & Jacks */}
      <circle cx="18" cy="14" r="1" fill="currentColor" />
      {/* Test Leads / Kelvin Probes extending from bottom */}
      <line x1="8" y1="18" x2="8" y2="21" />
      <line x1="14" y1="18" x2="14" y2="21" />
      <line x1="7" y1="21" x2="9" y2="21" />
      <line x1="13" y1="21" x2="15" y2="21" />
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
      {/* Heavy-Duty Industrial Wooden Crate */}
      <rect x="3" y="4" width="18" height="15" rx="1" />
      {/* Steel Strapping Bands */}
      <line x1="3" y1="11.5" x2="21" y2="11.5" />
      <line x1="12" y1="4" x2="12" y2="19" />
      {/* Reinforced Corner Steel Brackets */}
      <path d="M3 8h4V4" />
      <path d="M21 8h-4V4" />
      <path d="M3 15h4v4" />
      <path d="M21 15h-4v4" />
      {/* Pallet Skids */}
      <line x1="6" y1="19" x2="6" y2="21.5" />
      <line x1="18" y1="19" x2="18" y2="21.5" />
      {/* Quality Certified Inspection Checkmark Stamp */}
      <circle cx="16.5" cy="15.5" r="2.5" fill="#DC2324" stroke="none" />
      <path d="M15.2 15.5l1 1 1.6-1.6" stroke="white" strokeWidth="1.2" />
    </svg>
  );
}
