import { cn } from "@/lib/utils";

export function PlanifyLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-auto h-auto", className)}
      viewBox="0 0 220 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Planify Logo"
    >
      <defs>
        <linearGradient id="text-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#374151" />
        </linearGradient>
      </defs>
      
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="'Inter', sans-serif"
        fontSize="38"
        fontWeight="800"
        fill="url(#text-grad)"
        letterSpacing="-1.5"
      >
        PLANIFY
      </text>
    </svg>
  );
}
