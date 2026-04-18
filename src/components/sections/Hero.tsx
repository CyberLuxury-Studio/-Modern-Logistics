"use client";

import { motion } from "framer-motion";
import { GlowingButton } from "../core/GlowingButton";
import dynamic from "next/dynamic";

const SplineScene = dynamic(() => import("../spline/HeroSplineWrapper").then(mod => mod.HeroSplineWrapper), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center">
      <div className="w-32 h-32 rounded-full border-t-2 border-neon-cyan animate-spin" />
    </div>
  )
});

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full min-h-[calc(100vh-80px)]">

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="z-10"
          >
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6"
            >
              Logistics of Tomorrow, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-neon-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.3)]">
                Tracked Today
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed"
            >
              AI-driven supply chain visualization with real-time 3D tracking. See the invisible network that moves your business globally.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <GlowingButton>Start Free Trial</GlowingButton>
              <GlowingButton variant="outline">View Dashboard</GlowingButton>
            </motion.div>
          </motion.div>

          <div className="h-[60vh] lg:h-[80vh] relative z-0">
            <SplineScene />
          </div>

        </div>
      </div>
    </section>
  );
}
