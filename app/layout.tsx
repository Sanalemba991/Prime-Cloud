import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrimeCloud - ERP & AI Solutions",
  description:
    "Implementation, customization and integration of leading business platforms like Odoo, Zoho and Tally combined with AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
