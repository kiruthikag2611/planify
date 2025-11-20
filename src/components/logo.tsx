import { cn } from "@/lib/utils";

export function PlanifyLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-auto h-auto", className)}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Planify Logo"
    >
      <defs>
        <linearGradient id="compass-gradient" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00F2FE" />
          <stop offset="1" stopColor="#2A48D9" />
        </linearGradient>
        <filter id="compass-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="center-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#FDE047" stopOpacity="1" />
            <stop offset="70%" stopColor="#FDE047" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2A48D9" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g filter="url(#compass-glow)">
        <path 
            d="M 15 75 A 40 40 0 1 1 85 75" 
            stroke="url(#compass-gradient)"
            strokeWidth="6" 
            strokeLinecap="round"
            fill="none" 
        />

        <path d="M 50 11 L 50 19" stroke="hsl(var(--foreground))" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        <path d="M 23 25 L 28 30" stroke="hsl(var(--foreground))" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        <path d="M 77 25 L 72 30" stroke="hsl(var(--foreground))" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        
        <g>
            <path d="M 33 45 L 39 50" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" />
            <circle cx="31" cy="43" r="3" fill="#FDE047" />
        </g>
      </g>
      
      <g transform="rotate(30 50 50)">
        <path d="M 50 50 L 50 20 L 53 23 M 50 20 L 47 23" stroke="hsl(var(--foreground))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
      
      <circle cx="50" cy="50" r="10" fill="url(#center-glow)" opacity="0.8" />
       <circle cx="50" cy="50" r="2.5" fill="hsl(var(--foreground))" />

      <text
          x="50"
          y="95"
          fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="hsl(var(--foreground))"
          textAnchor="middle"
          letterSpacing="-0.5"
      >
          PLANIFY
      </text>
    </svg>
  );
}
