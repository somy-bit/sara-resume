

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashWrapper from "@/components/SplashWrapper";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "resume",
  description: "Somayyeh mousavi's resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  console.log('layout repeat')
  
  return (
    <html lang="en">
      <body >
        <SplashWrapper children={children} />
      </body>
    </html>
  );
}
