import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <script src="https://kit.fontawesome.com/a92882eca5.js" crossOrigin="anonymous"></script>
      </head>
      <body className="font-primary">
        {children}
      </body>
    </html>
  );
}
