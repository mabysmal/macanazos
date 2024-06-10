import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Macanazos",
  description: "Caricatura social para toda ocasión",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
