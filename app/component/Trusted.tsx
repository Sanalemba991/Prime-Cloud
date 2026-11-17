"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Trusted() {
    return (
        <section className="w-full bg-white py-10 sm:py-12 border-b border-slate-100 select-none overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col items-center">
                {/* Title */}
                <motion.h3
                    initial={{ opacity: 0, y: -25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center text-sm sm:text-[15px] font-bold text-slate-900 tracking-tight mb-8"
                >
                    Trusted Technologies We Work With
                </motion.h3>

                {/* Brand Logos Row with Dividers */}
                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 w-full">

                    {/* 1. Odoo (from Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-1.5 hover:opacity-90 transition-opacity"
                    >
                        <span className="text-2xl sm:text-[28px] font-black tracking-tight text-[#714B67] lowercase flex items-center">
                            odoo
                        </span>
                    </motion.div>

                    {/* Divider */}
                    <div className="hidden sm:block h-7 w-px bg-slate-200" />

                    {/* 2. ZOHO (from Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center hover:opacity-90 transition-opacity"
                    >
                        <div className="flex items-center gap-1">
                            <span className="bg-[#e53935] text-white w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center font-black text-sm sm:text-base shadow-xs">
                                Z
                            </span>
                            <span className="bg-[#43a047] text-white w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center font-black text-sm sm:text-base shadow-xs">
                                O
                            </span>
                            <span className="bg-[#1e88e5] text-white w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center font-black text-sm sm:text-base shadow-xs">
                                H
                            </span>
                            <span className="bg-[#fbc02d] text-white w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center font-black text-sm sm:text-base shadow-xs">
                                O
                            </span>
                        </div>
                    </motion.div>

                    {/* Divider */}
                    <div className="hidden sm:block h-7 w-px bg-slate-200" />

                    {/* 3. TallyPrime (from Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-2 hover:opacity-90 transition-opacity"
                    >
                        <div className="w-6 h-6 sm:w-7 sm:h-7 grid grid-cols-2 gap-0.5 p-0.5 rounded-xs">
                            <div className="bg-[#0b5cff] rounded-[1px]"></div>
                            <div className="bg-[#eab308] rounded-[1px]"></div>
                            <div className="bg-[#38bdf8] rounded-[1px]"></div>
                            <div className="bg-[#f59e0b] rounded-[1px]"></div>
                        </div>
                        <div className="flex items-start">
                            <span className="text-base sm:text-lg font-bold text-[#0055a5] tracking-tight">
                                TallyPrime
                            </span>
                            <span className="text-[10px] text-[#0055a5] font-semibold ml-0.5 -mt-0.5">
                                &reg;
                            </span>
                        </div>
                    </motion.div>

                    {/* Divider */}
                    <div className="hidden sm:block h-7 w-px bg-slate-200" />

                    {/* 4. AI Solutions (from Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-2.5 hover:opacity-90 transition-opacity"
                    >
                        <div className="relative w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 flex flex-col items-center justify-center text-[#0052ff] shrink-0">
                            <svg
                                className="w-4.5 h-4.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <rect x="5" y="5" width="14" height="14" rx="2" strokeWidth={2} />
                                <path
                                    strokeLinecap="round"
                                    d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"
                                />
                            </svg>
                            <span className="text-[8px] font-black tracking-tighter absolute">
                                AI
                            </span>
                        </div>
                        <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                            AI Solutions
                        </span>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
