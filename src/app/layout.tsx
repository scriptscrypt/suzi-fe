import type { Metadata } from "next";
import { Inter, Mogra } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const mogra = Mogra({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mogra",
});

export const metadata: Metadata = {
  title: "Suzi by SEND",
  description: "Suzi is like mother, deep in crypto and deep in ___",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mogra.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
