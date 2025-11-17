import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Real-time biodiversity monitoring for a greener planet.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm md:col-span-2 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold">Platform</h4>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Features</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Pricing</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Login</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold">Company</h4>
            <Link href="#" className="text-muted-foreground hover:text-foreground">About Us</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Contact</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Careers</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold">Resources</h4>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Blog</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Documentation</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Support</Link>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BioTrack Cloud. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
