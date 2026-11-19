import React from "react";
import About from "./About";

export const metadata = {
    title: "About Us - Prime Cloud Solutions LLC",
    description:
        "Powering Businesses with ERP, Software and AI Solutions. Learn more about Prime Cloud Solutions LLC.",
};

export default function AboutPage() {
    return (
        <div className="w-full bg-white">
            <About />
        </div>
    );
}
