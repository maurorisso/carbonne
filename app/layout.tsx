import type { Metadata } from "next";
import Header from "@/components/Header";
import localFont from "next/font/local";
import "./globals.css";
import "cal-sans";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const Roobert = localFont({
  src: "./fonts/Roobert-Medium.otf",
  variable: "--font-roobert",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Carbonne",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${Roobert.variable} antialiased`}
      >
        <div className="flex flex-col h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
