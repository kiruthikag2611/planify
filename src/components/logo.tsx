import { cn } from "@/lib/utils";

export function PlanifyLogo({ className, variant = 'default' }: { className?: string, variant?: 'default' | 'icon' | 'monochrome' | 'full' }) {

  // This is the "Schedule Flow" logo
  if (variant === 'icon') {
    return (
      <svg
        className={cn("w-auto h-auto", className)}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Planify App Icon"
      >
        <rect width="100" height="100" rx="22" fill="url(#app-icon-bg-grad)" />
        <defs>
          <linearGradient id="app-icon-bg-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F0F4FF" />
            <stop offset="1" stopColor="#E6F8F9" />
          </linearGradient>
          <linearGradient id="flow-grad" x1="32" y1="35" x2="75" y2="85" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6EE7B7" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
           <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#3B82F6" floodOpacity="0.2"/>
          </filter>
        </defs>
        
        <g filter="url(#soft-glow)">
          <path d="M36 34C36 31.7909 37.7909 30 40 30H68C70.2091 30 72 31.7909 72 34V62C72 64.2091 70.2091 66 68 66H40C37.7909 66 36 64.2091 36 62V34Z" fill="white" fillOpacity="0.8" />
          <path d="M36 45H72" stroke="black" strokeOpacity="0.05" strokeWidth="2" />
          <path d="M36 55H72" stroke="black" strokeOpacity="0.05" strokeWidth="2" />
          <path d="M48 30V66" stroke="black" strokeOpacity="0.05" strokeWidth="2" />
          <path d="M60 30V66" stroke="black" strokeOpacity="0.05" strokeWidth="2" />
          
          <path d="M28 55C34.6667 61 46.3 69.8 54 62C61.7 54.2 62 45.3333 62 42" stroke="url(#flow-grad)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="28" cy="55" r="5" fill="#6EE7B7" />

          <g>
            <path d="M69.5 35.5L71 34M71 34L72.5 35.5M71 34V32M71 34V37" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M62.5 63.5L64 62M64 62L65.5 63.5M64 62V60M64 62V65" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
          </g>
        </g>
      </svg>
    )
  }

  // This is the "Schedule Flow" logo
  return (
    <svg
      className={cn("w-auto h-auto", className)}
      viewBox="0 0 320 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Planify Logo"
    >
      <defs>
        <linearGradient id="flow-grad-full" x1="15" y1="20" x2="60" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#818CF8"/>
          <stop offset="1" stopColor="#3B82F6"/>
        </linearGradient>
        <linearGradient id="grid-grad-full" x1="25" y1="15" x2="75" y2="75" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.7"/>
            <stop offset="1" stopColor="white" stopOpacity="0.4"/>
        </linearGradient>
         <filter id="shadow-full" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#4f46e5" floodOpacity="0.1"/>
        </filter>
        <linearGradient id="text-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#374151" />
        </linearGradient>
      </defs>

      <g transform="translate(20, 0)" filter="url(#shadow-full)">
        <path d="M28 22C28 18.6863 30.6863 16 34 16H66C69.3137 16 72 18.6863 72 22V54C72 57.3137 69.3137 60 66 60H34C30.6863 60 28 57.3137 28 54V22Z" fill="url(#grid-grad-full)" />
        <path d="M28 34H72" stroke="black" strokeOpacity="0.04" strokeWidth="2" />
        <path d="M28 46H72" stroke="black" strokeOpacity="0.04" strokeWidth="2" />
        <path d="M42 16V60" stroke="black" strokeOpacity="0.04" strokeWidth="2" />
        <path d="M57 16V60" stroke="black" strokeOpacity="0.04" strokeWidth="2" />
        <path d="M18 47C24.6667 53 36.3 61.8 44 54C51.7 46.2 52 37.3333 52 34" stroke="url(#flow-grad-full)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="47" r="5" fill="#818CF8"/>
      </g>
      
      <text
        x="195"
        y="52"
        fontFamily="'Inter', sans-serif"
        fontSize="38"
        fontWeight="800"
        fill="url(#text-grad)"
        textAnchor="middle"
        letterSpacing="-1.5"
      >
        PLANIFY
      </text>
    </svg>
  );
}