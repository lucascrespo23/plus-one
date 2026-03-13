"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const ROLES = [
  { name: "Founders & Operators", items: ["Strategic planning & analysis", "Cross-team coordination", "Investor updates & reporting", "Hiring pipeline management"] },
  { name: "Editors & Content", items: ["Draft and edit articles", "Style consistency checks", "Publishing workflows", "Content calendar management"] },
  { name: "Growth & Marketing", items: ["Campaign management", "Analytics & reporting", "A/B test analysis", "Social media scheduling"] },
  { name: "Customer Support", items: ["Ticket triage & response", "Knowledge base updates", "Escalation management", "Customer health monitoring"] },
  { name: "Engineers", items: ["Code review & PRs", "Bug triage & fixes", "Documentation", "Prototype & MVP builds"] },
  { name: "Content Creators", items: ["Script writing & editing", "Research & fact-checking", "Distribution workflows", "Audience analytics"] },
  { name: "Finance", items: ["Revenue tracking", "Expense categorization", "Financial reporting", "Forecasting & modeling"] },
  { name: "Design", items: ["Design iteration & feedback", "Asset management", "Prototyping", "Design system docs"] },
  { name: "Product Managers", items: ["Feature spec writing", "User feedback tracking", "Sprint planning", "Roadmap updates"] },
  { name: "Research & Analysis", items: ["Data collection & cleaning", "Trend analysis", "Report generation", "Market research"] },
  { name: "Operations", items: ["Process automation", "Tool migrations", "Vendor coordination", "Workflow optimization"] },
  { name: "Sales", items: ["Lead qualification", "CRM management", "Follow-up sequences", "Pipeline reporting"] },
];

const DURATION = 4000;
const RESUME_DELAY = 6000;

export default function RolesTabs() {
  const [current, setCurrent] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const progressRef = useRef(0);
  const pausedRef = useRef(false);
  const lastInteractionRef = useRef(0);
  const lastTimeRef = useRef(0);
  const currentRef = useRef(0);
  const progressBarRef = useRef<HTMLSpanElement>(null);

  const selectTab = useCallback((i: number) => {
    currentRef.current = i;
    progressRef.current = 0;
    setOpacity(0);
    setTimeout(() => {
      setCurrent(i);
      setOpacity(1);
    }, 150);
  }, []);

  useEffect(() => {
    let raf: number;
    const tick = (ts: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = ts;
      const dt = ts - lastTimeRef.current;
      lastTimeRef.current = ts;

      if (pausedRef.current) {
        if (Date.now() - lastInteractionRef.current > RESUME_DELAY) {
          pausedRef.current = false;
          progressRef.current = 0;
        }
      } else {
        progressRef.current += dt;
        const pct = Math.min((progressRef.current / DURATION) * 100, 100);
        if (progressBarRef.current) {
          progressBarRef.current.style.height = pct + "%";
        }
        if (progressRef.current >= DURATION) {
          progressRef.current = 0;
          selectTab((currentRef.current + 1) % ROLES.length);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [selectTab]);

  const role = ROLES[current];

  return (
    <section
      id="roles-section"
      style={{ background: "#F3F2EE", padding: "100px 64px" }}
      onMouseEnter={() => { pausedRef.current = true; lastInteractionRef.current = Date.now(); }}
      onMouseLeave={() => { lastInteractionRef.current = Date.now(); }}
    >
      <div className="section-max">
        <h2 style={{ fontFamily: "'Signifier', Georgia, serif", fontSize: 45, fontWeight: 500, margin: "0 0 12px", color: "#1A1A1A", letterSpacing: "-0.02em" }}>
          A +1 for every style of work
        </h2>
        <p style={{ fontFamily: "'Switzer', system-ui, sans-serif", fontSize: 18, color: "rgba(26,26,26,0.5)", margin: "0 0 40px" }}>
          No matter who you are and what you do, a +1 will help.
        </p>

        <div style={{ display: "flex", flexDirection: "row", gap: 32, alignItems: "stretch" }}>
          <div style={{ width: 280, flexShrink: 0, display: "flex", flexDirection: "column", gap: 6 }}>
            {ROLES.map((r, i) => (
              <button
                key={r.name}
                className={`role-tab${i === current ? " active" : ""}`}
                onClick={() => {
                  pausedRef.current = true;
                  lastInteractionRef.current = Date.now();
                  selectTab(i);
                }}
              >
                {r.name}
                <span
                  className="tab-progress"
                  ref={i === current ? progressBarRef : undefined}
                  style={i === current ? undefined : { height: "0%" }}
                />
              </button>
            ))}
          </div>

          <div style={{ flex: 1, minWidth: 0, opacity, transition: "opacity 300ms ease" }}>
            <div className="roles-card">
              <div className="roles-card-left">
                <h3>{role.name}</h3>
                <ul>
                  {role.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="roles-card-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
