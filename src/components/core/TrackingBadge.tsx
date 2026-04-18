import { cn } from "@/lib/utils";

interface TrackingBadgeProps {
  status: "In Transit" | "Delivered" | "Delayed";
}

export function TrackingBadge({ status }: TrackingBadgeProps) {
  const isTransit = status === "In Transit";
  const isDelivered = status === "Delivered";
  const isDelayed = status === "Delayed";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium border",
        isTransit && "bg-cyan-500/10 border-cyan-500/20 text-neon-cyan",
        isDelivered && "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
        isDelayed && "bg-red-500/10 border-red-500/20 text-red-400"
      )}
    >
      <span
        className={cn(
          "w-1.5 h-1.5 rounded-full",
          isTransit && "bg-neon-cyan shadow-[0_0_8px_rgba(0,240,255,0.8)] animate-pulse-fast",
          isDelivered && "bg-emerald-400",
          isDelayed && "bg-red-400"
        )}
      />
      {status}
    </div>
  );
}
