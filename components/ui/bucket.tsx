"use client";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const FEATURES = [
  { id: 1, title: "Every", description: "The full suite of Every apps", icon: "⚡" },
  { id: 2, title: "Extendable", description: "Integrates any app via API or MCP", icon: "🧩" },
  { id: 3, title: "Secure", description: "Encrypted and private by default", icon: "🔒" },
  { id: 4, title: "Collaborative", description: "Works with agents and humans", icon: "👥" },
  { id: 5, title: "Memory", description: "Perfect and persistent recall", icon: "🧠" },
  { id: 6, title: "Self-improving", description: "Learns automatically over time", icon: "📈" },
  { id: 7, title: "Autonomous", description: "Takes initiative autonomously", icon: "🚀" },
];

export default function Bucket() {
  const [items, setItems] = useState(FEATURES);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-fit relative w-full">
      <div className="relative isolate w-full max-w-[655px]" style={{ aspectRatio: "655/352" }}>
        <svg width="100%" height="100%" viewBox="0 0 655 352" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-0">
          <path d="M127 80 C127 60, 147 45, 167 45 L488 45 C508 45, 528 60, 528 80 L508 290 C505 310, 490 320, 470 320 L185 320 C165 320, 150 310, 147 290 Z" stroke="#E0DDD8" strokeWidth="1.5" fill="#FAFAF7"/>
          <path d="M155 75 L500 75" stroke="#E0DDD8" strokeWidth="0.5" opacity="0.5"/>
          <path d="M90 48 C90 28, 120 15, 150 15 L505 15 C535 15, 565 28, 565 48 L545 80 C540 90, 520 95, 500 95 L155 95 C135 95, 115 90, 110 80 Z" stroke="#D5D2CC" strokeWidth="1.5" fill="#F5F3EE"/>
          <rect x="280" y="318" width="95" height="34" rx="17" stroke="#E0DDD8" strokeWidth="1.5" fill="#FAFAF7"/>
        </svg>

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-full flex justify-center items-center" style={{ paddingBottom: "65%" }}>
            <AnimatePresence mode="popLayout">
              {items.map((chip, index) => {
                if (index !== 0) return null;
                return (
                  <motion.div
                    key={chip.id}
                    initial={{ y: isMobile ? -70 : -100, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: isMobile ? 1 : 1.25 }}
                    exit={{ y: isMobile ? 100 : 130, scale: 0.8, transition: { duration: 0.8 } }}
                    transition={{ duration: 0.5, ease: [0.455, 0.03, 0.515, 0.955] }}
                    className="bg-white border border-[#E5E5E0] z-10 rounded-full p-2 w-[280px] shadow-sm absolute pointer-events-auto flex items-center gap-2 origin-bottom"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F5F3EE] text-[#666]">
                      <span className="text-lg">{chip.icon}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold text-[#1A1A1A] leading-none font-['Switzer']">{chip.title}</span>
                      <span className="text-xs text-[#999] font-['Switzer']">{chip.description}</span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <svg width="100%" height="100%" viewBox="0 0 655 352" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 z-20 pointer-events-none overflow-hidden" style={{ transform: "translate3d(0, 0, 0)" }}>
          <path d="M90 48 C90 28, 120 15, 150 15 L505 15 C535 15, 565 28, 565 48 L545 80 C540 90, 520 95, 500 95 L155 95 C135 95, 115 90, 110 80 Z" stroke="#D5D2CC" strokeWidth="1.5" fill="#F5F3EE"/>
          <rect x="280" y="318" width="95" height="34" rx="17" stroke="#E0DDD8" strokeWidth="1.5" fill="#FAFAF7"/>
          <rect x="260" y="300" width="135" height="20" rx="4" fill="#FAFAF7"/>
        </svg>
      </div>
    </div>
  );
}
