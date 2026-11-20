"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
    return (
        <section className="relative w-full min-h-0 lg:min-h-[560px] flex items-center bg-white overflow-hidden pt-12 pb-16 sm:pb-20 lg:py-16 select-none">
            {/* Background Graphic Image (Laptop + Waves + Ambient Surface) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
                {/* Mobile Background Image */}
                <Image
                    src="/banner/Minimal Blue Analytics Laptop Workspace.png"
                    alt="PrimeCloud Banner Background Mobile"
                    fill
                    priority
                    className="block sm:hidden object-cover object-right"
                />
                {/* Desktop / Tablet Background Image */}
                <Image
                    src="/banner/Bnn.png"
                    alt="PrimeCloud Banner Background"
                    fill
                    priority
                    className="hidden sm:block object-cover object-right lg:object-center"
                />
            </div>

            <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 items-center">

                    {/* ================= LEFT COLUMN (Text Content - Slides from Left, Matching About.tsx style on mobile) ================= */}
                    <div className="lg:col-span-6 flex flex-col items-start text-left pr-0 lg:pr-4">

                        {/* Top Pill Tag - About.tsx style */}
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f1fd] mb-5 text-[12px] sm:text-[13px] font-bold text-[#0052ff] tracking-tight shadow-2xs"
                        >
                            <span className="font-bold text-[#0052ff]">ERP</span>
                            <span className="text-blue-300 font-light">|</span>
                            <span className="text-slate-700 font-semibold">Business Software</span>
                            <span className="text-blue-300 font-light">|</span>
                            <span className="text-slate-700 font-semibold">AI Solutions</span>
                        </motion.div>

                        {/* Main Headline - About.tsx style font sizing & spacing */}
                        <motion.h1
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-3xl sm:text-4xl lg:text-[48px] font-black text-[#0f172a] tracking-tight leading-[1.16] lg:leading-[1.12] mb-5"
                        >
                            Transform Your <br />
                            Business with <br />
                            <span className="text-[#0052ff]">ERP &amp; AI Solutions</span>
                        </motion.h1>

                        {/* Sub-paragraph - About.tsx typography */}
                        <motion.p
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[13.5px] sm:text-sm lg:text-[15px] text-slate-500 font-normal leading-relaxed max-w-xl lg:max-w-[440px] mb-8"
                        >
                            Seamless ERP solutions with Odoo, Zoho &amp; Tally — powered by AI to automate and scale your business.
                        </motion.p>

                        {/* CTA Buttons - Matching About.tsx button aesthetics */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center gap-3.5 mb-10"
                        >
                            <a
                                href="#get-started"
                                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#0052ff] hover:bg-[#0047db] text-white font-semibold text-xs sm:text-[13.5px] lg:text-[14px] shadow-[0_4px_16px_rgba(0,82,255,0.28)] hover:shadow-[0_6px_20px_rgba(0,82,255,0.36)] hover:-translate-y-0.5 transition-all duration-200 group"
                            >
                                <span>Get Started</span>
                                <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                                    →
                                </span>
                            </a>


                        </motion.div>

                        {/* 3 Value Pillars with Vertical Dividers - Hidden on mobile, visible on desktop/PC */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="hidden sm:flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-4 md:gap-6 pt-1 w-full max-w-[500px]"
                        >

                            {/* Item 1: Streamline Operations */}
                            <div className="flex items-center gap-2.5">
                                <div className="w-6 h-6 flex items-center justify-center shrink-0 text-[#0052ff]">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M13 2L4 13.5h6.5L9.5 22 20 10.5h-7L13 2z" />
                                    </svg>
                                </div>
                                <div className="text-[11px] sm:text-[12px] font-bold text-[#0f172a] leading-tight">
                                    Streamline <br className="hidden sm:block" /> Operations
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="hidden sm:block h-8 w-px bg-slate-300" />

                            {/* Item 2: Improve Productivity */}
                            <div className="flex items-center gap-2.5">
                                <div className="w-6 h-6 flex items-center justify-center shrink-0 text-[#0052ff]">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M4 19h16v2H2V3h2v16zm4-2H6v-5h2v5zm5 0h-2V7h2v10zm5 0h-2v-8h2v8z" />
                                    </svg>
                                </div>
                                <div className="text-[11px] sm:text-[12px] font-bold text-[#0f172a] leading-tight">
                                    Improve <br className="hidden sm:block" /> Productivity
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="hidden sm:block h-8 w-px bg-slate-300" />

                            {/* Item 3: Scale with AI */}
                            <div className="flex items-center gap-2.5">
                                <div className="w-6 h-6 flex items-center justify-center shrink-0 text-[#0052ff]">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                        />
                                    </svg>
                                </div>
                                <div className="text-[11px] sm:text-[12px] font-bold text-[#0f172a] leading-tight">
                                    Scale <br className="hidden sm:block" /> with AI
                                </div>
                            </div>

                        </motion.div>

                    </div>

                    {/* ================= RIGHT COLUMN (Floating Badges - Slide in from Right, Stay Static - Desktop/PC only) ================= */}
                    <div className="hidden lg:flex lg:col-span-6 relative w-full lg:min-h-[380px] items-center justify-center">

                        {/* FLOATING BADGE 1: Odoo (Top Center-Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: 90, y: -30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-4 left-6 sm:left-14 z-20"
                        >
                            <div className="bg-white/95 backdrop-blur-sm px-6 py-3.5 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-slate-100/90 flex items-center justify-center transition-transform hover:scale-105">
                                <Image
                                    src="/logo/odoo.webp"
                                    alt="Odoo"
                                    width={120}
                                    height={44}
                                    className="h-9 sm:h-11 w-auto object-contain"
                                />
                            </div>
                        </motion.div>

                        {/* FLOATING BADGE 2: Zoho (Top Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 110 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-6 right-4 sm:right-10 z-20"
                        >
                            <div className="bg-white/95 backdrop-blur-sm px-6 py-3.5 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-slate-100/90 flex items-center justify-center transition-transform hover:scale-105">
                                <Image
                                    src="/logo/zoho2.webp"
                                    alt="Zoho"
                                    width={120}
                                    height={44}
                                    className="h-9 sm:h-11 w-auto object-contain"
                                />
                            </div>
                        </motion.div>

                        {/* FLOATING BADGE 3: AI Chip (Middle Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -60, scale: 0.8 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-[52%] -translate-y-1/2 -left-2 sm:left-4 z-20"
                        >
                            <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-slate-100/90 flex items-center justify-center transition-transform hover:scale-110">
                                <Image
                                    src="/logo/AI.png"
                                    alt="AI Solutions"
                                    width={60}
                                    height={60}
                                    className="w-11 h-11 sm:w-12 sm:h-12 object-contain"
                                />
                            </div>
                        </motion.div>

                        {/* FLOATING BADGE 4: Tally Prime (Bottom Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 90, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute bottom-10 right-2 sm:right-6 z-20"
                        >
                            <div className="bg-white/95 backdrop-blur-sm px-6 py-3.5 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-slate-100/90 flex items-center justify-center transition-transform hover:scale-105">
                                <Image
                                    src="/logo/tally.png"
                                    alt="Tally Prime"
                                    width={120}
                                    height={44}
                                    className="h-9 sm:h-11 w-auto object-contain"
                                />
                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}