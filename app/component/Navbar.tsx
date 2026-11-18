"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isHome = pathname === "/";
    const isAbout = pathname === "/about" || pathname.startsWith("/about");
    const isContact = pathname === "/contact" || pathname.startsWith("/contact");

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
                    <div className="relative group/menu">
                        <button className="text-[14px] font-semibold text-slate-700 group-hover/menu:text-[#0052ff] transition-colors py-1 flex items-center gap-1 cursor-pointer">
                            <span>Services</span>
                            <svg
                                className="w-3.5 h-3.5 text-slate-400 group-hover/menu:text-[#0052ff] group-hover/menu:rotate-180 transition-all duration-200"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
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
                    <a
                        href="/contact"
                        className="hidden sm:inline-flex items-center gap-2 bg-[#0052ff] hover:bg-[#0047db] text-white font-semibold px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-[13px] shadow-[0_4px_16px_rgba(0,82,255,0.28)] hover:shadow-[0_6px_20px_rgba(0,82,255,0.36)] hover:-translate-y-0.5 transition-all duration-200 group"
                    >
                        <span>Book a Consultation</span>
                        <span className="group-hover:translate-x-0.5 transition-transform duration-200 font-bold">
                            →
                        </span>
                    </a>

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
                        <a
                            href="/#services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[15px] font-semibold text-slate-700 hover:text-[#0052ff]"
                        >
                            Services
                        </a>
                        <a
                            href="/#industries"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[15px] font-semibold text-slate-700 hover:text-[#0052ff]"
                        >
                            Industries
                        </a>
                        <a
                            href="#resources"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[15px] font-semibold text-slate-700 hover:text-[#0052ff]"
                        >
                            Resources
                        </a>
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
                            <a
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full inline-flex items-center justify-center gap-2 bg-[#0052ff] text-white font-semibold py-3 rounded-full text-[13px] shadow-sm"
                            >
                                <span>Book a Consultation</span>
                                <span>→</span>
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
