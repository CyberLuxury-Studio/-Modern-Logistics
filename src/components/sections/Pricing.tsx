"use client";

import { motion } from "framer-motion";
import { GlowingButton } from "../core/GlowingButton";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$299",
    features: ["Global Network Map", "Real-time Tracking", "Basic Analytics", "Email Support"],
    featured: false
  },
  {
    name: "Enterprise",
    price: "$899",
    features: ["Everything in Starter", "Predictive AI Routing", "Quantum Encryption", "24/7 Dedicated Support", "API Access"],
    featured: true
  },
  {
    name: "Corporate",
    price: "Custom",
    features: ["Everything in Enterprise", "On-Premise Deployment", "Custom ML Models", "SLA Guarantee"],
    featured: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-heading font-bold mb-4 text-slate-50">
            Transparent Scaling
          </h2>
          <p className="text-slate-400 text-lg">Predictable pricing for unpredictable supply chains.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "glass-panel p-8 rounded-2xl relative",
                plan.featured ? "md:-translate-y-4 border-neon-cyan/50 shadow-[0_0_30px_rgba(0,240,255,0.1)] bg-slate-900/60" : ""
              )}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neon-cyan text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Recommended
                </div>
              )}

              <h3 className="text-xl font-heading font-bold text-slate-300 mb-2">{plan.name}</h3>
              <div className="text-4xl font-heading font-bold text-slate-50 mb-8">
                {plan.price}<span className="text-sm text-slate-500 font-body font-normal">/mo</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-slate-400 text-sm">
                    <Check className="w-5 h-5 text-neon-cyan shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8 border-t border-slate-800/50">
                <GlowingButton variant={plan.featured ? "primary" : "outline"} className="w-full">
                  Select Plan
                </GlowingButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
