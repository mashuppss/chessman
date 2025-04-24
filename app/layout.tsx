import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Providers } from "./providers"; // Import the Providers

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chessman Solutions - Elder Care Experts",
  description: "Providing expert RN medical guidance, client advocacy, family support, and care navigation for seniors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 pt-16 md:pt-20`}>
        <Providers>
          <Header /> {/* Header is rendered here */}
          <main>{children}</main> {/* Page content (like page.tsx) goes here */}
          <Footer /> {/* Footer is rendered here */}
        </Providers>
      </body>
    </html>
  );
}