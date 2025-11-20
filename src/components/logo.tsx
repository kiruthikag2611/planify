import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

// This component now renders the new illustrative logo as an inline SVG.
// It can be used anywhere in the app.
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
        <clipPath id="a">
          <path d="M0 0h100v100H0z" />
        </clipPath>
        <linearGradient
          id="b"
          x1=".5"
          x2=".5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#0d3a5c" />
          <stop offset="1" stopColor="#154c79" />
        </linearGradient>
      </defs>
      <g clipPath="url(#a)">
        <path
          fill="#f2f2f2"
          d="M87.5 98.75H12.5a5 5 0 0 1-5-5V6.25a5 5 0 0 1 5-5h75a5 5 0 0 1 5 5v87.5a5 5 0 0 1-5 5"
        />
        <path
          fill="url(#b)"
          d="M87.5 98.75H12.5a5 5 0 0 1-5-5V6.25a5 5 0 0 1 5-5h75a5 5 0 0 1 5 5v87.5a5 5 0 0 1-5 5"
        />
        <path
          fill="#fff"
          d="M89.06 63.8v4.28c0 1.9-1.2 2.68-2.6 2.6-1.58 0-2.85-1.03-2.85-2.73v-8.28a2.7 2.7 0 0 1 2.85-2.73c1.4 0 2.6 1 2.6 2.6v4.26h-2.1v-3.95c0-.68-.45-.98-.8-.98s-.75.3-.75.98v7.62c0 .68.45.98.75.98s-.23-2.33.8-1.1zM81.56 59.5v5.3c0 .85.63 1.25 1.45 1.25s1.45-.4 1.45-1.25V59.5h2.1v5.3c0 2.1-1.3 3.35-3.55 3.35s-3.55-1.25-3.55-3.35V59.5zM76.51 64.9v-5.4h-1.63v-1.9h1.63v-2.8h2.1v2.8h2.08v1.9H78.6v4.8c0 .73.33 1 .8 1 .4 0 .6-.2.6-.58v-.43h2.1v.5a2.7 2.7 0 0 1-2.9 2.5 2.5 2.5 0 0 1-2.68-2.4zM66.76 64.9v-5.4h-1.63v-1.9h1.63v-2.8h2.1v2.8h2.08v1.9h-2.08v4.8c0 .73.33 1 .8 1 .4 0 .6-.2.6-.58v-.43h2.1v.5a2.7 2.7 0 0 1-2.9 2.5 2.5 2.5 0 0 1-2.68-2.4zM60.64 61.86c0-1.83 1.4-2.86 3.08-2.86s3.07 1.03 3.07 2.86v.25h-3.9a1.1 1.1 0 0 0 1.06 1.16c.55 0 .8-.23.95-.5h2.03c-.28 1.4-1.4 2.2-3.03 2.2-1.9 0-3.26-1.13-3.26-2.75zm3.93-.2h-1.8c0-.7.4-.96.86-.96s.85.25.95.96z"
        />
        <path
          fill="#154c79"
          d="M87.5 98.75H12.5a5 5 0 0 1-5-5V6.25a5 5 0 0 1 5-5h75a5 5 0 0 1 5 5v87.5a5 5 0 0 1-5 5"
        />
        <path
          fill="none"
          stroke="#fff"
          strokeWidth="2.5"
          d="M87.5 98.75H12.5a5 5 0 0 1-5-5V6.25a5 5 0 0 1 5-5h75a5 5 0 0 1 5 5v87.5a5 5 0 0 1-5 5z"
        />
        <g transform="translate(19.38 8.13)">
          <path
            fill="#ffc107"
            d="M32.5 15.3A12.7 12.7 0 0 0 19.8 28c0 7 5.7 12.7 12.7 12.7s12.7-5.7 12.7-12.7A12.7 12.7 0 0 0 32.5 15.3m-1.27 19.05v-6.35m2.54 6.35v-2.54m-5.08 2.54v-3.81m-2.54 3.81v-8.89m-2.54 8.89V21.65"
          />
          <path
            fill="#0d3a5c"
            d="M32.5 1.25C18.4 1.25 7.5 10.38 7.5 22.1c0 7.4 4.5 13.9 11.2 17.5l-2.4 17.8c0 .9.7 1.6 1.6 1.6h28.2a1.6 1.6 0 0 0 1.6-1.6l-2.4-17.8c6.7-3.6 11.2-10.1 11.2-17.5C57.5 10.37 46.6 1.25 32.5 1.25m0 50.8a1.9 1.9 0 0 1-1.9-1.9v-2.54a1.9 1.9 0 1 1 3.8 0v2.54a1.9 1.9 0 0 1-1.9 1.9"
          />
          <path
            fill="#ffc107"
            d="M32.5 15.3A12.7 12.7 0 0 0 19.8 28c0 7 5.7 12.7 12.7 12.7s12.7-5.7 12.7-12.7A12.7 12.7 0 0 0 32.5 15.3m-1.27 19.05v-6.35m2.54 6.35v-2.54m-5.08 2.54v-3.81m-2.54 3.81v-8.89m-2.54 8.89V21.65"
          />
        </g>
        <path
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.25"
          d="M51.88 56.88h31.25v34.38H51.88z"
        />
        <path
          fill="#154c79"
          d="M81.56 89.69H53.44v-3.13h28.12zm0-6.25H53.44v-3.12h28.12zm0-6.25H53.44v-3.13h28.12z"
        />
        <path
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.25"
          d="M16.88 56.88h31.25v34.38H16.88z"
        />
        <path
          fill="#154c79"
          d="M46.56 89.69H18.44v-3.13h28.12zm0-6.25H18.44v-3.12h28.12zm0-6.25H18.44v-3.13h28.12z"
        />
        <path
          fill="#fff"
          stroke="#0d3a5c"
          strokeWidth=".5"
          d="M49.38 53.75v40.63h-1.25V53.75z"
        />
      </g>
    </svg>
  );
}
