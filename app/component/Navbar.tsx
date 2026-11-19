"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isHome = pathname === "/";
    const isAbout = pathname === "/about" || pathname.startsWith("/about");
    const isContact = pathname === "/contact" || pathname.startsWith("/contact");

    const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        if (pathname === "/services") {
            // Already on services page: smoothly update URL & trigger smooth scroll to the target
            e.preventDefault();
            window.location.hash = hash;
        } else {
            // On a different page: full navigation / reload straight to /services#target
            e.preventDefault();
            window.location.href = `/services#${hash}`;
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100/80 select-none">
            <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 h-20 flex items-center justify-between">

                {/* Left: Brand Logo (Pure SVG + Typography, No Image) */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    {/* Pure SVG Prime Cloud "P" Logo */}
                    <div className="w-9 h-9 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 100 100"
                            fill="none"
                        >
                            {/* P stem & top curve in dark navy */}
                            <path
                                d="M26 18 H52 C68 18 78 28 78 44 C78 60 68 70 52 70 H40 V86 H26 V18 Z"
                                fill="#0b172a"
                            />
                            {/* Cloud shape cut-out inside P */}
                            <path
                                d="M40 38 C40 38 45 32 52 32 C58 32 63 36 63 42 C67 42 70 45 70 49 C70 54 66 57 61 57 H38 C34 57 31 54 31 50 C31 46 34 43 38 43 C38 41 39 39 40 38 Z"
                                fill="white"
                            />
                            {/* Blue swoosh across lower P */}
                            <path
                                d="M26 62 Q 44 48 68 47 Q 52 62 40 70 Z"
                                fill="#0052ff"
                            />
                        </svg>
                    </div>

                    {/* Brand Name Text */}
                    <div className="flex flex-col leading-none">
                        <span className="text-[16px] sm:text-[17px] font-black tracking-tight text-[#0a1128]">
                            PRIME CLOUD
                        </span>
                        <span className="text-[9px] sm:text-[9.5px] font-extrabold tracking-[0.16em] text-[#0052ff] mt-0.5">
                            SOLUTIONS LLC
                        </span>
                    </div>
                </Link>

                {/* Center: Navigation Links (Desktop) */}
                <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
                    {/* Home */}
                    <Link
                        href="/"
                        className={`relative text-[14px] py-1 transition-colors flex flex-col items-center ${isHome
                            ? "font-bold text-[#0052ff]"
                            : "font-semibold text-slate-700 hover:text-[#0052ff]"
                            }`}
                    >
                        <span>Home</span>
                        {isHome && (
                            <span className="absolute -bottom-2 w-4 h-[2.5px] bg-[#0052ff] rounded-full" />
                        )}
                    </Link>

                    {/* About */}
                    <Link
                        href="/about"
                        className={`relative text-[14px] py-1 transition-colors flex flex-col items-center ${isAbout
                            ? "font-bold text-[#0052ff]"
                            : "font-semibold text-slate-700 hover:text-[#0052ff]"
                            }`}
                    >
                        <span>About</span>
                        {isAbout && (
                            <span className="absolute -bottom-2 w-4 h-[2.5px] bg-[#0052ff] rounded-full" />
                        )}
                    </Link>

                    {/* Services (Dropdown) */}
                    <div className="relative group/menu py-2">
                        <Link
                            href="/services"
                            className={`px-3 py-1.5 rounded-full text-[14px] font-semibold flex items-center gap-1.5 transition-all duration-200 ${pathname.startsWith("/services")
                                ? "bg-blue-50 text-[#0052ff]"
                                : "text-slate-700 hover:text-[#0052ff] group-hover/menu:bg-blue-50/70 group-hover/menu:text-[#0052ff]"
                                }`}
                        >
                            <span>Services</span>
                            <svg
                                className="w-3.5 h-3.5 text-slate-400 group-hover/menu:text-[#0052ff] group-hover/menu:rotate-180 transition-transform duration-200"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </Link>

                        {/* Mega Menu Dropdown */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[940px] xl:w-[960px] opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200 pointer-events-none group-hover/menu:pointer-events-auto z-50">

                            {/* Pointed Triangle Indicator on Top */}
                            <div className="w-4 h-4 bg-white rotate-45 border-t border-l border-slate-100/90 shadow-[-2px_-2px_4px_rgba(0,0,0,0.02)] mx-auto -mb-2 relative z-10" />

                            {/* Dropdown Container */}
                            <div className="relative bg-white rounded-3xl p-5 shadow-[0_24px_65px_-15px_rgba(15,23,42,0.18),0_0_0_1px_rgba(15,23,42,0.06)] border border-slate-100 grid grid-cols-12 gap-3.5 overflow-hidden">

                                {/* 1. Left Feature Card with Background Image */}
                                <div className="relative col-span-4 rounded-2xl p-6 flex flex-col justify-between border border-blue-100/50 overflow-hidden group/card min-h-[355px]">
                                    {/* Background Image */}
                                    <Image
                                        src="/Glossy Cloud Upload Laptop Illustration.png"
                                        alt="End-to-End Business Solutions Background"
                                        fill
                                        className="object-cover object-center  transition-transform duration-500"
                                    />
                                    {/* Subtle Overlay to make text pop */}
                                    <div className="absolute inset-0  pointer-events-none" />

                                    {/* Text Content */}
                                    <div className="relative z-10">
                                        <span className="text-[12px] font-bold text-[#0052ff] tracking-tight">
                                            Our Services
                                        </span>
                                        <h3 className="text-[20px] font-black text-[#0a1128] leading-[1.25] mt-1.5">
                                            End-to-End<br />Business Solutions
                                        </h3>
                                    </div>
                                </div>

                                {/* 2. Center Column: Main Services List (Slightly more compact) */}
                                <div className="col-span-4 flex flex-col justify-between py-1 px-1 divide-y divide-slate-100">

                                    {/* Odoo ERP */}
                                    <Link
                                        href="/services#odoo"
                                        onClick={(e) => handleServiceClick(e, "odoo")}
                                        className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors group/item"
                                    >
                                        <div className="flex items-center gap-2.5">
                                            {/* Exact Odoo Logo SVG */}
                                            <div className="w-10 h-8 flex items-center justify-center shrink-0">
                                                <svg className="w-full h-auto" viewBox="0 0 110 38" fill="none">
                                                    {/* O */}
                                                    <circle cx="17" cy="19" r="12" stroke="#714B67" strokeWidth="5.5" fill="none" />
                                                    {/* d */}
                                                    <circle cx="45" cy="19" r="12" stroke="#714B67" strokeWidth="5.5" fill="none" />
                                                    <path d="M54.5 4v27" stroke="#714B67" strokeWidth="5.5" strokeLinecap="round" />
                                                    {/* o */}
                                                    <circle cx="73" cy="19" r="12" stroke="#714B67" strokeWidth="5.5" fill="none" />
                                                    {/* o */}
                                                    <circle cx="101" cy="19" r="12" stroke="#714B67" strokeWidth="5.5" fill="none" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-[13px] font-black text-[#0b132b] group-hover/item:text-[#0052ff] transition-colors leading-tight">
                                                    Odoo ERP
                                                </h4>
                                                <p className="text-[10.5px] font-medium text-slate-500 leading-tight mt-0.5">
                                                    Implementation &amp; Support
                                                </p>
                                            </div>
                                        </div>
                                        <svg className="w-3.5 h-3.5 text-slate-800 group-hover/item:text-[#0052ff] group-hover/item:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>

                                    {/* Zoho Software */}
                                    <Link
                                        href="/services#zoho"
                                        onClick={(e) => handleServiceClick(e, "zoho")}
                                        className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors group/item"
                                    >
                                        <div className="flex items-center gap-2.5">
                                            {/* Exact Zoho 4 Connected Cubes SVG */}
                                            <div className="w-10 h-8 flex items-center justify-center shrink-0">
                                                <svg className="w-8 h-6" viewBox="0 0 76 56" fill="none">
                                                    {/* Red Cube */}
                                                    <rect x="2" y="8" width="22" height="22" rx="4" transform="rotate(-6 2 8)" stroke="#E42528" strokeWidth="4.5" fill="none" />
                                                    {/* Green Cube */}
                                                    <rect x="20" y="4" width="22" height="22" rx="4" transform="rotate(3 20 4)" stroke="#22A447" strokeWidth="4.5" fill="none" />
                                                    {/* Blue/Cyan Cube */}
                                                    <rect x="36" y="8" width="22" height="22" rx="4" transform="rotate(-4 36 8)" stroke="#1976D2" strokeWidth="4.5" fill="none" />
                                                    {/* Yellow/Orange Cube */}
                                                    <rect x="52" y="7" width="22" height="22" rx="4" transform="rotate(5 52 7)" stroke="#F9A825" strokeWidth="4.5" fill="none" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-[13px] font-black text-[#0b132b] group-hover/item:text-[#0052ff] transition-colors leading-tight">
                                                    Zoho Software
                                                </h4>
                                                <p className="text-[10.5px] font-medium text-slate-500 leading-tight mt-0.5">
                                                    Implementation &amp; Customization
                                                </p>
                                            </div>
                                        </div>
                                        <svg className="w-3.5 h-3.5 text-slate-800 group-hover/item:text-[#0052ff] group-hover/item:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>

                                    {/* Tally */}
                                    <Link
                                        href="/services#tally"
                                        onClick={(e) => handleServiceClick(e, "tally")}
                                        className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors group/item"
                                    >
                                        <div className="flex items-center gap-2.5">
                                            {/* Exact Tally Brush Script Logo SVG */}
                                            <div className="w-10 h-8 flex items-center justify-center shrink-0">
                                                <svg className="w-10 h-6" viewBox="0 0 78 36" fill="none">
                                                    <path
                                                        d="M5 14 C12 13 22 12 30 11 M16 7 C17 14 17 22 17 29 C17 31 16 32 14 32 M30 25 C31 23 33 20 35 20 C37 20 37 22 36 24 C35 27 33 29 30 29 C28 29 27 27 27 24 C27 20 30 17 33 17 C36 17 38 19 38 23 L37 29 M41 11 L41 29 M46 11 L46 29 M53 19 C55 24 58 29 60 32 M67 19 L58 34 C56 37 54 39 51 39"
                                                        stroke="#D8232A"
                                                        strokeWidth="4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-[13px] font-black text-[#0b132b] group-hover/item:text-[#0052ff] transition-colors leading-tight">
                                                    Tally
                                                </h4>
                                                <p className="text-[10.5px] font-medium text-slate-500 leading-tight mt-0.5">
                                                    Implementation &amp; Support
                                                </p>
                                            </div>
                                        </div>
                                        <svg className="w-3.5 h-3.5 text-slate-800 group-hover/item:text-[#0052ff] group-hover/item:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>

                                    {/* AI Solutions */}
                                    <Link
                                        href="/services#ai"
                                        onClick={(e) => handleServiceClick(e, "ai")}
                                        className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors group/item"
                                    >
                                        <div className="flex items-center gap-2.5">
                                            {/* AI Chip Icon exact match */}
                                            <div className="w-10 h-8 flex items-center justify-center shrink-0 text-[#0052ff]">
                                                <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                                                    {/* Central Rounded Chip */}
                                                    <rect x="7" y="7" width="18" height="18" rx="4" stroke="#0052ff" strokeWidth="2.4" fill="none" />
                                                    {/* Inner AI Text */}
                                                    <text x="16" y="19" textAnchor="middle" fill="#0052ff" fontSize="9" fontWeight="900" fontFamily="sans-serif">AI</text>
                                                    {/* Pins */}
                                                    <path d="M11 2v3M16 2v3M21 2v3" stroke="#0052ff" strokeWidth="2" strokeLinecap="round" />
                                                    <path d="M11 27v3M16 27v3M21 27v3" stroke="#0052ff" strokeWidth="2" strokeLinecap="round" />
                                                    <path d="M2 11h3M2 16h3M2 21h3" stroke="#0052ff" strokeWidth="2" strokeLinecap="round" />
                                                    <path d="M27 11h3M27 16h3M27 21h3" stroke="#0052ff" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-[13px] font-black text-[#0b132b] group-hover/item:text-[#0052ff] transition-colors leading-tight">
                                                    AI Solutions
                                                </h4>
                                                <p className="text-[10.5px] font-medium text-slate-500 leading-tight mt-0.5">
                                                    Business Process Automation
                                                </p>
                                            </div>
                                        </div>
                                        <svg className="w-3.5 h-3.5 text-slate-800 group-hover/item:text-[#0052ff] group-hover/item:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>

                                    {/* Integration & Consulting */}
                                    <Link
                                        href="/services#integration"
                                        onClick={(e) => handleServiceClick(e, "integration")}
                                        className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors group/item"
                                    >
                                        <div className="flex items-center gap-2.5">
                                            {/* Triple Layer / Stack Icon exact match */}
                                            <div className="w-10 h-8 flex items-center justify-center shrink-0">
                                                <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                                                    {/* Top diamond layer */}
                                                    <path d="M16 5 L27 10 L16 15 L5 10 Z" stroke="#0052ff" strokeWidth="2.4" strokeLinejoin="round" fill="none" />
                                                    {/* Middle layer */}
                                                    <path d="M5 15 L16 20 L27 15" stroke="#0052ff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                    {/* Bottom layer */}
                                                    <path d="M5 20 L16 25 L27 20" stroke="#0052ff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-[13px] font-black text-[#0b132b] group-hover/item:text-[#0052ff] transition-colors leading-tight">
                                                    Integration &amp; Consulting
                                                </h4>
                                                <p className="text-[10.5px] font-medium text-slate-500 leading-tight mt-0.5">
                                                    Data Migration &amp; System Integration
                                                </p>
                                            </div>
                                        </div>
                                        <svg className="w-3.5 h-3.5 text-slate-800 group-hover/item:text-[#0052ff] group-hover/item:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>

                                </div>

                                {/* 3. Right Column: Why Choose Us (Same size as Left Column: col-span-4) */}
                                <div className="relative col-span-4 rounded-2xl p-5 flex flex-col justify-between border border-blue-100/70 shadow-sm overflow-hidden group/card min-h-[355px]">
                                    {/* Full Card Background Image */}
                                    <Image
                                        src="/Blue Wave Platform with Cubes and P Logo.png"
                                        alt="Why Choose Prime Cloud Background"
                                        fill
                                        priority
                                        className="object-cover object-center group-hover/card:scale-105 transition-transform duration-500"
                                    />

                                    {/* Content Area */}
                                    <div className="relative z-10">
                                        {/* Pill Badge */}
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5  text-[11px] font-bold text-[#0052ff] mb-2 ">

                                            <span>Why Choose Us?</span>
                                        </div>

                                        {/* Heading - exact same size and line-height as End-to-End Business Solutions */}
                                        <h4 className="text-[20px] font-black text-[#0b132b] leading-[1.25] mt-1.5 tracking-tight">
                                            Smarter Technology.<br />
                                            <span className="text-[#0052ff]">Stronger Business.</span>
                                        </h4>

                                        {/* 4 Feature Items */}
                                        <div className="mt-3.5 space-y-2.5">
                                            {/* Item 1 */}
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-6 h-6 rounded-lg bg-white border border-blue-100/90 flex items-center justify-center text-[#0052ff] shadow-2xs shrink-0">
                                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7a14.935 14.935 0 01-2.7-2.7" />
                                                    </svg>
                                                </div>
                                                <span className="text-[11.5px] font-bold text-slate-900 leading-tight">
                                                    End-to-End Implementation
                                                </span>
                                            </div>

                                            {/* Item 2 */}
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-6 h-6 rounded-lg bg-white border border-blue-100/90 flex items-center justify-center text-[#0052ff] shadow-2xs shrink-0">
                                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                </div>
                                                <span className="text-[11.5px] font-bold text-slate-900 leading-tight">
                                                    Faster Deployment
                                                </span>
                                            </div>

                                            {/* Item 3 */}
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-6 h-6 rounded-lg bg-white border border-blue-100/90 flex items-center justify-center text-[#0052ff] shadow-2xs shrink-0">
                                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                    </svg>
                                                </div>
                                                <span className="text-[11.5px] font-bold text-slate-900 leading-tight">
                                                    Reliable Support
                                                </span>
                                            </div>

                                            {/* Item 4 */}
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-6 h-6 rounded-lg bg-white border border-blue-100/90 flex items-center justify-center text-[#0052ff] shadow-2xs shrink-0">
                                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                                                    </svg>
                                                </div>
                                                <span className="text-[11.5px] font-bold text-slate-900 leading-tight">
                                                    Expert Consultants
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Contact */}
                    <Link
                        href="/contact"
                        className={`relative text-[14px] py-1 transition-colors flex flex-col items-center ${isContact
                            ? "font-bold text-[#0052ff]"
                            : "font-semibold text-slate-700 hover:text-[#0052ff]"
                            }`}
                    >
                        <span>Contact</span>
                        {isContact && (
                            <span className="absolute -bottom-2 w-4 h-[2.5px] bg-[#0052ff] rounded-full" />
                        )}
                    </Link>
                </nav>

                {/* Right: Consultation Button (Desktop) & Mobile Hamburger */}
                <div className="flex items-center gap-3">
                    <Link
                        href="/contact"
                        className="hidden sm:inline-flex items-center gap-2 bg-[#0052ff] hover:bg-[#0047db] text-white font-semibold px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-[13px] shadow-[0_4px_16px_rgba(0,82,255,0.28)] hover:shadow-[0_6px_20px_rgba(0,82,255,0.36)] hover:-translate-y-0.5 transition-all duration-200 group"
                    >
                        <span>Book a Consultation</span>
                        <span className="group-hover:translate-x-0.5 transition-transform duration-200 font-bold">
                            →
                        </span>
                    </Link>

                    {/* Hamburger Button for Mobile */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle navigation menu"
                        className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>

            </div>

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
                    <nav className="flex flex-col gap-4">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-[15px] flex items-center justify-between ${isHome
                                ? "font-bold text-[#0052ff]"
                                : "font-semibold text-slate-700 hover:text-[#0052ff]"
                                }`}
                        >
                            <span>Home</span>
                            {isHome && (
                                <span className="w-2 h-2 rounded-full bg-[#0052ff]" />
                            )}
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-[15px] flex items-center justify-between ${isAbout
                                ? "font-bold text-[#0052ff]"
                                : "font-semibold text-slate-700 hover:text-[#0052ff]"
                                }`}
                        >
                            <span>About</span>
                            {isAbout && (
                                <span className="w-2 h-2 rounded-full bg-[#0052ff]" />
                            )}
                        </Link>
                        <Link
                            href="/#services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[15px] font-semibold text-slate-700 hover:text-[#0052ff]"
                        >
                            Services
                        </Link>
                        <Link
                            href="/#industries"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[15px] font-semibold text-slate-700 hover:text-[#0052ff]"
                        >
                            Industries
                        </Link>
                        <Link
                            href="/#resources"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[15px] font-semibold text-slate-700 hover:text-[#0052ff]"
                        >
                            Resources
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-[15px] flex items-center justify-between ${isContact
                                ? "font-bold text-[#0052ff]"
                                : "font-semibold text-slate-700 hover:text-[#0052ff]"
                                }`}
                        >
                            <span>Contact</span>
                            {isContact && (
                                <span className="w-2 h-2 rounded-full bg-[#0052ff]" />
                            )}
                        </Link>

                        <div className="pt-3 border-t border-slate-100">
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full inline-flex items-center justify-center gap-2 bg-[#0052ff] text-white font-semibold py-3 rounded-full text-[13px] shadow-sm"
                            >
                                <span>Book a Consultation</span>
                                <span>→</span>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
