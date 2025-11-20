import { cn } from "@/lib/utils";

export function PlanifyLogo({ className, variant = 'default' }: { className?: string, variant?: 'default' | 'icon' | 'monochrome' | 'full' }) {
  if (variant === 'icon') {
    return (
      <svg
        className={cn("w-auto h-auto", className)}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Planify App Icon"
      >
        <defs>
          <linearGradient id="icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E319E" />
            <stop offset="100%" stopColor="#00AEEF" />
          </linearGradient>
          <filter id="icon-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
              <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
              </feMerge>
          </filter>
        </defs>
        <rect width="100" height="100" rx="22" fill="url(#icon-grad)" />
        <g filter="url(#icon-glow)" opacity="0.8">
          <path d="M68.5 31C78.165 31 86 38.835 86 48.5C86 58.165 78.165 66 68.5 66H31.5C21.835 66 14 58.165 14 48.5C14 38.835 21.835 31 31.5 31H68.5Z" fill="white" fillOpacity="0.1"/>
          <path d="M35 53L48.3571 63L65 42" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
    );
  }

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
          <path d="M47.05 13C54.755 13 61 19.245 61 26.95C61 34.655 54.755 40.9 47.05 40.9H20.95C13.245 40.9 7 34.655 7 26.95C7 19.245 13.245 13 20.95 13H47.05Z" fillOpacity="0.1"/>
          <path d="M23 30L32.1429 37L43 23" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
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

  return (
    <svg
      className={cn("w-auto h-auto", className)}
      viewBox="0 0 320 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Planify Logo"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2E319E" />
          <stop offset="100%" stopColor="#00AEEF" />
        </linearGradient>
        <filter id="logo-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.1" />
        </filter>
        <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
      </defs>

      <g transform="translate(10, 10)" filter="url(#logo-shadow)">
        <rect x="0" y="0" width="70" height="60" rx="16" fill="url(#logo-grad)"/>
        
        <g filter="url(#logo-glow)" transform="translate(5, 5)" opacity="0.8">
            <path d="M47.05 13C54.755 13 61 19.245 61 26.95C61 34.655 54.755 40.9 47.05 40.9H20.95C13.245 40.9 7 34.655 7 26.95C7 19.245 13.245 13 20.95 13H47.05Z" fill="white" fillOpacity="0.1"/>
            <path d="M23 30L32.1429 37L43 23" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </g>

      <text
        x="200"
        y="52"
        fontFamily="'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif"
        fontSize="36"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
        letterSpacing="1"
      >
        PLANIFY
      </text>
    </svg>
  );
}
