import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Eli con Acento | Desarrollador Full-Stack",
  description: "Portafolio de desarrollo de software de Elí Rodríguez, mostrando proyectos con React, Next.js, Node.js, Python e Inteligencia Artificial.",
  icons: {
    icon: "/eliconacento.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}