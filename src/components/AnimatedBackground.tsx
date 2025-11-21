
'use client';

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-float-delay-1"></div>
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-secondary/20 blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-accent/10 blur-2xl animate-float-delay-2"></div>
    </div>
  );
}
