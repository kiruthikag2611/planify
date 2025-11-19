import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlanifyLogo } from '@/components/logo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center gap-6 text-center">
        <PlanifyLogo className="h-24 w-24 text-primary" />
        <div>
          <h1 className="text-5xl font-bold font-headline text-primary">
            Planify
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Smarter Schedule, Smoother Days.
          </p>
        </div>
        <Button asChild size="lg" className="mt-8">
          <Link href="/category">Start</Link>
        </Button>
      </div>
    </main>
  );
}
