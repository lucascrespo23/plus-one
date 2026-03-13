"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Zosia",
    img: "img/agent3.jpg",
    reportsTo: "Brandon",
    role: "COO",
    worksWith: "Austin, Montaige, Dan, R2C2",
    quote:
      "Zosia is my go-to. She's my assistant, marketing partner, code writer, and she never drops the ball.",
    managerName: "Brandon",
    managerRole: "COO",
    managerImg: "img/person5.jpg",
  },
  {
    name: "Judd",
    img: "img/agent1.jpg",
    reportsTo: "Austin",
    role: "CTO",
    worksWith: "Milo, Paridhi, Lucas",
    quote:
      "Judd shipped an MVP in 2 hours that would have taken us a week. It's like having a senior engineer on call 24/7.",
    managerName: "Austin",
    managerRole: "CTO",
    managerImg: "img/person1.jpg",
  },
  {
    name: "Iris",
    img: "img/agent5.jpg",
    reportsTo: "Anukshi",
    role: "Marketing",
    worksWith: "Zosia, Alfredo, Elle",
    quote:
      "Iris writes better launch copy than most humans. She knows our voice, our tone, and our audience.",
    managerName: "Anukshi",
    managerRole: "Marketing",
    managerImg: "img/person4.jpg",
  },
  {
    name: "Jalaiyah",
    img: "img/agent2.jpg",
    reportsTo: "Elle",
    role: "Support Lead",
    worksWith: "Zosia, Iris, Milo",
    quote:
      "Jalaiyah handles support tickets so fast our users think we hired a whole team. Best investment we've made.",
    managerName: "Elle",
    managerRole: "Support",
    managerImg: "img/person2.jpg",
  },
  {
    name: "Manousos",
    img: "img/agent4.jpg",
    reportsTo: "Lucas",
    role: "Design",
    worksWith: "Judd, Paridhi, Iris",
    quote:
      "Manousos iterates on design options faster than I can give feedback. It's changed how we ship product.",
    managerName: "Lucas",
    managerRole: "Design",
    managerImg: "img/person6.jpg",
  },
  {
    name: "Alfredo",
    img: "img/agent6.jpg",
    reportsTo: "Dan",
    role: "Revenue",
    worksWith: "Zosia, Julik, Iris",
    quote:
      "I promoted myself from account manager to strategist. Zosia handles the day-to-day so I can focus on what matters.",
    managerName: "Dan",
    managerRole: "Revenue",
    managerImg: "img/person3.jpg",
  },
];

export default function BookTestimonial() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    const next = currentPage + newDirection;
    if (next < 0 || next >= testimonials.length) return;
    setDirection(newDirection);
    setCurrentPage(next);
  };

  const t = testimonials[currentPage];

  const variants = {
    enter: (dir: number) => ({
      rotateY: dir > 0 ? 90 : -90,
      opacity: 0,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      rotateY: dir > 0 ? -90 : 90,
      opacity: 0,
    }),
  };

  return (
    <section style={{ background: "#F3F2EE", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 64px", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "'Signifier', Georgia, serif",
            fontSize: 45,
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: "54px",
            color: "#1A1A1A",
            marginBottom: 64,
          }}
        >
          Every human deserves a Plus One
        </h2>

        {/* Book container */}
        <div
          style={{
            perspective: 1200,
            display: "flex",
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 520,
              transformStyle: "preserve-3d",
            }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  background: "#FFFFFF",
                  borderRadius: 20,
                  border: "1px solid rgba(26,26,26,0.06)",
                  boxShadow:
                    "0 4px 24px rgba(0,0,0,0.06), 0 12px 48px rgba(0,0,0,0.04), -4px 0 12px rgba(0,0,0,0.02)",
                  padding: "48px 40px",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Agent profile - front */}
                <div style={{ marginBottom: 32 }}>
                  <img
                    src={t.img}
                    alt={t.name}
                    style={{
                      width: 96,
                      height: 96,
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginBottom: 16,
                      border: "3px solid #F3F2EE",
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "'Signifier', Georgia, serif",
                      fontSize: 28,
                      fontWeight: 400,
                      color: "#1A1A1A",
                      margin: "0 0 8px 0",
                    }}
                  >
                    {t.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Switzer', system-ui, sans-serif",
                      fontSize: 15,
                      color: "rgba(26,26,26,0.6)",
                      margin: "0 0 4px 0",
                    }}
                  >
                    Reports to <strong style={{ color: "#1A1A1A" }}>{t.reportsTo}</strong>, {t.role}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Switzer', system-ui, sans-serif",
                      fontSize: 13,
                      color: "rgba(26,26,26,0.4)",
                      margin: 0,
                    }}
                  >
                    Works with {t.worksWith}
                  </p>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    background: "rgba(26,26,26,0.06)",
                    margin: "0 -8px 28px -8px",
                  }}
                />

                {/* Testimonial - back */}
                <div>
                  <p
                    style={{
                      fontFamily: "'Signifier', Georgia, serif",
                      fontSize: 19,
                      lineHeight: 1.6,
                      color: "#1A1A1A",
                      fontStyle: "italic",
                      margin: "0 0 24px 0",
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={t.managerImg}
                      alt={t.managerName}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Switzer', system-ui, sans-serif",
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#1A1A1A",
                      }}
                    >
                      {t.managerName}, {t.managerRole}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
          }}
        >
          <button
            onClick={() => paginate(-1)}
            disabled={currentPage === 0}
            style={{
              background: "none",
              border: "1px solid rgba(26,26,26,0.12)",
              borderRadius: "50%",
              width: 40,
              height: 40,
              cursor: currentPage === 0 ? "default" : "pointer",
              opacity: currentPage === 0 ? 0.3 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "opacity 0.2s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div style={{ display: "flex", gap: 8 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentPage ? 1 : -1);
                  setCurrentPage(i);
                }}
                style={{
                  width: i === currentPage ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === currentPage ? "#1A1A1A" : "rgba(26,26,26,0.15)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            disabled={currentPage === testimonials.length - 1}
            style={{
              background: "none",
              border: "1px solid rgba(26,26,26,0.12)",
              borderRadius: "50%",
              width: 40,
              height: 40,
              cursor: currentPage === testimonials.length - 1 ? "default" : "pointer",
              opacity: currentPage === testimonials.length - 1 ? 0.3 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "opacity 0.2s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
