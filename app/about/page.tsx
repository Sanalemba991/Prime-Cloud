import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import About from "./About";

export const metadata = {
    title: "About Us - Prime Cloud Solutions LLC",
    description:
        "Powering Businesses with ERP, Software and AI Solutions. Learn more about Prime Cloud Solutions LLC.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <About />
            <Footer />
        </main>
    );
}
