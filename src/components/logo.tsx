import { cn } from "@/lib/utils";
import Image from "next/image";

export function PlanifyLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Planify Logo"
      width={200}
      height={200}
      className={cn("w-auto h-auto", className)}
    />
  );
}
