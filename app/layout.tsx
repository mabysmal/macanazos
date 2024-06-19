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
      
      {/* <style>
        @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
      </style> */}


      <body className={inter.className}>{children}</body>
    </html>
  );
}
