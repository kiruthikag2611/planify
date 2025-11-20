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
        <radialGradient id="lightbulb-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(68 45) rotate(90) scale(20)">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#FBBF24" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pencil-body-grad" x1="120" y1="65" x2="40" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FACC15" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="rocket-flame-grad" x1="140" y1="65" x2="170" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F97316" />
          <stop offset="1" stopColor="#EF4444" />
        </linearGradient>
        <linearGradient id="robot-body-grad" x1="68" y1="55" x2="68" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22D3EE" />
          <stop offset="1" stopColor="#0EA5E9" />
        </linearGradient>
        <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
      </defs>

      <g transform="translate(10, 0)">
        {/* Pencil Rocket */}
        <g transform="translate(0 10)">
          <path d="M135 65 L120 70 L120 60 L135 65Z" fill="#4B5563"/>
          <path d="M40 60 L120 60 L120 70 L40 70 C 34.4772 70 30 65.5228 30 60 L30 60 L40 60Z" fill="url(#pencil-body-grad)"/>
          <path d="M30 60 C30 54.4772 34.4772 50 40 50 L120 50 L120 60 L30 60Z" fill="#FBBE24"/>
          <path d="M40 50 L20 65 L40 80 L40 50Z" fill="#F7D49B" />
          <path d="M20 65 L25 65 L40 55 L40 75 L25 65Z" fill="#E4B87E" />
          <path d="M135 65 L150 50 L145 65 L150 80 L135 65Z" fill="url(#rocket-flame-grad)" filter="url(#soft-glow)" />
          <path d="M145 65 L165 58 L160 65 L165 72 L145 65Z" fill="#FBBF24" filter="url(#soft-glow)"/>
        </g>
        
        {/* Bolt the Brainy Bot */}
        <g transform="translate(0, -15)">
            {/* Body */}
            <rect x="53" y="60" width="30" height="25" rx="8" fill="url(#robot-body-grad)" />
            <rect x="58" y="58" width="20" height="15" rx="4" fill="#FFFFFF" fillOpacity="0.5"/>
            
            {/* Head */}
            <g>
              <path d="M60 55 C60 50, 76 50, 76 55 L71 60 L65 60 L60 55Z" fill="#94A3B8"/>
              <circle cx="68" cy="45" r="15" fill="#FBBF24"/>
              <circle cx="68" cy="45" r="18" fill="url(#lightbulb-glow)" opacity="0.7"/>
              <path d="M62 38 Q 68 35, 74 38" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </g>

            {/* Eyes */}
            <circle cx="62" cy="72" r="3" fill="white" />
            <circle cx="74" cy="72" r="3" fill="white" />
            <circle cx="63" cy="73" r="1.5" fill="black" />
            <circle cx="75" cy="73" r="1.5" fill="black" />

            {/* Smile */}
            <path d="M65 79 Q 68 83, 71 79" stroke="#0284C7" strokeWidth="2" fill="none" strokeLinecap="round" />
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
