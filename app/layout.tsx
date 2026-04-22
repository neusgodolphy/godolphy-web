import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Godolphy - El motor de reservas con IA",
  description: "Software para servicios a domicilio y técnicos de campo. Reservas, agenda, pagos, geolocalización del equipo y fidelización con IA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
