import { Inter, M_PLUS_1p } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"], weight: '500'});

export const metadata = {
  title: "IEEE RAS MUJ",
  description: "Official IEEE RAS MUJ Website",
};

export default function RootLayout({ children }) {
  return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>

  );
}
