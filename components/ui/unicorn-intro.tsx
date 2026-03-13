"use client";
import dynamic from "next/dynamic";

const UnicornScene = dynamic(
  () => import("unicornstudio-react/next"),
  { ssr: false }
);

export function UnicornIntro() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <UnicornScene
        projectId="nbybPeniLFcJBkHjbaHe"
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.4/dist/unicornStudio.umd.js"
        width="100%"
        height="100%"
      />
    </div>
  );
}
