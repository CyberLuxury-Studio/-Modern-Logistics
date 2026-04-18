"use client";
import { featuresList as features } from "@/config/mock-data";

import { motion } from "framer-motion";
import { TechCard } from "../core/TechCard";



export function Features() {
  return (
    <section id="features" className="py-32 relative z-10 bg-slate-950/50">
      <div className="container mx-auto px-6">

        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-bold tracking-widest text-neon-cyan uppercase mb-4">
            Global Infrastructure
          </h2>
          <h3 className="text-4xl font-heading font-bold mb-4 text-slate-50">
            Engineered for <span className="text-neon-purple">Speed</span>.
          </h3>
          <p className="text-slate-400 text-lg">
            We&apos;ve stripped away the noise. Our platform gives you tactical, actionable intel on every asset moving across the globe.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <TechCard {...feature} className="h-full" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
