"use client";

import { motion } from "framer-motion";
import { TrackingBadge } from "../core/TrackingBadge";
import { Package, Navigation, Activity } from "lucide-react";

const mockTrackingData = [
  { id: "TX-902", dest: "Tokyo, JP", status: "In Transit" as const, progress: 75, icon: Package },
  { id: "LDN-11X", dest: "London, UK", status: "In Transit" as const, progress: 42, icon: Navigation },
  { id: "NY-Z01", dest: "New York, US", status: "Delivered" as const, progress: 100, icon: Activity },
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="py-20 relative">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Dashboard Frame */}
          <div className="glass-panel rounded-xl overflow-hidden shadow-2xl border-slate-700/50 relative bg-slate-950/80">

            {/* Top Bar */}
            <div className="h-12 border-b border-slate-800/80 flex items-center px-4 gap-2 bg-slate-900/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
              </div>
              <div className="mx-auto px-6 py-1 text-xs font-mono text-slate-500 bg-slate-950 rounded-md border border-slate-800/50">
                neo-logistics.app/live
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px]">

              {/* Sidebar */}
              <div className="border-r border-slate-800/80 p-6 bg-slate-900/20">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse-fast shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
                  <span className="text-sm font-bold tracking-widest text-slate-300 uppercase">Live Tracking</span>
                </div>

                <div className="space-y-4">
                  {mockTrackingData.map((item) => (
                    <div key={item.id} className="p-4 rounded-lg bg-slate-950/50 border border-slate-800/50 hover:border-slate-700 transition-colors group">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2">
                          <item.icon className="w-4 h-4 text-slate-500 group-hover:text-neon-cyan transition-colors" />
                          <span className="font-mono text-sm text-slate-300">{item.id}</span>
                        </div>
                        <TrackingBadge status={item.status} />
                      </div>
                      <div className="text-sm text-slate-400 mb-3">{item.dest}</div>

                      {/* Progress bar */}
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-neon-cyan shadow-[0_0_8px_rgba(0,240,255,0.5)] transition-all duration-1000"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main "Map" Area (Mocked visually) */}
              <div className="lg:col-span-2 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 overflow-hidden">
                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

                {/* Mock Map Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-30">
                  <div className="w-[400px] h-[400px] border border-neon-cyan/20 rounded-full animate-[spin_60s_linear_infinite]" />
                  <div className="absolute w-[300px] h-[300px] border border-neon-purple/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                </div>

                {/* Simulated Data overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                   <div className="glass-panel p-4 rounded-lg font-mono text-xs text-neon-cyan">
                     LAT: 35.6895° N<br/>
                     LNG: 139.6917° E
                   </div>
                   <div className="glass-panel p-4 rounded-lg font-mono text-xs text-slate-400 text-right">
                     SYS. ONLINE<br/>
                     MS: 14ms
                   </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
