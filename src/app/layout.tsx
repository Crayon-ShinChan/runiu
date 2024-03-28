import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { TRPCReactProvider } from "@/trpc/react";

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
      <body className={cn("min-h-screen font-sans", inter.variable)}>
        <TRPCReactProvider>
          <Navbar />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
