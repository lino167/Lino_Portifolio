import "../styles/globals.css";
import { Inter, Orbitron } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ScrollMetrics } from "@/components/motion/ScrollMetrics";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata = {
  title: "LINO — Desenvolvimento de Software com Performance, Segurança e UX",
  description: "Web, apps, APIs e automações com foco em performance, segurança e experiência.",
  openGraph: {
    title: "LINO — Desenvolvimento de Software com Performance, Segurança e UX",
    description: "Web, apps, APIs e automações com foco em performance, segurança e experiência.",
    images: ["/logo/Logo_sem_backgroud.png"],
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${inter.variable} ${orbitron.variable} bg-[#0A0A0A] text-white`}>
        {children}
        <ScrollMetrics />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}