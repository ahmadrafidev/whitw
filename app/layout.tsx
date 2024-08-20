import type { Metadata } from "next";

import { DM_Sans } from "next/font/google";

import "./globals.css";

const dm_sans = DM_Sans({ 
  weight: '400',
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "WHITW",
  description: "Discover What‘s Happening Around the World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dm_sans.className}>
      <body>{children}</body>
    </html>
  );
}
