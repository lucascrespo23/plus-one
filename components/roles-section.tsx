"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = [
  { id: "founders", label: "Founders & Operators", title: "Founders & Operators", bullets: ["Strategic planning & analysis", "Cross-team coordination", "Investor updates & reporting", "Hiring pipeline management"] },
  { id: "editors", label: "Editors & Content", title: "Editors & Content", bullets: ["Draft and edit articles", "Style consistency checks", "Publishing workflows", "Content calendar management"] },
  { id: "growth", label: "Growth & Marketing", title: "Growth & Marketing", bullets: ["Campaign management", "Analytics & reporting", "A/B test analysis", "Social media scheduling"] },
  { id: "support", label: "Customer Support", title: "Customer Support", bullets: ["Ticket triage & response", "Knowledge base updates", "Escalation management", "Customer health monitoring"] },
  { id: "engineers", label: "Engineers", title: "Engineers", bullets: ["Code review & PRs", "Bug triage & fixes", "Documentation", "Prototype & MVP builds"] },
  { id: "creators", label: "Content Creators", title: "Content Creators", bullets: ["Script writing & editing", "Research & fact-checking", "Distribution workflows", "Audience analytics"] },
  { id: "finance", label: "Finance", title: "Finance", bullets: ["Revenue tracking", "Expense categorization", "Financial reporting", "Forecasting & modeling"] },
  { id: "design", label: "Design", title: "Design", bullets: ["Design iteration & feedback", "Asset management", "Prototyping", "Design system docs"] },
  { id: "product", label: "Product Managers", title: "Product Managers", bullets: ["Feature spec writing", "User feedback tracking", "Sprint planning", "Roadmap updates"] },
  { id: "research", label: "Research & Analysis", title: "Research & Analysis", bullets: ["Data collection & cleaning", "Trend analysis", "Report generation", "Market research"] },
  { id: "operations", label: "Operations", title: "Operations", bullets: ["Process automation", "Tool migrations", "Vendor coordination", "Workflow optimization"] },
  { id: "sales", label: "Sales", title: "Sales", bullets: ["Lead qualification", "CRM management", "Follow-up sequences", "Pipeline reporting"] },
];

export default function RolesSection() {
  const [activeTab, setActiveTab] = useState(ROLES[0].id);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 4s
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab(prev => {
        const idx = ROLES.findIndex(r => r.id === prev);
        return ROLES[(idx + 1) % ROLES.length].id;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeRole = ROLES.find(r => r.id === activeTab)!;

  return (
    <section style={{ background: "#F3F2EE", padding: "100px 64px" }}>
      <div style={{ display: "flex", gap: "32px", alignItems: "flex-start" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); }}
      >
        {/* Left: headline + subhead + vertical tabs */}
        <div style={{ width: "300px", flexShrink: 0, position: "sticky", top: "32px", display: "flex", flexDirection: "column" }}>
          <h2 style={{ margin: 0, color: "#1A1A1A", fontFamily: "'Signifier', Georgia, serif", fontSize: "45px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: "54px" }}>
            A +1 for every style of work
          </h2>
          <p style={{ color: "rgba(26,26,26,0.5)", fontFamily: "'Switzer', system-ui, sans-serif", fontSize: "18px", marginTop: "12px", marginBottom: "32px" }}>
            No matter who you are and what you do, a +1 will help.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {ROLES.map(role => (
            <button
              key={role.id}
              onClick={() => { setActiveTab(role.id); setIsPaused(true); setTimeout(() => setIsPaused(false), 6000); }}
              style={{
                position: "relative",
                textAlign: "left",
                padding: "12px 20px",
                borderRadius: "12px",
                fontSize: "14px",
                fontFamily: "'Switzer', system-ui, sans-serif",
                cursor: "pointer",
                border: "none",
                background: activeTab === role.id ? "#1A1A1A" : "transparent",
                color: activeTab === role.id ? "#fff" : "#666",
                transition: "background 0.2s, color 0.2s",
              }}
            >
              {activeTab === role.id && (
                <motion.div
                  layoutId="active-role-tab"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "#1A1A1A",
                    borderRadius: "12px",
                  }}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span style={{ position: "relative", zIndex: 10 }}>{role.label}</span>
            </button>
          ))}
          </div>
        </div>

        {/* Right: content card */}
        <div style={{
          flex: 1,
          background: "#fff",
          borderRadius: "20px",
          border: "1px solid rgba(26,26,26,0.06)",
          padding: "40px",
          minHeight: "400px",
          overflow: "hidden",
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ display: "flex", gap: "32px", height: "100%" }}
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
              <div style={{ width: "280px", flexShrink: 0, background: "#F0EDE8", borderRadius: "16px", minHeight: "280px" }} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
