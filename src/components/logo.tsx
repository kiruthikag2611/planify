import { cn } from "@/lib/utils";

export function PlanifyLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("w-auto h-auto", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: 'hsl(var(--primary) / 0.7)', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: 'hsl(var(--primary) / 0.5)', stopOpacity: 1}} />
        </linearGradient>
         <linearGradient id="pencilGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: 'hsl(var(--foreground) / 0.8)', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: 'hsl(var(--foreground) / 0.6)', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      
      {/* Book */}
      <path 
        d="M20 75C20 65 35 60 50 60C65 60 80 65 80 75" 
        stroke="url(#bookGradient)" 
        strokeWidth="4" 
        fill="none" 
        strokeLinecap="round"
      />
      <path 
        d="M20 75V30H80V75"
        stroke="url(#bookGradient)"
        strokeWidth="4"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
       />
       <path
        d="M50 60V30"
        stroke="url(#bookGradient)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
       />

      {/* Pencil */}
      <g transform="rotate(-30 50 40)">
        <rect 
          x="15" 
          y="38" 
          width="70" 
          height="8" 
          rx="3" 
          fill="url(#pencilGradient)"
        />
        <path 
          d="M15 38L10 42L15 46" 
          fill="hsl(var(--muted-foreground))"
        />
         <path 
          d="M85 38L90 42L85 46" 
          fill="hsl(var(--card))"
          stroke="hsl(var(--border))"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}
