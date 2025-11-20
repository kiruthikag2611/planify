import { cn } from "@/lib/utils";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function PlanifyLogo({ className }: { className?: string }) {
  const logoImage = PlaceHolderImages.find(p => p.id === 'planify-logo');
  
  if (!logoImage) {
    return <div className={cn("w-24 h-24 bg-red-500", className)}>Logo not found</div>;
  }

  return (
    <Image
      src={logoImage.imageUrl}
      alt="Planify Logo"
      width={300}
      height={300}
      className={cn("object-contain", className)}
      priority
    />
  );
}
