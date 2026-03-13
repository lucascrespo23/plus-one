import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plus One by Every — Promote yourself with a +1",
  description: "Get your own OpenClaw with 1-click, launched on a secure server run by Every.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
