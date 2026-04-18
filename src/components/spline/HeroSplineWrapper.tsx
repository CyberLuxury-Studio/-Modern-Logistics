"use client";

import { useState } from "react";
import Spline from "@splinetool/react-spline";

export function HeroSplineWrapper() {
  const [isLoading, setIsLoading] = useState(true);

  // Fallback to a safe general spine URL since we don't have the specific 3D asset
  // Using a generic globe-like or abstract spline scene available publicly
  const SPLINE_SCENE_URL = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode";

  return (
    <div className="relative w-full h-[500px] md:h-full min-h-[400px] flex items-center justify-center">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full border-t-2 border-neon-cyan animate-spin" />
          <div className="absolute w-24 h-24 rounded-full bg-neon-cyan/20 blur-xl animate-pulse" />
        </div>
      )}

      <div className={`w-full h-full transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
         <Spline
            scene={SPLINE_SCENE_URL}
            onLoad={() => setIsLoading(false)}
          />
      </div>
    </div>
  );
}
