import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

type UseCase = {
  title: string;
  description: string;
  image: ImagePlaceholder | undefined;
};

const useCases: UseCase[] = [
  {
    title: 'For Researchers',
    description: 'Aggregate, analyze, and publish large datasets with powerful tools designed for scientific rigor.',
    image: PlaceHolderImages.find((p) => p.id === 'use-case-researchers'),
  },
  {
    title: 'For Conservationists',
    description: 'Monitor endangered species, track habitat changes, and make data-driven decisions to protect biodiversity.',
    image: PlaceHolderImages.find((p) => p.id === 'use-case-conservationists'),
  },
  {
    title: 'For Students',
    description: 'Engage in hands-on learning and contribute to real-world citizen science projects.',
    image: PlaceHolderImages.find((p) => p.id === 'use-case-students'),
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Built for a Diverse Community</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Empowering everyone from seasoned researchers to the next generation of naturalists.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="overflow-hidden">
              {useCase.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={useCase.image.imageUrl}
                    alt={useCase.image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={useCase.image.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
