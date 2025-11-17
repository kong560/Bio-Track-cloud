import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <Button variant="ghost">Learn More</Button>
          <Button asChild>
            <Link href="/features">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
