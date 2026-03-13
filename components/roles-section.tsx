"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { roleTranslations, translations } from "@/lib/translations";

const ROLE_IDS = [
  { id: "founders", image: "/img/role-founders.jpg" },
  { id: "editors", image: "/img/role-editors.jpg" },
  { id: "growth", image: "/img/role-growth.jpg" },
  { id: "support", image: "/img/role-support.jpg" },
  { id: "engineers", image: "/img/role-engineers.jpg" },
  { id: "sales", image: "/img/role-sales.jpg" },
  { id: "creators", image: "/img/role-creators.jpg" },
  { id: "finance", image: "/img/role-finance.jpg" },
  { id: "design", image: "/img/role-design.jpg" },
  { id: "product", image: "/img/role-product.jpg" },
  { id: "research", image: "/img/role-research.jpg" },
  { id: "operations", image: "/img/role-operations.jpg" },
];

interface RolesSectionProps {
  lang: 'es' | 'en';
}

export default function RolesSection({ lang }: RolesSectionProps) {
  const ROLES = ROLE_IDS.map(role => ({
    ...role,
    ...roleTranslations[lang][role.id]
  }));
  const [activeTab, setActiveTab] = useState(ROLES[0].id);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const pauseAndResume = useCallback(() => {
    setIsPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setIsPaused(false), 6000);
  }, []);

  // Auto-rotate every 5s, pause on hover/click
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab(prev => {
        const idx = ROLES.findIndex(r => r.id === prev);
        return ROLES[(idx + 1) % ROLES.length].id;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeRole = ROLES.find(r => r.id === activeTab)!;

  return (
    <section style={{ background: "#F3F2EE", padding: isMobile ? "60px 20px" : "100px 120px" }}>
      <div
        style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "36px", alignItems: "stretch" }}
        onMouseEnter={() => { setIsPaused(true); if (resumeTimer.current) clearTimeout(resumeTimer.current); }}
        onMouseLeave={() => { resumeTimer.current = setTimeout(() => setIsPaused(false), 6000); }}
      >
        {/* Left 50%: headline + subhead, sticky */}
        <div style={{ width: isMobile ? "100%" : "50%", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: isMobile ? "0" : "32px" }}>
          <h2 style={{
            margin: 0,
            color: "#1A1A1A",
            fontFamily: "'Signifier', Georgia, serif",
            fontSize: "48px",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: "1.15",
          }}>
            {translations[lang].rolesSectionTitle}
          </h2>
          <p style={{
            color: "rgba(26,26,26,0.5)",
            fontFamily: "'Switzer', system-ui, sans-serif",
            fontSize: "20px",
            marginTop: "20px",
            lineHeight: "1.5",
          }}>
            No matter who you are and what you do, a +1 will help.
          </p>
        </div>

        {/* Right 50%: horizontal tabs + content card */}
        <div style={{ width: isMobile ? "100%" : "50%", display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Horizontal pill tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {ROLES.map(role => (
              <button
                key={role.id}
                onClick={() => { setActiveTab(role.id); pauseAndResume(); }}
                style={{
                  position: "relative",
                  padding: "8px 18px",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontFamily: "'Switzer', system-ui, sans-serif",
                  cursor: "pointer",
                  border: "none",
                  background: "transparent",
                  color: activeTab === role.id ? "#fff" : "#666",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {activeTab === role.id && (
                  <motion.div
                    layoutId="active-role-tab"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "#1A1A1A",
                      borderRadius: "999px",
                    }}
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 10 }}>{role.label}</span>
              </button>
            ))}
          </div>

          {/* Content card */}
          <div style={{
            background: "#fff",
            borderRadius: "20px",
            border: "1px solid rgba(26,26,26,0.06)",
            padding: "40px",
            overflow: "hidden",
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "20px" : "32px", height: "100%" }}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "'Signifier', Georgia, serif", fontSize: "28px", fontWeight: 400, color: "#1A1A1A", margin: "0 0 20px 0" }}>
                    {activeRole.title}
                  </h3>
                  <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: 0 }}>
                    {activeRole.bullets.map((b, i) => (
                      <li key={i} style={{ fontFamily: "'Switzer', system-ui, sans-serif", fontSize: "16px", color: "#666", lineHeight: "2", listStyleType: "'•  '" }}>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                {activeRole.image ? (
                  <div style={{ width: isMobile ? "100%" : "280px", flexShrink: 0, borderRadius: "16px", minHeight: isMobile ? "200px" : "280px", overflow: "hidden" }}>
                    <img src={activeRole.image} alt={activeRole.title} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
                  </div>
                ) : (
                  <div style={{ width: isMobile ? "100%" : "280px", flexShrink: 0, background: "#F0EDE8", borderRadius: "16px", minHeight: isMobile ? "200px" : "280px" }} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
