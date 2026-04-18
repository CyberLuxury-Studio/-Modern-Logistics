import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { Pricing } from "@/components/sections/Pricing";
import { CTA, Footer } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="relative bg-slate-950 overflow-hidden text-slate-50 selection:bg-neon-cyan/30 selection:text-neon-cyan">
      <Header />
      <Hero />
      <Features />
      <DashboardPreview />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
