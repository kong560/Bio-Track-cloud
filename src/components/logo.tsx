import { Leaf } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-lg font-semibold", className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Leaf className="h-5 w-5" />
      </div>
      <span className="hidden sm:inline-block">BioTrack Cloud</span>
    </Link>
  );
}
