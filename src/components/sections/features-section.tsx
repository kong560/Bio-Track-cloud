import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, BrainCircuit, Map, UploadCloud, Wifi } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: UploadCloud,
    title: 'Observation Upload',
    description: 'Easily upload species observations, high-resolution images, and precise GPS data from the field.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Assisted Recognition',
    description: 'Leverage our AI to get instant suggestions for species identification from your uploaded images.',
  },
  {
    icon: BarChart3,
    title: 'Data Visualization',
    description: 'Transform your data into insights with our interactive and customizable visualization dashboards.',
  },
  {
    icon: Map,
    title: 'Interactive Mapping',
    description: 'Visualize species distribution and biodiversity hotspots on our dynamic geographical maps.',
  },
  {
    icon: Wifi,
    title: 'Cloud Access',
    description: 'Access your data securely from anywhere in the world with an internet connection.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Platform Features</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to streamline your biodiversity research and conservation efforts.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col text-center">
              <CardHeader className="items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
