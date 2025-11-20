import { cn } from "@/lib/utils";

export function PlanifyLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-auto h-auto", className)}
      viewBox="0 0 300 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Planify Logo"
    >
      <defs>
        <radialGradient id="orbital-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.8"/>
          <stop offset="70%" stopColor="#007BFF" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#0A1931" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="path-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F2FE" />
          <stop offset="100%" stopColor="#00A7B5" />
        </linearGradient>
        <linearGradient id="path-gradient-2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00C9FF" />
          <stop offset="100%" stopColor="#92FE9D" />
        </linearGradient>
         <linearGradient id="path-gradient-3" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="#007BFF" />
          <stop offset="100%" stopColor="#00F2FE" />
        </linearGradient>
        <filter id="logo-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
      </defs>

      {/* -- Logo Icon Group -- */}
      <g transform="translate(10, 10)" filter="url(#logo-glow-filter)">
        {/* -- Central Glowing Orb (The AI Core) -- */}
        <circle cx="40" cy="40" r="12" fill="url(#orbital-glow)" />
        <circle cx="40" cy="40" r="8" fill="white" fillOpacity="0.9" />

        {/* -- Orbital Path 1 (Short & Inner) -- */}
        <path 
          d="M 40 10 A 30 30 0 1 1 10 40" 
          stroke="url(#path-gradient-1)" 
          strokeWidth="6" 
          strokeLinecap="round"
          fill="none" 
        />
        {/* -- Orbital Path 2 (Medium & Outer) -- */}
        <path 
          d="M 78 25 A 40 40 0 0 1 25 78" 
          stroke="url(#path-gradient-2)" 
          strokeWidth="6" 
          strokeLinecap="round"
          fill="none" 
        />
        {/* -- Orbital Path 3 (Long & Crossing) -- */}
        <path 
          d="M 2 70 A 55 55 0 0 0 70 2" 
          stroke="url(#path-gradient-3)" 
          strokeWidth="6" 
          strokeLinecap="round"
          fill="none" 
        />
      </g>
      
      {/* -- Text -- */}
      <g transform="translate(100, 20)">
        <text
            x="0"
            y="45"
            fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontSize="48"
            fontWeight="800"
            fill="hsl(var(--foreground))"
            letterSpacing="-2"
        >
            PLANIFY
        </text>
      </g>
    </svg>
  );
}
