"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        e.preventDefault();
        window.location.href = `/services#${hash}`;
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        window.location.href = href;
    };

    return (
        <footer className="w-full bg-white border-t border-slate-100 select-none overflow-hidden pt-14 pb-8">
            <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">

                {/* Main 4-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">

                    {/* Column 1: Brand Logo, Bio & Socials (Span 4) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-4 flex flex-col items-start"
                    >
                        {/* Brand Logo (Pure SVG + Typography) */}
                        <Link
                            href="/"
                            onClick={(e) => handleLinkClick(e, "/")}
                            className="flex items-center gap-2.5 mb-4 group"
                        >
                            <div className="w-9 h-9 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                <svg
                                    className="w-full h-full"
                                    viewBox="0 0 100 100"
                                    fill="none"
                                >
                                    <path
                                        d="M26 18 H52 C68 18 78 28 78 44 C78 60 68 70 52 70 H40 V86 H26 V18 Z"
                                        fill="#0b172a"
                                    />
                                    <path
                                        d="M40 38 C40 38 45 32 52 32 C58 32 63 36 63 42 C67 42 70 45 70 49 C70 54 66 57 61 57 H38 C34 57 31 54 31 50 C31 46 34 43 38 43 C38 41 39 39 40 38 Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M26 62 Q 44 48 68 47 Q 52 62 40 70 Z"
                                        fill="#0052ff"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-[16px] sm:text-[17px] font-black tracking-tight text-[#0a1128]">
                                    PRIME CLOUD
                                </span>
                                <span className="text-[9px] sm:text-[9.5px] font-extrabold tracking-[0.16em] text-[#0052ff] mt-0.5">
                                    SOLUTIONS LLC
                                </span>
                            </div>
                        </Link>

                        {/* Description */}
                        <p className="text-[13px] text-slate-500 font-normal leading-relaxed max-w-sm mb-6">
                            ERP, business software and AI solutions to help businesses operate smarter,
                            faster and more efficiently.
                        </p>

                        {/* Social Icons Row */}
                        <div className="flex items-center gap-2.5">
                            {/* LinkedIn */}
                            <a
                                href="#linkedin"
                                aria-label="LinkedIn"
                                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#0052ff] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200"
                            >
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="#instagram"
                                aria-label="Instagram"
                                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#0052ff] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200"
                            >
                                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>

                            {/* YouTube */}
                            <a
                                href="#youtube"
                                aria-label="YouTube"
                                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#0052ff] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200"
                            >
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>

                            {/* Facebook */}
                            <a
                                href="#facebook"
                                aria-label="Facebook"
                                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#0052ff] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200"
                            >
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>

                    {/* Column 2: Quick Links (Span 2) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-2"
                    >
                        <h4 className="text-[14px] font-bold text-slate-900 tracking-tight mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about" },
                                { name: "Our Services", href: "/services" },
                                { name: "Contact", href: "/contact" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                        className="text-[13px] text-slate-600 hover:text-[#0052ff] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3: Our Services (Span 3) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-3"
                    >
                        <h4 className="text-[14px] font-bold text-slate-900 tracking-tight mb-4">
                            Our Services
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                { name: "Odoo ERP Implementation", hash: "odoo" },
                                { name: "Zoho Software Implementation", hash: "zoho" },
                                { name: "Tally Implementation & Support", hash: "tally" },
                                { name: "AI Solutions & Automation", hash: "ai" },
                                { name: "Integration & Consulting", hash: "integration" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={`/services#${item.hash}`}
                                        onClick={(e) => handleServiceClick(e, item.hash)}
                                        className="text-[13px] text-slate-600 hover:text-[#0052ff] transition-colors cursor-pointer"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 4: Contact Us (Span 3) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-3"
                    >
                        <h4 className="text-[14px] font-bold text-slate-900 tracking-tight mb-4">
                            Contact Us
                        </h4>
                        <ul className="space-y-3.5">
                            {/* Email */}
                            <li className="flex items-center gap-3">
                                <svg
                                    className="w-4.5 h-4.5 text-slate-800 shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
                                </svg>
                                <a
                                    href="mailto:info@primecloudsolutionsllc.com"
                                    className="text-[13px] text-slate-700 hover:text-[#0052ff] transition-colors break-all"
                                >
                                    info@primecloudsolutionsllc.com
                                </a>
                            </li>

                            {/* Phone */}
                            <li className="flex items-center gap-3">
                                <svg
                                    className="w-4.5 h-4.5 text-slate-800 shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                    />
                                </svg>
                                <a
                                    href="tel:+971501234567"
                                    className="text-[13px] text-slate-700 hover:text-[#0052ff] transition-colors"
                                >
                                    +971 50 123 4567
                                </a>
                            </li>

                            {/* Location */}
                            <li className="flex items-center gap-3">
                                <svg
                                    className="w-4.5 h-4.5 text-slate-800 shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                </svg>
                                <span className="text-[13px] text-slate-700">
                                    Dubai, United Arab Emirates
                                </span>
                            </li>
                        </ul>
                    </motion.div>

                </div>

                {/* Bottom Bar Divider & Copyright */}
                <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
                    <div>
                        &copy; 2025 Prime Cloud Solutions LLC. All rights reserved.
                    </div>

                    <div className="flex items-center gap-3">
                        <a href="#privacy" className="hover:text-[#0052ff] transition-colors">
                            Privacy Policy
                        </a>
                        <span className="text-slate-300">|</span>
                        <a href="#terms" className="hover:text-[#0052ff] transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
