import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";
import { BackgroundProvider } from "../context/BackgroundContext";
import Background from "../components/background/background";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import Header from "../components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arlecchino - Balatro Guide",
  description:
    "Simple online guide to quickly find the best Joker combinations for Balatro.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col bg-background`}
      >
        <NuqsAdapter>
          <BackgroundProvider>
            <Header />
            <Background />
            {children}
            <Footer />
          </BackgroundProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
