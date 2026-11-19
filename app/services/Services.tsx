"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, animate } from "framer-motion";

function Counter({ value, suffix = "", duration = 2.2 }: { value: number; suffix?: string; duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: false, amount: 0.2 });

    useEffect(() => {
        if (!inView) return;
        const node = ref.current;
        if (!node) return;

        const controls = animate(0, value, {
            duration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate(latest) {
                node.textContent = Math.round(latest) + suffix;
            },
        });

        return () => controls.stop();
    }, [inView, value, suffix, duration]);

    return <span ref={ref}>0{suffix}</span>;
}

export default function Services() {
    return (
        <div className="w-full bg-[#f8fafc]/40 text-slate-800 select-none overflow-hidden font-sans">

            {/* =========================================================================
                1. HERO / BANNER SECTION (Full Background Image)
            ========================================================================= */}
            <section className="relative w-full pt-12 pb-16 sm:pb-20 lg:py-24 bg-white overflow-hidden select-none">
                {/* Full Banner Background Artwork */}
                <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
                    <Image
                        src="/banner/Right-Aligned Odoo Dashboard Workspace.png"
                        alt="Services Hero Banner Background"
                        fill
                        priority
                        className="object-cover object-right"
                    />
                </div>

                <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

                        {/* Left Column: Heading, Subtext, Buttons, Stats */}
                        <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-4">

                            {/* Pill / Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f1fd] mb-5 text-[12px] font-semibold text-[#0052ff] tracking-tight shadow-xs"
                            >
                                <span>Our Services</span>
                            </motion.div>

                            {/* Main Heading */}
                            <motion.h1
                                initial={{ opacity: 0, x: -70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="text-[36px] sm:text-[46px] lg:text-[50px] font-black tracking-tight leading-[1.12] text-[#0b132b] mb-4"
                            >
                                Powering Your Business <br />
                                with <span className="text-[#0052ff]">Smart Technology</span>
                            </motion.h1>

                            {/* Paragraph */}
                            <motion.p
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="text-[14px] sm:text-[15px] leading-relaxed text-[#475569] max-w-[500px] mb-7 font-normal"
                            >
                                We deliver ERP and AI solutions that streamline operations, improve efficiency, and drive business growth.
                            </motion.p>

                            {/* Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-wrap items-center gap-3.5 mb-10"
                            >
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#0052ff] hover:bg-[#0045d8] text-white font-semibold text-[13.5px] shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                                >
                                    <span>Book a Free Consultation</span>
                                    <span className="text-base leading-none">&rarr;</span>
                                </Link>

                                <a
                                    href="#core-services"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-semibold text-[13.5px] border border-slate-300 transition-all hover:border-slate-400 hover:-translate-y-0.5"
                                >
                                    <span>Explore Our Services</span>
                                </a>
                            </motion.div>

                            {/* Stats Counter Row */}
                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="grid grid-cols-3 gap-6 sm:gap-10 pt-4 border-t border-slate-200/80 w-full max-w-[460px]"
                            >
                                <div>
                                    <h4 className="text-2xl sm:text-3xl font-extrabold text-[#0b132b] tracking-tight">
                                        <Counter value={5} suffix="+" />
                                    </h4>
                                    <p className="text-[12px] text-slate-500 font-medium mt-0.5">Years Experience</p>
                                </div>
                                <div>
                                    <h4 className="text-2xl sm:text-3xl font-extrabold text-[#0b132b] tracking-tight">
                                        <Counter value={100} suffix="+" />
                                    </h4>
                                    <p className="text-[12px] text-slate-500 font-medium mt-0.5">Satisfied Clients</p>
                                </div>
                                <div>
                                    <h4 className="text-2xl sm:text-3xl font-extrabold text-[#0b132b] tracking-tight">
                                        <Counter value={50} suffix="+" />
                                    </h4>
                                    <p className="text-[12px] text-slate-500 font-medium mt-0.5">Projects Delivered</p>
                                </div>
                            </motion.div>

                        </div>

                        {/* Right Column: Spacing for the right side of the background image */}
                        <div className="lg:col-span-5 hidden lg:block" />

                    </div>
                </div>
            </section>


            {/* =========================================================================
                2. OUR CORE SERVICES SECTION (5 Cards Layout Matching Reference Image)
            ========================================================================= */}
            <section id="core-services" className="w-full py-16 lg:py-24 bg-white relative">
                <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">

                    {/* Section Header */}
                    <div className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.7 }}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052ff] uppercase tracking-wider mb-2"
                        >
                            <span>— OUR SERVICES</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-3xl sm:text-4xl font-black text-[#0b132b] tracking-tight mb-2.5"
                        >
                            Our Core Services
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-slate-600 text-sm sm:text-base max-w-xl"
                        >
                            Tailored technology solutions to streamline your operations and drive growth.
                        </motion.p>
                    </div>

                    {/* TOP ROW: 2 Large Cards (Odoo & Zoho) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

                        {/* 1. Odoo Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative bg-[#fbfcfe] rounded-2xl border border-slate-200/90 p-6 sm:p-7 hover:shadow-xl transition-all duration-300 hover:border-blue-200 flex flex-col justify-between overflow-hidden min-h-[260px] sm:min-h-[275px]"
                        >
                            {/* Card Background Image */}
                            <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
                                <Image
                                    src="/service/odoo.png"
                                    alt="Odoo Service Background"
                                    fill
                                    className="object-cover object-right group-hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>

                            <div className="relative z-10 max-w-[53%] flex flex-col justify-between h-full">
                                <div>
                                    <div className="w-8 h-8 rounded-lg border border-blue-200 bg-white/95 backdrop-blur-xs text-[#0052ff] flex items-center justify-center font-bold text-xs mb-2.5 shadow-2xs">
                                        01
                                    </div>

                                    <h3 className="text-base sm:text-[17px] font-bold text-slate-900 mb-1.5 leading-snug">
                                        Odoo ERP Implementation, <br className="hidden sm:block" />
                                        Customization &amp; Support
                                    </h3>
                                    <p className="text-xs sm:text-[12.5px] text-slate-600 mb-3.5 leading-relaxed font-normal">
                                        Powerful, flexible, and open-source ERP to manage your business end-to-end.
                                    </p>

                                    <ul className="space-y-1.5 mb-4">
                                        <li className="flex items-start gap-2 text-xs sm:text-[12.5px] text-slate-700">
                                            <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px] shrink-0 font-bold mt-0.5">✓</span>
                                            <span>Full implementation &amp; setup</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs sm:text-[12.5px] text-slate-700">
                                            <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px] shrink-0 font-bold mt-0.5">✓</span>
                                            <span>Custom modules &amp; workflows</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs sm:text-[12.5px] text-slate-700">
                                            <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px] shrink-0 font-bold mt-0.5">✓</span>
                                            <span>Ongoing support &amp; maintenance</span>
                                        </li>
                                    </ul>
                                </div>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#0052ff] hover:text-[#003bb5] transition-colors group/link mt-1"
                                >
                                    <span>Learn More</span>
                                    <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                                </Link>
                            </div>
                        </motion.div>

                        {/* 2. Zoho Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative bg-[#fbfcfe] rounded-2xl border border-slate-200/90 p-6 sm:p-7 hover:shadow-xl transition-all duration-300 hover:border-blue-200 flex flex-col justify-between overflow-hidden min-h-[260px] sm:min-h-[275px]"
                        >
                            {/* Card Background Image */}
                            <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
                                <Image
                                    src="/service/zoho.png"
                                    alt="Zoho Service Background"
                                    fill
                                    className="object-cover object-right group-hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>

                            <div className="relative z-10 max-w-[53%] flex flex-col justify-between h-full">
                                <div>
                                    <div className="w-8 h-8 rounded-lg border border-blue-200 bg-white/95 backdrop-blur-xs text-[#0052ff] flex items-center justify-center font-bold text-xs mb-2.5 shadow-2xs">
                                        02
                                    </div>

                                    <h3 className="text-base sm:text-[17px] font-bold text-slate-900 mb-1.5 leading-snug">
                                        Zoho Software Implementation <br className="hidden sm:block" />
                                        &amp; Customization
                                    </h3>
                                    <p className="text-xs sm:text-[12.5px] text-slate-600 mb-3.5 leading-relaxed font-normal">
                                        Flexible cloud solutions to manage your sales, marketing, finance and more.
                                    </p>

                                    <ul className="space-y-1.5 mb-4">
                                        <li className="flex items-start gap-2 text-xs sm:text-[12.5px] text-slate-700">
                                            <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px] shrink-0 font-bold mt-0.5">✓</span>
                                            <span>Zoho CRM, Books, People &amp; more</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs sm:text-[12.5px] text-slate-700">
                                            <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px] shrink-0 font-bold mt-0.5">✓</span>
                                            <span>Workflow automation &amp; customization</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs sm:text-[12.5px] text-slate-700">
                                            <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px] shrink-0 font-bold mt-0.5">✓</span>
                                            <span>Training &amp; ongoing support</span>
                                        </li>
                                    </ul>
                                </div>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#0052ff] hover:text-[#003bb5] transition-colors group/link mt-1"
                                >
                                    <span>Learn More</span>
                                    <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                                </Link>
                            </div>
                        </motion.div>

                    </div>


                    {/* BOTTOM ROW: 3 Cards (Tally, AI Automation, Database Integration) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* 3. Tally Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative bg-[#fbfcfe] rounded-2xl border border-slate-200/90 p-5 sm:p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-200 flex flex-col justify-between overflow-hidden min-h-[250px] sm:min-h-[265px]"
                        >
                            {/* Card Background Image */}
                            <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
                                <Image
                                    src="/service/tallly.png"
                                    alt="Tally Service Background"
                                    fill
                                    className="object-cover object-right group-hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>

                            <div className="relative z-10 max-w-[58%] flex flex-col justify-between h-full">
                                <div>
                                    <div className="w-7 h-7 rounded-md border border-blue-200 bg-white/95 backdrop-blur-xs text-[#0052ff] flex items-center justify-center font-bold text-[11px] mb-2 shadow-2xs">
                                        03
                                    </div>

                                    <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 mb-1.5 leading-snug">
                                        Tally Implementation &amp; Support
                                    </h3>
                                    <p className="text-[11px] sm:text-xs text-slate-600 mb-3 leading-relaxed font-normal">
                                        Simplify accounting, taxation, and financial management with Tally.
                                    </p>

                                    <ul className="space-y-1.5 mb-3.5">
                                        <li className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-700">
                                            <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px] shrink-0 font-bold mt-0.5">✓</span>
                                            <span>Tally Prime setup &amp; customization</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-700">
                                            <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px] shrink-0 font-bold mt-0.5">✓</span>
                                            <span>Data migration &amp; backup</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-700">
                                            <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px] shrink-0 font-bold mt-0.5">✓</span>
                                            <span>Training &amp; support</span>
                                        </li>
                                    </ul>
                                </div>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1.5 text-[11.5px] sm:text-xs font-bold text-[#0052ff] hover:text-[#003bb5] transition-colors group/link mt-1"
                                >
                                    <span>Learn More</span>
                                    <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                                </Link>
                            </div>
                        </motion.div>

                        {/* 4. AI Solutions & Automation Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative bg-[#fbfcfe] rounded-2xl border border-slate-200/90 p-5 sm:p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-200 flex flex-col justify-between overflow-hidden min-h-[250px] sm:min-h-[265px]"
                        >
                            {/* Card Background Image */}
                            <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
                                <Image
                                    src="/service/AII.png"
                                    alt="AI Solutions Background"
                                    fill
                                    className="object-cover object-right group-hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>

                            <div className="relative z-10 max-w-[58%] flex flex-col justify-between h-full">
                                <div>
                                    <div className="w-7 h-7 rounded-md border border-blue-200 bg-white/95 backdrop-blur-xs text-[#0052ff] flex items-center justify-center font-bold text-[11px] mb-2 shadow-2xs">
                                        04
                                    </div>

                                    <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 mb-1.5 leading-snug">
                                        AI Solutions &amp; <br />
                                        Process Automation
                                    </h3>
                                    <p className="text-[11px] sm:text-xs text-slate-600 mb-3 leading-relaxed font-normal">
                                        Leverage AI to automate repetitive tasks and boost productivity.
                                    </p>

                                    <ul className="space-y-1.5 mb-3.5">
                                        <li className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-700">
                                            <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px] shrink-0 font-bold mt-0.5">✓</span>
                                            <span>AI-powered workflows</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-700">
                                            <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px] shrink-0 font-bold mt-0.5">✓</span>
                                            <span>Chatbots &amp; intelligent tools</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-700">
                                            <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px] shrink-0 font-bold mt-0.5">✓</span>
                                            <span>Process optimization</span>
                                        </li>
                                    </ul>
                                </div>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1.5 text-[11.5px] sm:text-xs font-bold text-[#0052ff] hover:text-[#003bb5] transition-colors group/link mt-1"
                                >
                                    <span>Learn More</span>
                                    <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                                </Link>
                            </div>
                        </motion.div>

                        {/* 5. Software Integration & Cloud Consulting Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative bg-[#fbfcfe] rounded-2xl border border-slate-200/90 p-5 sm:p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-200 flex flex-col justify-between overflow-hidden min-h-[250px] sm:min-h-[265px]"
                        >
                            {/* Card Background Image */}
                            <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
                                <Image
                                    src="/service/clo.png"
                                    alt="Software Integration Background"
                                    fill
                                    className="object-cover object-right group-hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>

                            <div className="relative z-10 max-w-[58%] flex flex-col justify-between h-full">
                                <div>
                                    <div className="w-7 h-7 rounded-md border border-blue-200 bg-white/95 backdrop-blur-xs text-[#0052ff] flex items-center justify-center font-bold text-[11px] mb-2 shadow-2xs">
                                        05
                                    </div>

                                    <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 mb-1.5 leading-snug">
                                        Software Integration &amp; <br />
                                        Data Migration
                                    </h3>
                                    <p className="text-[11px] sm:text-xs text-slate-600 mb-3 leading-relaxed font-normal">
                                        Connect systems and migrate data securely for a future-ready IT infrastructure.
                                    </p>

                                    <ul className="space-y-1.5 mb-3.5">
                                        <li className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-700">
                                            <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px] shrink-0 font-bold mt-0.5">✓</span>
                                            <span>System integration (APIs)</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-700">
                                            <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px] shrink-0 font-bold mt-0.5">✓</span>
                                            <span>Data migration &amp; transfer</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-700">
                                            <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px] shrink-0 font-bold mt-0.5">✓</span>
                                            <span>IT consulting &amp; strategy</span>
                                        </li>
                                    </ul>
                                </div>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1.5 text-[11.5px] sm:text-xs font-bold text-[#0052ff] hover:text-[#003bb5] transition-colors group/link mt-1"
                                >
                                    <span>Learn More</span>
                                    <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                                </Link>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </section>


            {/* =========================================================================
                3. WHY CHOOSE PRIME CLOUD SECTION (Full-Width Banner with Background Image)
            ========================================================================= */}
            <section className="w-full py-12 lg:py-16 bg-white">
                <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">

                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full  overflow-hidden rounded-lg min-h-[220px] sm:min-h-[240px] lg:min-h-[260px] flex items-center p-6 sm:p-8 lg:p-10"
                    >
                        {/* Background Image of the Section */}
                        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
                            <Image
                                src="/service/glassa.png"
                                alt="Why Choose Prime Cloud Background"
                                fill
                                priority
                                className="object-cover object-left lg:object-center"
                            />
                        </div>

                        {/* Content Overlay on the Right Half of the Banner */}
                        <div className="relative z-10 w-full lg:w-[56%] xl:w-[52%] ml-auto flex flex-col justify-center pl-0 sm:pl-4 lg:pl-6 pr-2 sm:pr-4">
                            <h2 className="text-xl sm:text-2xl lg:text-[24px] font-black text-[#0b132b] tracking-tight mb-1.5 leading-snug">
                                Why Choose Prime Cloud?
                            </h2>
                            <p className="text-xs sm:text-[13px] text-slate-600 mb-5 font-normal leading-relaxed max-w-lg">
                                We go beyond implementation — we build long-term partnerships with our clients.
                            </p>

                            {/* 4 Feature Items in a Row with Dividers */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 pt-1.5">
                                {/* Item 1 */}
                                <div className="flex flex-col items-start pr-2">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0052ff] flex items-center justify-center mb-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                                        Expert Team
                                    </h4>
                                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                                        &amp; Domain Knowledge
                                    </p>
                                </div>

                                {/* Item 2 */}
                                <div className="flex flex-col items-start sm:border-l sm:border-slate-200/80 sm:px-2.5">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0052ff] flex items-center justify-center mb-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                                        Tailored Solutions
                                    </h4>
                                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                                        for Your Business
                                    </p>
                                </div>

                                {/* Item 3 */}
                                <div className="flex flex-col items-start sm:border-l sm:border-slate-200/80 sm:px-2.5">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0052ff] flex items-center justify-center mb-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                                        On-Time Delivery
                                    </h4>
                                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                                        &amp; Dedicated Support
                                    </p>
                                </div>

                                {/* Item 4 */}
                                <div className="flex flex-col items-start sm:border-l sm:border-slate-200/80 sm:pl-2.5">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0052ff] flex items-center justify-center mb-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                                        Scalable
                                    </h4>
                                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                                        &amp; Future-Ready
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>


            {/* =========================================================================
                4. A SIMPLE 4-STEP IMPLEMENTATION JOURNEY
            ========================================================================= */}
            <section className="w-full py-6 lg:py-8 bg-white">
                <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">

                    {/* Single unified card container like the design */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full rounded-2xl bg-[#f8fbff] border border-blue-100/70 py-5 px-6 sm:py-6 sm:px-8 lg:px-9 shadow-sm"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">

                            {/* Left Column: Heading & Subtitle */}
                            <div className="lg:col-span-4 xl:col-span-4 pr-0 lg:pr-5 lg:border-r lg:border-slate-200/80">
                                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0052ff] uppercase tracking-wider mb-1.5">
                                    <span>— OUR PROCESS</span>
                                </div>
                                <h2 className="text-lg sm:text-xl lg:text-[22px] font-black text-[#0b132b] tracking-tight mb-1.5 leading-snug">
                                    A Simple 4-Step Implementation Journey
                                </h2>
                                <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed max-w-xs">
                                    From consultation to ongoing support, we make your digital transformation smooth and hassle-free.
                                </p>
                            </div>

                            {/* Right Column: 4 Process Steps in a Flow with Chevron Arrows */}
                            <div className="lg:col-span-8 xl:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-1.5 items-start">

                                {/* Step 1: Discover */}
                                <div className="relative flex flex-col items-start pr-2 sm:pr-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50/90 text-[#0052ff] flex items-center justify-center mb-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] font-bold text-[#0052ff] tracking-wider mb-0.5">01</span>
                                    <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight mb-1">
                                        Discover
                                    </h3>
                                    <p className="text-[10.5px] text-slate-500 leading-normal">
                                        Understand your business needs and goals.
                                    </p>

                                    {/* Arrow for desktop */}
                                    <div className="hidden sm:flex absolute right-0 top-1/3 -translate-y-1/2 text-slate-300">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Step 2: Plan */}
                                <div className="relative flex flex-col items-start sm:px-2.5 lg:px-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50/90 text-[#0052ff] flex items-center justify-center mb-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] font-bold text-[#0052ff] tracking-wider mb-0.5">02</span>
                                    <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight mb-1">
                                        Plan
                                    </h3>
                                    <p className="text-[10.5px] text-slate-500 leading-normal">
                                        Design the right solution and roadmap.
                                    </p>

                                    {/* Arrow for desktop */}
                                    <div className="hidden sm:flex absolute right-0 top-1/3 -translate-y-1/2 text-slate-300">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Step 3: Implement */}
                                <div className="relative flex flex-col items-start sm:px-2.5 lg:px-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50/90 text-[#0052ff] flex items-center justify-center mb-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] font-bold text-[#0052ff] tracking-wider mb-0.5">03</span>
                                    <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight mb-1">
                                        Implement
                                    </h3>
                                    <p className="text-[10.5px] text-slate-500 leading-normal">
                                        Configure, customize, and deploy.
                                    </p>

                                    {/* Arrow for desktop */}
                                    <div className="hidden sm:flex absolute right-0 top-1/3 -translate-y-1/2 text-slate-300">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Step 4: Optimize */}
                                <div className="flex flex-col items-start sm:pl-2.5 lg:pl-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50/90 text-[#0052ff] flex items-center justify-center mb-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] font-bold text-[#0052ff] tracking-wider mb-0.5">04</span>
                                    <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight mb-1">
                                        Optimize
                                    </h3>
                                    <p className="text-[10.5px] text-slate-500 leading-normal">
                                        Ensure adoption, performance, and growth.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </motion.div>

                </div>
            </section>


            {/* =========================================================================
                5. BOTTOM CTA BANNER (Let's Build Your Smarter Tomorrow)
            ========================================================================= */}
            <section className="w-full pb-20 bg-white">
                <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                        className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-7 sm:p-9 lg:px-12 lg:py-8 shadow-[0_12px_32px_rgba(0,82,255,0.18)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                    >
                        {/* Background Artwork */}
                        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
                            <Image
                                src="/banner/cta-banner.png"
                                alt="Services CTA Background"
                                fill
                                priority
                                className="object-fill w-full h-full"
                            />
                        </div>

                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="relative z-10 max-w-xl"
                        >
                            <span className="text-[11px] font-bold tracking-wider text-blue-200 uppercase mb-1 block">
                                GET IN TOUCH TODAY
                            </span>
                            <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black text-white tracking-tight leading-snug mb-2">
                                Let&apos;s Build Your Smarter Tomorrow
                            </h3>
                            <p className="text-xs sm:text-[13.5px] text-blue-100/90 font-normal leading-relaxed">
                                Schedule a free consultation to discuss how our technology solutions can streamline your operations and drive business growth.
                            </p>
                        </motion.div>

                        {/* Right Content / Button */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="relative z-10 shrink-0"
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-[#0052ff] hover:bg-blue-50 font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
                            >
                                <span>Book a Free Consultation</span>
                                <span className="text-base leading-none">&rarr;</span>
                            </Link>
                        </motion.div>

                    </motion.div>
                </div>
            </section>

        </div>
    );
}
