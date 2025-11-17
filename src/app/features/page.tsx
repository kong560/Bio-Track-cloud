import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, BrainCircuit, Map, UploadCloud, Wifi } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SpeciesRecognitionForm from './_components/species-recognition-form';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  interactiveComponent?: React.ReactNode;
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
    interactiveComponent: <SpeciesRecognitionForm />,
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

export default function FeaturesPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Platform Features</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything you need to streamline your biodiversity research and conservation efforts.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <feature.icon className="h-8 w-8" />
                </div>
                <div>
                  <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
                  <p className="mt-1 text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </CardHeader>
            {feature.interactiveComponent && (
              <CardContent>{feature.interactiveComponent}</CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
