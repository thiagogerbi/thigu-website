import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { BrandSection } from "@/features/landing/brand-section";
import { EaseSection } from "@/features/landing/ease-section";
import { FaqSection } from "@/features/landing/faq-section";
import { FinalCta } from "@/features/landing/final-cta";
import { Hero } from "@/features/landing/hero";
import { JourneySection } from "@/features/landing/journey-section";
import { ModulesSection } from "@/features/landing/modules-section";
import { MoneySection } from "@/features/landing/money-section";
import { ProblemSection } from "@/features/landing/problem-section";
import { RolesSection } from "@/features/landing/roles-section";
import { ScopeSection } from "@/features/landing/scope-section";
import { TrustSection } from "@/features/landing/trust-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <ProblemSection />
        <JourneySection />
        <ModulesSection />
        <MoneySection />
        <RolesSection />
        <BrandSection />
        <EaseSection />
        <TrustSection />
        <ScopeSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
