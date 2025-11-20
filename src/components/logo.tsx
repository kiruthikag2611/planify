import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function PlanifyLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="180"
      height="180"
      {...props}
      className={cn(props.className)}
    >
      <defs>
        <linearGradient
          id="a"
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#154c79" />
          <stop offset="1" stopColor="#0d3a5c" />
        </linearGradient>
      </defs>
      <path
        d="M85,5H15A10,10,0,0,0,5,15V85A10,10,0,0,0,15,95H85A10,10,0,0,0,95,85V15A10,10,0,0,0,85,5Z"
        fill="url(#a)"
      />
      <circle cx="50" cy="35" r="10" fill="#ffc107" />
      <rect x="25" y="55" width="20" height="20" rx="3" fill="#fff" />
      <rect x="55" y="55" width="20" height="20" rx="3" fill="#fff" />
    </svg>
  );
}
