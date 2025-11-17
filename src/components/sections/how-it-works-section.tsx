import { ChevronRight, Cpu, PieChart, Upload } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: '1. Upload Data',
    description: 'Capture and upload your observations directly from the field.',
  },
  {
    icon: Cpu,
    title: '2. Process with AI',
    description: 'Our platform processes your data and assists with species recognition.',
  },
  {
    icon: PieChart,
    title: '3. Analyze & Visualize',
    description: 'Gain insights through interactive maps and dashboards.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">A Simple Workflow</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From field observation to actionable insights in three easy steps.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-4">
          {steps.map((step, index) => (
            <>
              <div key={step.title} className="flex max-w-xs flex-col items-center gap-4 text-center">
                <div className="rounded-full border-8 border-background bg-primary p-4 text-primary-foreground shadow-md">
                  <step.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold font-headline">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight className="hidden h-12 w-12 text-muted-foreground/50 md:block" />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
