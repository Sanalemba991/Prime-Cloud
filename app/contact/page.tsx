import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Contact from "./Contact";

export const metadata = {
    title: "Contact Us - Prime Cloud Solutions LLC",
    description:
        "Let's Build Your Next Solution. Have a project, question, or need expert advice? Reach out to Prime Cloud Solutions LLC in Dubai, UAE.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#f8fbff]">
            <Navbar />
            <Contact />
            <Footer />
        </main>
    );
}
