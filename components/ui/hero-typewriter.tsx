"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function HeroTypewriter() {
  const [displayText, setDisplayText] = useState("");
  const [done, setDone] = useState(false);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  const fullText = "Promote yourself with a +1";
  const indexRef = useRef(0);

  useEffect(() => {
    const originalH1 = document.getElementById("hero-headline");
    if (!originalH1) return;

    // Create a container right before the original h1
    const container = document.createElement("div");
    originalH1.parentNode!.insertBefore(container, originalH1);
    originalH1.style.display = "none";
    setPortalTarget(container);

    const interval = setInterval(() => {
      if (indexRef.current < fullText.length) {
        setDisplayText(fullText.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(interval);
        setDone(true);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  if (!portalTarget) return null;

  const gradientStyle: React.CSSProperties = {
    background: "linear-gradient(to right, #b8d4a3, #e8d490, #d4a9c4, #a8c4d4, #b8d4a3, #e8d490, #d4a9c4, #a8c4d4, #b8d4a3)",
    backgroundSize: "400% 100%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    animation: "gradient-scroll 20s linear infinite",
  };

  return createPortal(
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradient-scroll {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `}} />
      <h1 className="text-5xl md:text-7xl font-medium text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight text-center">
        {displayText.endsWith("+1") ? (
          <>
            {displayText.slice(0, -2)}
            <span style={gradientStyle}>+1</span>
          </>
        ) : displayText.endsWith("+") ? (
          <>
            {displayText.slice(0, -1)}
            <span style={gradientStyle}>+</span>
          </>
        ) : (
          displayText
        )}
      {!done && (
        <span style={{ opacity: 0.4, animation: "pulse 1s infinite" }}>|</span>
      )}
      </h1>
    </>,
    portalTarget
  );
}
