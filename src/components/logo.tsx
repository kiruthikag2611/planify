import { cn } from "@/lib/utils";

export function PlanifyLogo({ className, variant = 'default' }: { className?: string, variant?: 'default' | 'icon' | 'monochrome' | 'full' }) {

  if (variant === 'monochrome') {
     return (
      <svg
        className={cn("w-auto h-auto", className)}
        viewBox="0 0 280 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Planify Logo Monochrome"
      >
        <g fill="currentColor">
           <path d="M46.7 5.1C55.3 5.1 62.2 12 62.2 20.6V20.6C62.2 29.2 55.3 36.1 46.7 36.1H21.3C12.7 36.1 5.8 29.2 5.8 20.6V20.6C5.8 12 12.7 5.1 21.3 5.1H46.7Z" opacity="0.2" />
          <path d="M46.7 5.1C55.3 5.1 62.2 12 62.2 20.6V20.6C62.2 29.2 55.3 36.1 46.7 36.1H21.3C12.7 36.1 5.8 29.2 5.8 20.6V20.6C5.8 12 12.7 5.1 21.3 5.1H46.7Z" stroke="currentColor" strokeWidth="2" />
          <path d="M22 17C22 16.4 22.4 16 23 16H45C45.6 16 46 16.4 46 17V17C46 17.6 45.6 18 45 18H23C22.4 18 22 17.6 22 17V17Z" />
          <path d="M22 23C22 22.4 22.4 22 23 22H38C38.6 22 39 22.4 39 23V23C39 23.6 38.6 24 38 24H23C22.4 24 22 23.6 22 23V23Z" />
        </g>
        <text
          x="170"
          y="37"
          fontFamily="sans-serif"
          fontSize="28"
          fontWeight="bold"
          fill="currentColor"
          textAnchor="middle"
          letterSpacing="1"
        >
          PLANIFY
        </text>
      </svg>
     )
  }

  if (variant === 'icon') {
     return (
        <svg 
            className={cn("w-auto h-auto", className)}
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Planify App Icon"
        >
            <rect width="100" height="100" rx="22" fill="url(#app-icon-bg-grad)"/>
            <defs>
                <linearGradient id="app-icon-bg-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FAD9E2"/>
                    <stop offset="1" stopColor="#E4F3FF"/>
                </linearGradient>
                 <linearGradient id="note-grad" x1="32" y1="28" x2="80" y2="82" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFC8B4"/>
                    <stop offset="1" stopColor="#FF918D"/>
                </linearGradient>
                <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                </filter>
                 <filter id="soft-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.1"/>
                </filter>
            </defs>
            <g style={{transform: "rotate(-10deg) translate(-5px, 5px)"}} filter="url(#soft-shadow)">
                <rect x="32" y="28" width="48" height="48" rx="12" fill="url(#note-grad)"/>
                <path d="M46 51C46 52.1046 45.1046 53 44 53C42.8954 53 42 52.1046 42 51C42 49.8954 42.8954 49 44 49C45.1046 49 46 49.8954 46 51Z" fill="white"/>
                <path d="M62 51C62 52.1046 61.1046 53 60 53C58.8954 53 58 52.1046 58 51C58 49.8954 58.8954 49 60 49C61.1046 49 62 49.8954 62 51Z" fill="white"/>
                <path d="M58 59C58 58.0691 55.5133 57.5 53 57.5C50.4867 57.5 48 58.0691 48 59" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </g>
             <g filter="url(#soft-shadow)">
                <path d="M22 25L28.1459 26.5373C28.6923 26.6805 29.1805 27.1687 29.3237 27.7151L32 38" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round"/>
                <path d="M78 75L71.8541 73.4627C71.3077 73.3195 70.8195 72.8313 70.6763 72.2849L68 62" stroke="#A7F3D0" strokeWidth="4" strokeLinecap="round"/>
                <path d="M80 20L75 25M80 20L75 15" stroke="#C4B5FD" strokeWidth="4" strokeLinecap="round"/>
            </g>
        </svg>
    );
  }

  return (
    <svg
      className={cn("w-auto h-auto", className)}
      viewBox="0 0 320 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Planify Logo"
    >
      <defs>
        <linearGradient id="note-grad-full" x1="10" y1="10" x2="70" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC8B4"/>
          <stop offset="1" stopColor="#FF918D"/>
        </linearGradient>
        <filter id="shadow-full" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#414141" floodOpacity="0.15"/>
        </filter>
        <linearGradient id="text-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4A5568" />
            <stop offset="100%" stopColor="#1A202C" />
        </linearGradient>
      </defs>

      <g filter="url(#shadow-full)">
        <g style={{transform: "rotate(-8deg) translate(25px, 0px)"}}>
            <rect x="10" y="15" width="55" height="55" rx="14" fill="url(#note-grad-full)"/>
            <path d="M28 42C28 43.1046 27.1046 44 26 44C24.8954 44 24 43.1046 24 42C24 40.8954 24.8954 40 26 40C27.1046 40 28 40.8954 28 42Z" fill="white"/>
            <path d="M44 42C44 43.1046 43.1046 44 42 44C40.8954 44 40 43.1046 40 42C40 40.8954 40.8954 40 42 40C43.1046 40 44 40.8954 44 42Z" fill="white"/>
            <path d="M40 49C40 48.0691 37.5133 47.5 35 47.5C32.4867 47.5 30 48.0691 30 49" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        </g>
        <g>
            <path d="M5 20L11.1459 21.5373C11.6923 21.6805 12.1805 22.1687 12.3237 22.7151L15 33" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round"/>
            <path d="M78 68L71.8541 66.4627C71.3077 66.3195 70.8195 65.8313 70.6763 65.2849L68 55" stroke="#A7F3D0" strokeWidth="4" strokeLinecap="round"/>
            <path d="M82 12L77 17M82 12L77 7" stroke="#C4B5FD" strokeWidth="4" strokeLinecap="round"/>
        </g>
      </g>
      
      <text
        x="195"
        y="52"
        fontFamily="'Inter', sans-serif"
        fontSize="36"
        fontWeight="800"
        fill="url(#text-grad)"
        textAnchor="middle"
        letterSpacing="-1"
      >
        PLANIFY
      </text>
    </svg>
  );
}
