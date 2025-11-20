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
        <linearGradient id="pencil-grad" x1="45" y1="50" x2="110" y2="80">
          <stop stopColor="#FFD700" />
          <stop offset="1" stopColor="#FFA500" />
        </linearGradient>
        <linearGradient id="bot-body-grad" x1="68" y1="55" x2="68" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00BFFF" />
          <stop offset="1" stopColor="#1E90FF" />
        </linearGradient>
        <radialGradient id="bulb-glow" cx="0" cy="0" r="1" gradientTransform="translate(68 45) rotate(90) scale(22)">
          <stop stopColor="white" stopOpacity="1" />
          <stop offset="0.7" stopColor="#FBBF24" stopOpacity="0.8" />
          <stop offset="1" stopColor="#FBBF24" stopOpacity="0" />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <g transform="translate(15, -10)">
        
        <path d="M40 50 L120 80 L40 110 L40 50 Z" fill="#2C3E50" opacity="0.1" transform="translate(5, 5)"/>
        
        <g>
          <path d="M40 50 L120 80 L40 110 L40 50 Z" fill="url(#pencil-grad)"/>
          <path d="M40 50 L20 65 L40 80 Z" fill="#E6C478" />
          <path d="M20 65 L28 65 L40 55 L40 75 Z" fill="#C4A660" />
          <path d="M120 80 L140 70 L135 80 L140 90 Z" fill="#FF4500" filter="url(#glow)"/>
          <path d="M135 80 L150 75 L145 80 L150 85 Z" fill="#FFD700" filter="url(#glow)"/>
        </g>
        
        <g transform="translate(10, 0)">
          <rect x="53" y="60" width="30" height="25" rx="8" fill="url(#bot-body-grad)"/>
          <rect x="58" y="58" width="20" height="15" rx="4" fill="#FFFFFF" fillOpacity="0.3"/>
          <path d="M60 55 C60 50, 76 50, 76 55 L71 60 L65 60 L60 55Z" fill="#708090"/>
          
          <circle cx="68" cy="45" r="15" fill="#FBBF24"/>
          <circle cx="68" cy="45" r="20" fill="url(#bulb-glow)" />
          <path d="M63 38 Q 68 35, 73 38" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />

          <circle cx="62" cy="72" r="3" fill="white" />
          <circle cx="74" cy="72" r="3" fill="white" />
          <circle cx="63" cy="73" r="1.5" fill="black" />
          <circle cx="75" cy="73" r="1.5" fill="black" />
          
          <path d="M65 80 Q 68 84, 71 80" stroke="#005EB8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
      </g>
      
      <text
        x="285"
        y="75"
        fontFamily="Inter, sans-serif"
        fontSize="50"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
        style={{
          letterSpacing: '0.02em',
          textShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        PLANIFY
      </text>
    </svg>
  );
}
