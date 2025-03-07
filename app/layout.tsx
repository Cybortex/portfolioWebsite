import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Folugboji",
  description: "Mindset. Business.. Motivation...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="brand">
      <body className={inter.className}>
        <Header/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
