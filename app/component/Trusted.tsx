"use client";

import React from "react";
import Image from "next/image";
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

                    {/* 1. Odoo */}
                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center hover:opacity-90 transition-opacity"
                    >
                        <Image
                            src="/logo/odoo.webp"
                            alt="Odoo Logo"
                            width={160}
                            height={55}
                            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                        />
                    </motion.div>

                    {/* Divider */}
                    <div className="hidden sm:block h-9 w-px bg-slate-200" />

                    {/* 2. ZOHO */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center hover:opacity-90 transition-opacity"
                    >
                        <Image
                            src="/logo/zoho2.webp"
                            alt="Zoho Logo"
                            width={160}
                            height={55}
                            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                        />
                    </motion.div>

                    {/* Divider */}
                    <div className="hidden sm:block h-9 w-px bg-slate-200" />

                    {/* 3. TallyPrime */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center hover:opacity-90 transition-opacity"
                    >
                        <Image
                            src="/logo/tally.png"
                            alt="Tally Logo"
                            width={160}
                            height={55}
                            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                        />
                    </motion.div>

                    {/* Divider */}
                    <div className="hidden sm:block h-9 w-px bg-slate-200" />

                    {/* 4. AI Solutions */}
                    <motion.div
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center hover:opacity-90 transition-opacity"
                    >
                        <Image
                            src="/logo/AI.png"
                            alt="AI Solutions Logo"
                            width={160}
                            height={55}
                            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
