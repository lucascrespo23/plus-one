"use client";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const FEATURES = [
  { id: 1, title: "Every", description: "The full suite of Every apps", icon: '<img src="/img/every-icon.png" width="18" height="18" style="mix-blend-mode:multiply" alt="E" />' },
  { id: 2, title: "Extendable", description: "Integrates any app via API or MCP", icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>' },
  { id: 3, title: "Secure", description: "Encrypted and private by default", icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>' },
  { id: 4, title: "Collaborative", description: "Works with agents and humans", icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
  { id: 5, title: "Memory", description: "Perfect and persistent recall", icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>' },
  { id: 6, title: "Self-improving", description: "Learns automatically over time", icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>' },
  { id: 7, title: "Autonomous", description: "Takes initiative autonomously", icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>' },
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
      <div
        className="relative isolate w-full max-w-[655px]"
        style={{ aspectRatio: "655/352" }}
      >
        {/* Background SVG - the bucket body with glass effects */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 655 352"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 z-0"
        >
          <foreignObject
            x="443.561"
            y="-10.5141"
            width="211.24"
            height="166.977"
          >
            <div
              style={{
                backdropFilter: "blur(11.03px)",
                clipPath: "url(#bgblur_0_51_65_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <g
            filter="url(#filter1_dddi_51_65)"
            data-figma-bg-blur-radius="22.0545"
          >
            <path
              d="M535.59 78.7427L487.973 42.8776L558.738 13.9516C562.902 12.2494 564.984 11.3984 567.143 11.5597C569.301 11.7211 571.233 12.8723 575.098 15.1747L590.22 24.1832C603.923 32.347 610.775 36.4289 610.372 42.0779C609.97 47.7269 602.609 50.7964 587.887 56.9354L535.59 78.7427Z"
              fill="#DDD9D3"
              fillOpacity="0.72"
              shapeRendering="crispEdges"
            />
          </g>
          <foreignObject
            x="-3.43323e-05"
            y="-10.9516"
            width="215.96"
            height="167.786"
          >
            <div
              style={{
                backdropFilter: "blur(11.03px)",
                clipPath: "url(#bgblur_1_51_65_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <g
            filter="url(#filter2_dddi_51_65)"
            data-figma-bg-blur-radius="22.0545"
          >
            <path
              d="M123.116 79.1145L171.548 42.8776L97.2715 12.5164C94.8305 11.5186 93.61 11.0197 92.3446 11.1143C91.0793 11.2089 89.9465 11.8837 87.681 13.2334L56.155 32.0149C48.1832 36.7641 44.1973 39.1386 44.4205 42.4378C44.6438 45.737 48.9132 47.553 57.4522 51.1849L123.116 79.1145Z"
              fill="#DDD9D3"
              fillOpacity="0.72"
              shapeRendering="crispEdges"
            />
          </g>
          <foreignObject
            x="78.7048"
            y="20.823"
            width="501.297"
            height="136.012"
          >
            <div
              style={{
                backdropFilter: "blur(11.03px)",
                clipPath: "url(#bgblur_2_51_65_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <g
            filter="url(#filter3_dddi_51_65)"
            data-figma-bg-blur-radius="22.0545"
          >
            <path
              d="M487.973 42.8774L171.548 42.8775L123.116 79.1144L535.59 78.7424L487.973 42.8774Z"
              fill="#DDD9D3"
              fillOpacity="0.82"
              shapeRendering="crispEdges"
            />
          </g>
          <foreignObject
            x="78.7048"
            y="20.823"
            width="137.255"
            height="136.012"
          >
            <div
              style={{
                backdropFilter: "blur(11.03px)",
                clipPath: "url(#bgblur_3_51_65_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <g
            filter="url(#filter4_dddi_51_65)"
            data-figma-bg-blur-radius="22.0545"
          >
            <path
              d="M171.548 78.9088V42.8774L123.116 79.1144L171.548 78.9088Z"
              fill="#DDD9D3"
              fillOpacity="0.52"
              shapeRendering="crispEdges"
            />
          </g>
          <g
            filter="url(#filter5_dddi_51_65)"
            data-figma-bg-blur-radius="22.0545"
          >
            <path
              d="M487.973 78.9088V42.8774L536.404 79.1144L487.973 78.9088Z"
              fill="#DDD9D3"
              fillOpacity="0.52"
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_51_65"
              x="123.766"
              y="79.1595"
              width="413"
              height="275.676"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5.51362" />
              <feGaussianBlur stdDeviation="1.83787" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.91 0 0 0 0 0.898 0 0 0 0 0.878 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_51_65"
              />
            </filter>
            <filter
              id="filter1_dddi_51_65"
              x="443.561"
              y="-10.5141"
              width="211.24"
              height="166.977"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="33.3087" />
              <feGaussianBlur stdDeviation="22.2058" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.27808" />
              <feGaussianBlur stdDeviation="1.27808" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.14 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_51_65"
                result="effect2_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="8.94656" />
              <feGaussianBlur stdDeviation="4.47328" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_51_65"
                result="effect3_dropShadow_51_65"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect3_dropShadow_51_65"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5.51362" />
              <feGaussianBlur stdDeviation="1.83787" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.91 0 0 0 0 0.898 0 0 0 0 0.878 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect4_innerShadow_51_65"
              />
            </filter>
            <clipPath
              id="bgblur_0_51_65_clip_path"
              transform="translate(-443.561 10.5141)"
            >
              <path d="M535.59 78.7427L487.973 42.8776L558.738 13.9516C562.902 12.2494 564.984 11.3984 567.143 11.5597C569.301 11.7211 571.233 12.8723 575.098 15.1747L590.22 24.1832C603.923 32.347 610.775 36.4289 610.372 42.0779C609.97 47.7269 602.609 50.7964 587.887 56.9354L535.59 78.7427Z" />
            </clipPath>
            <filter
              id="filter2_dddi_51_65"
              x="-3.43323e-05"
              y="-10.9516"
              width="215.96"
              height="167.786"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="33.3087" />
              <feGaussianBlur stdDeviation="22.2058" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.27808" />
              <feGaussianBlur stdDeviation="1.27808" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.14 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_51_65"
                result="effect2_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="8.94656" />
              <feGaussianBlur stdDeviation="4.47328" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_51_65"
                result="effect3_dropShadow_51_65"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect3_dropShadow_51_65"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5.51362" />
              <feGaussianBlur stdDeviation="1.83787" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.91 0 0 0 0 0.898 0 0 0 0 0.878 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect4_innerShadow_51_65"
              />
            </filter>
            <clipPath
              id="bgblur_1_51_65_clip_path"
              transform="translate(3.43323e-05 10.9516)"
            >
              <path d="M123.116 79.1145L171.548 42.8776L97.2715 12.5164C94.8305 11.5186 93.61 11.0197 92.3446 11.1143C91.0793 11.2089 89.9465 11.8837 87.681 13.2334L56.155 32.0149C48.1832 36.7641 44.1973 39.1386 44.4205 42.4378C44.6438 45.737 48.9132 47.553 57.4522 51.1849L123.116 79.1145Z" />
            </clipPath>
            <filter
              id="filter3_dddi_51_65"
              x="78.7048"
              y="20.823"
              width="501.297"
              height="136.012"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="33.3087" />
              <feGaussianBlur stdDeviation="22.2058" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.27808" />
              <feGaussianBlur stdDeviation="1.27808" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.14 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_51_65"
                result="effect2_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="8.94656" />
              <feGaussianBlur stdDeviation="4.47328" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_51_65"
                result="effect3_dropShadow_51_65"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect3_dropShadow_51_65"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5.51362" />
              <feGaussianBlur stdDeviation="1.83787" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.91 0 0 0 0 0.898 0 0 0 0 0.878 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect4_innerShadow_51_65"
              />
            </filter>
            <clipPath
              id="bgblur_2_51_65_clip_path"
              transform="translate(-78.7048 -20.823)"
            >
              <path d="M487.973 42.8774L171.548 42.8775L123.116 79.1144L535.59 78.7424L487.973 42.8774Z" />
            </clipPath>
            <filter
              id="filter4_dddi_51_65"
              x="78.7048"
              y="20.823"
              width="137.255"
              height="136.012"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="33.3087" />
              <feGaussianBlur stdDeviation="22.2058" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.27808" />
              <feGaussianBlur stdDeviation="1.27808" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.14 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_51_65"
                result="effect2_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="8.94656" />
              <feGaussianBlur stdDeviation="4.47328" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_51_65"
                result="effect3_dropShadow_51_65"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect3_dropShadow_51_65"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5.51362" />
              <feGaussianBlur stdDeviation="1.83787" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.91 0 0 0 0 0.898 0 0 0 0 0.878 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect4_innerShadow_51_65"
              />
            </filter>
            <clipPath
              id="bgblur_3_51_65_clip_path"
              transform="translate(-78.7048 -20.823)"
            >
              <path d="M171.548 78.9088V42.8774L123.116 79.1144L171.548 78.9088Z" />
            </clipPath>
            <filter
              id="filter5_dddi_51_65"
              x="443.561"
              y="20.823"
              width="137.255"
              height="136.012"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="33.3087" />
              <feGaussianBlur stdDeviation="22.2058" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.27808" />
              <feGaussianBlur stdDeviation="1.27808" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.14 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_51_65"
                result="effect2_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="8.94656" />
              <feGaussianBlur stdDeviation="4.47328" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_51_65"
                result="effect3_dropShadow_51_65"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect3_dropShadow_51_65"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5.51362" />
              <feGaussianBlur stdDeviation="1.83787" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.91 0 0 0 0 0.898 0 0 0 0 0.878 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect4_innerShadow_51_65"
              />
            </filter>
            <filter
              id="filter6_dddi_51_65"
              x="21.477"
              y="56.6875"
              width="612.444"
              height="212.562"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="33.3087" />
              <feGaussianBlur stdDeviation="22.2058" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1.27808" />
              <feGaussianBlur stdDeviation="1.27808" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.14 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_51_65"
                result="effect2_dropShadow_51_65"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="8.94656" />
              <feGaussianBlur stdDeviation="4.47328" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.12549 0 0 0 0 0.403922 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_51_65"
                result="effect3_dropShadow_51_65"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect3_dropShadow_51_65"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5.51362" />
              <feGaussianBlur stdDeviation="1.83787" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.91 0 0 0 0 0.898 0 0 0 0 0.878 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect4_innerShadow_51_65"
              />
            </filter>
            <clipPath id="bgblur_5_51_65_clip_path">
              <path d="M74.6011 164.033L123.116 79.1138L535.59 78.7419L581.532 164.469C588.006 176.55 591.243 182.59 588.568 187.06C585.892 191.529 579.039 191.529 565.333 191.529H90.5591C76.4759 191.529 69.4343 191.529 66.7781 186.953C64.1219 182.376 67.615 176.262 74.6011 164.033Z" />
            </clipPath>
            <filter id="grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
              <feColorMatrix type="saturate" values="0"/>
              <feBlend in="SourceGraphic" mode="multiply" result="grain"/>
            </filter>
            <clipPath id="center_box_clip">
              <rect x="123.766" y="0" width="413" height="352" />
            </clipPath>
            <linearGradient
              id="paint0_linear_51_65"
              x1="329.353"
              y1="42.8774"
              x2="329.353"
              y2="79.1144"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DDD9D3" stopOpacity="0.6" />
              <stop offset="1" stopColor="#E8E5E0" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Animated chip content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div
            className="relative w-full h-full flex justify-center items-center"
            style={{ paddingBottom: "65%" }}
          >
            <AnimatePresence mode="popLayout">
              {items.map((chip, index) => {
                if (index !== 0) return null;
                return (
                  <motion.div
                    key={chip.id}
                    initial={{
                      y: isMobile ? -70 : -100,
                      opacity: 0,
                      scale: 0.8,
                      transition: {
                        duration: 2,
                        delay: 0.5,
                        ease: [0.455, 0.03, 0.515, 0.955],
                      },
                    }}
                    animate={{ y: 0, opacity: 1, scale: isMobile ? 1 : 1.25 }}
                    exit={{
                      y: isMobile ? 100 : 130,
                      scale: 0.8,
                      transition: { duration: 0.8 },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.455, 0.03, 0.515, 0.955],
                    }}
                    className="bg-white border border-[#E5E5E0] z-10 rounded-full p-2 w-[280px] shadow-sm absolute pointer-events-auto flex items-center gap-2 origin-bottom"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F5F3EE] text-[#666]">
                      <span dangerouslySetInnerHTML={{ __html: chip.icon }} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold text-[#1A1A1A] leading-none font-['Switzer']">
                        {chip.title}
                      </span>
                      <span className="text-xs text-[#999] font-['Switzer']">
                        {chip.description}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Foreground SVG - the top rim overlay with glass blur */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 655 352"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
          style={{ transform: "translate3d(0, 0, 0)" }}
        >
          <g filter="url(#filter0_i_51_65)">
            <path
              d="M512.766 79.1595L147.766 79.1624C136.453 79.1625 130.796 79.1626 127.281 82.6773C123.766 86.192 123.766 91.8488 123.766 103.162V327.159C123.766 338.473 123.766 344.13 127.281 347.645C130.796 351.159 136.453 351.159 147.766 351.159H512.766C524.08 351.159 529.737 351.159 533.252 347.645C536.766 344.13 536.766 338.473 536.766 327.159V103.159C536.766 91.8457 536.766 86.1888 533.252 82.6741C529.737 79.1594 524.08 79.1594 512.766 79.1595Z"
              fill="#E8E5E0"
              filter="url(#grain)"
            />
          </g>
          <g clipPath="url(#center_box_clip)">
            <foreignObject x="0" y="0" width="655" height="352">
              <div
                style={{
                  backdropFilter: "blur(60.03px)",
                  WebkitBackdropFilter: "blur(60.03px)",
                  height: "100%",
                  width: "100%",
                  background: "rgba(232, 229, 224, 0.15)",
                  clipPath:
                    "path('M74.6011 164.033L123.116 79.1138L535.59 78.7419L581.532 164.469C588.006 176.55 591.243 182.59 588.568 187.06C585.892 191.529 579.039 191.529 565.333 191.529H90.5591C76.4759 191.529 69.4343 191.529 66.7781 186.953C64.1219 182.376 67.615 176.262 74.6011 164.033Z')",
                }}
              ></div>
            </foreignObject>
          </g>
          <g
            filter="url(#filter6_dddi_51_65)"
            data-figma-bg-blur-radius="22.0545"
          >
            <path
              d="M74.6011 164.033L123.116 79.1138L535.59 78.7419L581.532 164.469C588.006 176.55 591.243 182.59 588.568 187.06C585.892 191.529 579.039 191.529 565.333 191.529H90.5591C76.4759 191.529 69.4343 191.529 66.7781 186.953C64.1219 182.376 67.615 176.262 74.6011 164.033Z"
              fill="#DDD9D3"
              fillOpacity="0.62"
              shapeRendering="crispEdges"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
