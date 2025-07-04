import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer";
import { BackgroundProvider } from "../context/BackgroundContext";
import Background from "../components/background/background";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import Header from "../components/header";
import { Pixelify_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Arlecchino - Balatro Guide",
  description:
    "Simple online guide to quickly find the best Joker combinations for Balatro.",
  icons: {
    icon: "/favicon.ico",
  },
};

const pixelify = Pixelify_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pixelify.className}>
      <body className={`antialiased flex flex-col bg-background`}>
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
