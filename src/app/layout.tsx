import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/tokens.css";
import "@/styles/grid.css";

const inter = Inter({
  variable: "--font-family-base",
  subsets: ["latin"],
  weight: ["400", "500", "600", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mickey Aipassa",
  description: "Portfolio of Mickey Aipassa",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
