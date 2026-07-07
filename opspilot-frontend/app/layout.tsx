import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OpsPilot Nexus AI",
  description:
    "AI-Powered Business Operations Intelligence Platform for intelligent business analysis and operational insights.",
  keywords: [
    "AI",
    "Business Analytics",
    "Operations",
    "Business Intelligence",
    "Gemini AI",
    "OpsPilot Nexus AI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
        style={{
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          minHeight: "100vh",
          background: "#0b0d12",
        }}
      >
        {children}
      </body>
    </html>
  );
}