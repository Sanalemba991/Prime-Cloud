"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
    return (
        <section className="relative w-full min-h-[500px] lg:min-h-[560px] flex items-center bg-white overflow-hidden py-10 lg:py-14 select-none">
            {/* Background Graphic Image (Laptop + Waves + Ambient Surface) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
                <Image
                    src="/banner/Bnn.png"
                    alt="PrimeCloud Banner Background"
                    fill
                    priority
                    className="object-cover object-right lg:object-center"
                />
            </div>

            <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">

                    {/* ================= LEFT COLUMN (Text Content - Slides from Left) ================= */}
                    <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4">

                        {/* Top Pill Tag */}
                        <motion.div
                            initial={{ opacity: 0, x: -70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e8f1fd]/90 backdrop-blur-xs mb-5 text-[12px] sm:text-[13px] font-medium text-slate-800 tracking-tight shadow-xs"
                        >
                            <span className="font-bold text-[#1a73e8]">ERP</span>
                            <span className="text-slate-400 font-light">|</span>
                            <span className="text-[#1e293b] font-semibold">Business Software</span>
                            <span className="text-slate-400 font-light">|</span>
                            <span className="text-[#1e293b] font-semibold">AI Solutions</span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, x: -90 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[34px] sm:text-[46px] lg:text-[48px] font-black tracking-tight leading-[1.12] text-[#0f172a] mb-4"
                        >
                            Transform Your <br />
                            Business with <br />
                            <span className="text-[#0052ff]">ERP &amp; AI Solutions</span>
                        </motion.h1>

                        {/* Sub-paragraph */}
                        <motion.p
                            initial={{ opacity: 0, x: -70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[14px] sm:text-[15px] leading-relaxed text-[#334155] max-w-[440px] mb-7 font-normal"
                        >
                            Seamless ERP solutions with Odoo, Zoho &amp; Tally — powered by AI to automate and scale your business.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center gap-3.5 mb-10"
                        >
                            <a
                                href="#get-started"
                                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#0052ff] hover:bg-[#0045d8] text-white font-semibold text-[14px] shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                            >
                                <span>Get Started</span>
                                <span className="text-base leading-none">&rarr;</span>
                            </a>

                            <a
                                href="#services"
                                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white hover:bg-slate-50 text-[#0f172a] font-semibold text-[14px] border border-[#0f172a] shadow-xs transition-all hover:-translate-y-0.5"
                            >
                                Our Services
                            </a>
                        </motion.div>

                        {/* 3 Value Pillars with Vertical Dividers */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 md:gap-6 pt-3 w-full max-w-[500px]"
                        >

                            {/* Item 1: Streamline Operations */}
                            <div className="flex items-center gap-2 sm:gap-2.5">
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
                            <div className="flex items-center gap-2 sm:gap-2.5">
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
                            <div className="flex items-center gap-2 sm:gap-2.5">
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

                    {/* ================= RIGHT COLUMN (Floating Badges - Slide in from Right with Gentle Ambient Float) ================= */}
                    <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[380px] flex items-center justify-center">

                        {/* FLOATING BADGE 1: Odoo (Top Center-Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: 90, y: -30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-4 left-6 sm:left-14 z-20"
                        >
                            <motion.div
                                animate={{ y: [0, -7, 0] }}
                                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                                className="bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-slate-100/90 flex items-center justify-center transition-transform hover:scale-105"
                            >
                                <span className="font-black text-2xl text-[#714B67] tracking-tight">
                                    odoo
                                </span>
                            </motion.div>
                        </motion.div>

                        {/* FLOATING BADGE 2: Zoho (Top Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 110 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-6 right-4 sm:right-10 z-20"
                        >
                            <motion.div
                                animate={{ y: [0, 7, 0] }}
                                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.5 }}
                                className="bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-slate-100/90 flex items-center justify-center transition-transform hover:scale-105"
                            >
                                <div className="flex items-center gap-1 font-black text-sm">
                                    <span className="bg-[#e53935] text-white w-6 h-6 rounded flex items-center justify-center font-bold text-xs shadow-xs">
                                        Z
                                    </span>
                                    <span className="bg-[#43a047] text-white w-6 h-6 rounded flex items-center justify-center font-bold text-xs shadow-xs">
                                        O
                                    </span>
                                    <span className="bg-[#1e88e5] text-white w-6 h-6 rounded flex items-center justify-center font-bold text-xs shadow-xs">
                                        H
                                    </span>
                                    <span className="bg-[#fbc02d] text-white w-6 h-6 rounded flex items-center justify-center font-bold text-xs shadow-xs">
                                        O
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* FLOATING BADGE 3: AI Chip (Middle Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -60, scale: 0.8 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-[52%] -translate-y-1/2 -left-2 sm:left-4 z-20"
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                className="bg-white/95 backdrop-blur-sm p-3.5 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-slate-100/90 flex items-center justify-center transition-transform hover:scale-110"
                            >
                                <div className="relative w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex flex-col items-center justify-center text-[#0052ff]">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <rect x="5" y="5" width="14" height="14" rx="2" strokeWidth={2} />
                                        <path strokeLinecap="round" d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                                    </svg>
                                    <span className="text-[9px] font-black tracking-tighter absolute">AI</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* FLOATING BADGE 4: Tally Prime (Bottom Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 90, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute bottom-10 right-2 sm:right-6 z-20"
                        >
                            <motion.div
                                animate={{ y: [0, 6, 0] }}
                                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 1.2 }}
                                className="bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-slate-100/90 flex flex-col items-center justify-center gap-1 transition-transform hover:scale-105"
                            >
                                <div className="w-7 h-7 grid grid-cols-2 gap-0.5 p-0.5 rounded-sm">
                                    <div className="bg-[#0b5cff] rounded-[1px]"></div>
                                    <div className="bg-[#eab308] rounded-[1px]"></div>
                                    <div className="bg-[#38bdf8] rounded-[1px]"></div>
                                    <div className="bg-[#f59e0b] rounded-[1px]"></div>
                                </div>
                                <span className="text-[10px] font-bold text-slate-800 tracking-tight">
                                    Tally Prime
                                </span>
                            </motion.div>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}
