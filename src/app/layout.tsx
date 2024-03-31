import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { ColorSchemeScript } from "@mantine/core";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Runiu - Canadian Immigration Stats",
  description:
    "Discover comprehensive, up-to-date statistics for Canadian Immigration Programs at Runiu. Your go-to source for detailed insights into Express Entry, Provincial Nominee Programs (PNP), and more. Whether you're planning to immigrate, study, or work in Canada, Runiu offers invaluable data and analysis to help you navigate the complex landscape of Canadian immigration. Explore our interactive tools and resources tailored for prospective immigrants and stakeholders. Start your journey to Canada with confidence—visit Runiu today.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={cn("min-h-screen font-sans", inter.variable)}>
        <Providers>
          <Toaster richColors />
          <Navbar />
          {children}
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
