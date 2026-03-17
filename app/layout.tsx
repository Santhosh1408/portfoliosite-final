import "./globals.css";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Santhosh Reddy — Portfolio",
  description: "AI/ML + Software Systems portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jakarta.variable} font-sans text-slate-800`}>
        {children}
      </body>
    </html>
  );
}