import { Lock, Scaling, Users, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: Scaling,
    title: 'Infinite Scalability',
    description: 'Our cloud infrastructure grows with your data, from small projects to global studies.',
  },
  {
    icon: Users,
    title: 'Seamless Collaboration',
    description: 'Share data and findings with your team or the global community with role-based access.',
  },
  {
    icon: Lock,
    title: 'Secure Storage',
    description: 'Your valuable biodiversity data is protected with enterprise-grade security and backups.',
  },
  {
    icon: Zap,
    title: 'Faster Interpretation',
    description: 'Accelerate your research with real-time analysis and powerful visualization tools.',
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Unlock Your Research Potential</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover the advantages of a modern, cloud-native biodiversity platform.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col items-start gap-3">
              <div className="rounded-full bg-accent/10 p-2 text-accent">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold font-headline">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
