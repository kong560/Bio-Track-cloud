import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[80vh] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container max-w-4xl text-center text-primary-foreground">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            BioTrack Cloud
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-primary-foreground/90">
            Cloud-Based Biodiversity Monitoring System
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-primary-foreground/80">
            Enabling real-time data collection, storage, and analysis of biodiversity using cutting-edge cloud technology.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
