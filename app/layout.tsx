import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

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
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
