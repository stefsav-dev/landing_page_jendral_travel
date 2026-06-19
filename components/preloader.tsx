"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Adding a small delay before starting to fade out to show the loading screen
    const timer = setTimeout(() => {
      setFading(true);
      // Wait for the fade out transition to finish before removing from DOM
      setTimeout(() => setLoading(false), 500);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0F172A] transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-3xl md:text-4xl font-black tracking-widest uppercase flex items-center gap-2 mb-8 animate-pulse">
        <span className="text-white">JENDRAL</span>
        <span className="text-yellow-500">TRAVEL</span>
      </div>
      <Loader2 className="w-10 h-10 text-yellow-500 animate-spin" />
    </div>
  );
}
