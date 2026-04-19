import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { Pricing } from "@/components/sections/Pricing";
import { CTA, Footer } from "@/components/sections/CTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";



export default function Home() {
  return (
    <main className="relative bg-slate-950 overflow-hidden text-slate-50 selection:bg-neon-cyan/30 selection:text-neon-cyan">
      <Header />
      <Hero />
      <Features />
      <DashboardPreview />
      <Pricing />
      <CTA />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
