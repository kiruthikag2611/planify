import { cn } from "@/lib/utils";

export function PlanifyLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-auto h-auto", className)}
      viewBox="0 0 400 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Planify Logo"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "hsl(180, 100%, 35%)", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "hsl(210, 100%, 25%)", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "hsl(45, 100%, 50%)", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "hsl(35, 100%, 60%)", stopOpacity: 1 }} />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* <!-- Icon Group --> */}
      <g transform="translate(20, 30)">
        {/* <!-- Open Book --> */}
        <path d="M50 10 C 20 10, 10 30, 10 60 C 10 90, 20 110, 50 110 L 50 10 Z" fill="url(#grad1)" />
        <path d="M50 10 C 80 10, 90 30, 90 60 C 90 90, 80 110, 50 110 L 50 10 Z" fill="url(#grad1)" />
        <path d="M50 110 C 30 110, 20 95, 20 80" stroke="hsl(190, 80%, 70%)" strokeWidth="1.5" fill="none" />
        <path d="M50 110 C 70 110, 80 95, 80 80" stroke="hsl(190, 80%, 70%)" strokeWidth="1.5" fill="none" />
        <path d="M25 25h50" stroke="hsl(190, 80%, 60%)" strokeWidth="1" strokeLinecap="round"/>
        <path d="M25 35h50" stroke="hsl(190, 80%, 60%)" strokeWidth="1" strokeLinecap="round"/>
        
        {/* <!-- Brain Icon --> */}
        <g transform="translate(50, 40) scale(0.6)">
            <path d="M18.33 26H5.67A2.67 2.67 0 0 1 3 23.33V5.67A2.67 2.67 0 0 1 5.67 3h12.66A2.67 2.67 0 0 1 21 5.67v17.66A2.67 2.67 0 0 1 18.33 26Z" fill="none"/>
            <path d="M12 3a9 9 0 0 0-9 9c0 4.3 2.5 8 6 9.3V24h6v-2.7c3.5-1.3 6-5 6-9.3a9 9 0 0 0-9-9Z" fill="url(#grad2)" filter="url(#glow)"/>
        </g>

        {/* <!-- Graduation Cap --> */}
        <g transform="translate(30, -15) rotate(-15)">
          <path d="M5 15 L 25 10 L 45 15 L 25 20 Z" fill="hsl(210, 50%, 25%)" />
          <rect x="18" y="15" width="14" height="6" fill="hsl(210, 50%, 35%)" />
          <line x1="45" y1="15" x2="48" y2="10" stroke="url(#grad2)" strokeWidth="1.5" />
        </g>

        {/* <!-- Pencil --> */}
        <g transform="translate(75, 75) rotate(45)">
          <path d="M0 0 L5 -2 L20 13 L15 15 Z" fill="hsl(210, 50%, 80%)"/>
          <path d="M-2 -2 L0 0 L5 -2 L3 -4 Z" fill="hsl(35, 100%, 70%)"/>
          <rect x="5" y="-2" width="15" height="4" rx="1" fill="hsl(210, 50%, 60%)"/>
        </g>
      </g>
      
      {/* <!-- Text --> */}
      <g transform="translate(130, 45)">
        <text
            x="0"
            y="35"
            fontFamily="Inter, sans-serif"
            fontSize="42"
            fontWeight="700"
            fill="hsl(var(--foreground))"
            letterSpacing="-1"
        >
            PLANIFY
        </text>
        <text
            x="0"
            y="65"
            fontFamily="Inter, sans-serif"
            fontSize="18"
            fontWeight="500"
            fill="hsl(var(--muted-foreground))"
            letterSpacing="0.5"
        >
            Smart Timetable
        </text>
         <rect x="200" y="5" width="3" height="70" rx="1.5" fill="url(#grad2)"/>
      </g>
      
    </svg>
  );
}
