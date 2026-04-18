"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TechCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function TechCard({ title, description, icon: Icon, className }: TechCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "glass-panel p-6 rounded-lg transition-all duration-300",
        "hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]",
        className
      )}
    >
      <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center mb-4 text-neon-cyan border border-slate-700/50">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-heading font-bold text-slate-50 mb-2">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
