import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diego Soto | Desarrollador de software",
  description: "Si quieres tu negocio en internet o desarrollar la aplicacion de tu sueños, no esperes mas, mandame tu mensaje.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://kit.fontawesome.com/a92882eca5.js"></Script>
      </head>
      <body className="font-primary">
        {children}
      </body>
    </html>
  );
}
