import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.brandName} - ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "LMS",
    "Learning Management System",
    "Online Learning",
    "Course Management",
    "E-Learning",
    "Education Platform",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.brandName} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.brandName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.brandName} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
