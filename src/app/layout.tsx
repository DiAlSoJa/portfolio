import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "../../providers/theme-provider";

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

      <body className="font-primary">
        <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
         storageKey="jotion-theme-2"
         >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
