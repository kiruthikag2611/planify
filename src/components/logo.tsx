import { cn } from "@/lib/utils";

export function PlanifyLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-auto h-auto", className)}
      viewBox="0 0 400 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Planify Logo"
    >
      <defs>
        <linearGradient id="notebook-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: 'hsl(190, 80%, 85%)'}} />
          <stop offset="50%" style={{stopColor: 'hsl(240, 80%, 90%)'}} />
          <stop offset="100%" style={{stopColor: 'hsl(150, 80%, 88%)'}} />
        </linearGradient>
        <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
        <filter id="drop-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"/>
          <feOffset dy="2"/>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <g transform="translate(15, 0)">
        
        <g filter="url(#drop-shadow)" style={{ opacity: 0.8 }}>
          <path d="M 40 25 C 30 25, 25 30, 25 40 L 25 80 C 25 90, 30 95, 40 95 L 90 95 C 100 95, 105 90, 105 80 L 105 40 C 105 30, 100 25, 90 25 Z" fill="url(#notebook-grad)" />
          
          <path d="M 65 25 L 65 95" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.5" />
          
          <path d="M 35 45 L 55 45" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.7" strokeLinecap="round" />
          <path d="M 35 60 L 55 60" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.7" strokeLinecap="round" />
          <path d="M 35 75 L 55 75" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.7" strokeLinecap="round" />
          
          <path d="M75 55 L85 68 L100 50" stroke="#FFFFFF" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

      </g>
      
      <text
        x="265"
        y="75"
        fontFamily="Inter, sans-serif"
        fontSize="50"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
        style={{
          letterSpacing: '0.01em',
          textShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)',
        }}
      >
        PLANIFY
      </text>
    </svg>
  );
}
