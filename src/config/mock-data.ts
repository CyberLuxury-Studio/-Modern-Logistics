import { Package, Navigation, Activity, Globe2, Zap, ShieldAlert } from "lucide-react";

export const mockTrackingData = [
  { id: "TX-902", dest: "Tokyo, JP", status: "In Transit" as const, progress: 75, icon: Package },
  { id: "LDN-11X", dest: "London, UK", status: "In Transit" as const, progress: 42, icon: Navigation },
  { id: "NY-Z01", dest: "New York, US", status: "Delivered" as const, progress: 100, icon: Activity },
];

export const pricingPlans = [
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

export const featuresList = [
  {
    title: "Global Mesh Network",
    description: "Visualize every node in your supply chain across a real-time interactive 3D map.",
    icon: Globe2
  },
  {
    title: "Predictive Analytics",
    description: "AI predicts delays before they happen, rerouting shipments via the fastest paths automatically.",
    icon: Zap
  },
  {
    title: "Quantum Encryption",
    description: "Secure manifest logs and tracking data with unbreakable decentralized encryption.",
    icon: ShieldAlert
  }
];
