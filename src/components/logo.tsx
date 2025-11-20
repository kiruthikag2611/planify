import { cn } from "@/lib/utils";
import type { SVGProps } from "react";
import Image from 'next/image';

// This component now renders the new logo from a static URL for consistency.
// It can be used anywhere in the app.
export function PlanifyLogo(props: { className?: string }) {
  return (
    <Image
      src="https://storage.googleapis.com/aai-web-samples/planify-logo.png"
      alt="Planify Logo"
      width={100}
      height={100}
      className={cn(props.className)}
      priority
    />
  );
}
