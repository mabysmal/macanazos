import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Macanazos",
  description: "Caricatura social para toda ocasión.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"className={bebasNeue.className}>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      
      {/* <style>
        @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
      </style> */}


      <body className={bebasNeue.className}>{children}</body>
    </html>
  );
}
