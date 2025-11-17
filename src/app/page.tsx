import HeroSection from '@/components/sections/hero-section';
import FeaturesSection from '@/components/sections/features-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import BenefitsSection from '@/components/sections/benefits-section';
import UseCasesSection from '@/components/sections/use-cases-section';

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <UseCasesSection />
    </main>
  );
}
