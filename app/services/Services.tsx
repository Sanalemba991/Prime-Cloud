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
                1. HERO / BANNER SECTION
            ========================================================================= */}
            <section className="relative w-full pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden bg-white border-b border-slate-100">
                {/* Background Glass / Ambient Layer */}
                <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden opacity-40">
                    <Image
                        src="/banner/Glass.png"
                        alt="Hero Ambient Glass"
                        fill
                        priority
                        className="object-cover object-right"
                    />
                </div>

                <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

                        {/* Left Column: Heading, Subtext, Buttons, Stats */}
                        <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-2">

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
                                className="text-[14px] sm:text-[15px] leading-relaxed text-[#475569] max-w-[480px] mb-7 font-normal"
                            >
                                We provide end-to-end ERP implementation, customisation, integration, and AI solutions to help businesses streamline operations, improve efficiency, and achieve sustainable growth.
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

                        {/* Right Column: Hero Laptop Mockup with Logos & Floating Badges */}
                        <motion.div
                            initial={{ opacity: 0, x: 80, scale: 0.96 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:col-span-6 relative flex items-center justify-center"
                        >
                            {/* Top-Right Handwritten Tag */}
                            <div className="absolute -top-6 right-2 sm:right-6 z-20 hidden sm:block text-right">
                                <span className="font-serif italic text-slate-500 text-sm sm:text-base font-medium tracking-wide">
                                    Smarter Systems. <br /> Stronger Business.
                                </span>
                            </div>

                            {/* Main Laptop & Desk Composition */}
                            <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 bg-gradient-to-br from-slate-100 to-slate-200">
                                <Image
                                    src="/banner/Bnn.png"
                                    alt="PrimeCloud Smart Technology Services"
                                    fill
                                    priority
                                    className="object-cover object-center"
                                />

                                {/* Overlay Brand Badges (Floating on Left of Laptop as shown in screenshot) */}
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-20">
                                    {/* Odoo pill */}
                                    <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-lg border border-slate-100 flex items-center justify-center hover:scale-105 transition-transform">
                                        <span className="text-[#714B67] font-extrabold text-sm tracking-tight">odoo</span>
                                    </div>
                                    {/* Zoho pill */}
                                    <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-1 hover:scale-105 transition-transform">
                                        <span className="bg-[#e53935] text-white w-4 h-4 rounded text-[9px] font-bold flex items-center justify-center">Z</span>
                                        <span className="bg-[#43a047] text-white w-4 h-4 rounded text-[9px] font-bold flex items-center justify-center">O</span>
                                        <span className="bg-[#1e88e5] text-white w-4 h-4 rounded text-[9px] font-bold flex items-center justify-center">H</span>
                                        <span className="bg-[#fbc02d] text-white w-4 h-4 rounded text-[9px] font-bold flex items-center justify-center">O</span>
                                    </div>
                                    {/* Tally pill */}
                                    <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-lg border border-slate-100 flex items-center justify-center hover:scale-105 transition-transform">
                                        <span className="text-[#0052ff] font-black italic text-xs tracking-wider">Tally</span>
                                    </div>
                                    {/* AI / Tech icon */}
                                    <div className="bg-white/95 backdrop-blur-md w-10 h-10 rounded-xl shadow-lg border border-slate-100 flex items-center justify-center text-[#0052ff] hover:scale-105 transition-transform self-center">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>


            {/* =========================================================================
                2. OUR CORE SERVICES SECTION (5 Cards Layout)
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
                            <span>— OUR EXPERTISE</span>
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
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative bg-[#fdfdfd] rounded-2xl border border-slate-200/90 p-6 sm:p-7 hover:shadow-xl transition-all duration-300 hover:border-blue-200 flex flex-col justify-between overflow-hidden"
                        >
                            {/* Ambient Top Glow */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />

                            <div>
                                {/* Header / Icon */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#714B67] flex items-center justify-center border border-purple-100">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                    <span className="text-xl font-black text-[#714B67] tracking-tight">odoo</span>
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
                                    Odoo ERP Implementation, <br className="hidden sm:block" />
                                    Customization &amp; Support
                                </h3>
                                <p className="text-xs sm:text-[13px] text-slate-600 mb-5 leading-relaxed">
                                    A powerful, flexible, and all-in-one ERP system tailored to manage your business operations seamlessly.
                                </p>

                                {/* Bullet list */}
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                                        <span className="w-4 h-4 rounded-full bg-blue-50 text-[#0052ff] flex items-center justify-center mt-0.5 shrink-0 text-[10px] font-bold">✓</span>
                                        <span>Full implementation &amp; system setup</span>
                                    </li>
                                    <li className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                                        <span className="w-4 h-4 rounded-full bg-blue-50 text-[#0052ff] flex items-center justify-center mt-0.5 shrink-0 text-[10px] font-bold">✓</span>
                                        <span>Custom modules &amp; app workflows</span>
                                    </li>
                                    <li className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                                        <span className="w-4 h-4 rounded-full bg-blue-50 text-[#0052ff] flex items-center justify-center mt-0.5 shrink-0 text-[10px] font-bold">✓</span>
                                        <span>Ongoing support &amp; maintenance</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Card Footer: Graphic Preview & Learn More */}
                            <div>
                                {/* Dashboard Graphic Mockup */}
                                <div className="relative w-full h-36 sm:h-44 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-50 mb-4 shadow-inner">
                                    <Image
                                        src="/banner/blue.png"
                                        alt="Odoo Dashboard System Preview"
                                        fill
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#0052ff] hover:text-[#003bb5] transition-colors group/link"
                                >
                                    <span>Learn More</span>
                                    <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                                </Link>
                            </div>
                        </motion.div>

                        {/* 2. Zoho Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative bg-[#fdfdfd] rounded-2xl border border-slate-200/90 p-6 sm:p-7 hover:shadow-xl transition-all duration-300 hover:border-blue-200 flex flex-col justify-between overflow-hidden"
                        >
                            {/* Ambient Top Glow */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

                            <div>
                                {/* Header / Icon */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center border border-red-100">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center gap-1 font-black">
                                        <span className="bg-[#e53935] text-white w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center">Z</span>
                                        <span className="bg-[#43a047] text-white w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center">O</span>
                                        <span className="bg-[#1e88e5] text-white w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center">H</span>
                                        <span className="bg-[#fbc02d] text-white w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center">O</span>
                                    </div>
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
                                    Zoho Software Implementation <br className="hidden sm:block" />
                                    &amp; Customization
                                </h3>
                                <p className="text-xs sm:text-[13px] text-slate-600 mb-5 leading-relaxed">
                                    Cost-effective cloud solutions to manage your sales, marketing, finance, and operations.
                                </p>

                                {/* Bullet list */}
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                                        <span className="w-4 h-4 rounded-full bg-blue-50 text-[#0052ff] flex items-center justify-center mt-0.5 shrink-0 text-[10px] font-bold">✓</span>
                                        <span>Zoho CRM, Books, People &amp; more</span>
                                    </li>
                                    <li className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                                        <span className="w-4 h-4 rounded-full bg-blue-50 text-[#0052ff] flex items-center justify-center mt-0.5 shrink-0 text-[10px] font-bold">✓</span>
                                        <span>Workflow automation &amp; customisation</span>
                                    </li>
                                    <li className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                                        <span className="w-4 h-4 rounded-full bg-blue-50 text-[#0052ff] flex items-center justify-center mt-0.5 shrink-0 text-[10px] font-bold">✓</span>
                                        <span>Training &amp; ongoing support</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Card Footer: Graphic Preview & Learn More */}
                            <div>
                                {/* Dashboard Graphic Mockup */}
                                <div className="relative w-full h-36 sm:h-44 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-50 mb-4 shadow-inner">
                                    <Image
                                        src="/about/office.jpg"
                                        alt="Zoho Cloud System Preview"
                                        fill
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#0052ff] hover:text-[#003bb5] transition-colors group/link"
                                >
                                    <span>Learn More</span>
                                    <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                                </Link>
                            </div>
                        </motion.div>

                    </div>


                    {/* BOTTOM ROW: 3 Smaller Cards (Tally, AI Automation, Database Integration) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* 3. Tally Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative bg-[#fdfdfd] rounded-2xl border border-slate-200/90 p-5 sm:p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-200 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-3.5">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0052ff] flex items-center justify-center font-bold text-xs">
                                        03
                                    </div>
                                    <span className="text-[#0052ff] font-black italic text-base">Tally</span>
                                </div>

                                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                                    Tally Implementation &amp; Support
                                </h3>
                                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                                    Simplify accounting, taxation, and financial management with Tally.
                                </p>

                                <ul className="space-y-1.5 mb-5">
                                    <li className="flex items-start gap-2 text-xs text-slate-700">
                                        <span className="text-[#0052ff] font-bold">✓</span>
                                        <span>Tally Prime setup &amp; customisation</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-xs text-slate-700">
                                        <span className="text-[#0052ff] font-bold">✓</span>
                                        <span>Data migration &amp; upgrade</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-xs text-slate-700">
                                        <span className="text-[#0052ff] font-bold">✓</span>
                                        <span>Training &amp; support</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                {/* Mini Graphic Mockup */}
                                <div className="relative w-full h-24 rounded-lg overflow-hidden border border-slate-200/80 bg-slate-50 mb-3.5">
                                    <Image
                                        src="/about/about-cards.png"
                                        alt="Tally Chart Preview"
                                        fill
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052ff] hover:text-[#003bb5] transition-colors group/link"
                                >
                                    <span>Learn More</span>
                                    <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                                </Link>
                            </div>
                        </motion.div>

                        {/* 4. AI Solutions & Automation Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative bg-[#0d1b3e] text-white rounded-2xl border border-blue-900/60 p-5 sm:p-6 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                        >
                            {/* Ambient Glow */}
                            <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

                            <div>
                                <div className="flex items-center justify-between mb-3.5">
                                    <div className="w-8 h-8 rounded-lg bg-white/10 text-blue-300 flex items-center justify-center font-bold text-xs">
                                        04
                                    </div>
                                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                </div>

                                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                                    AI Solutions &amp; <br />
                                    Business Process Automation
                                </h3>
                                <p className="text-xs text-blue-100/80 mb-4 leading-relaxed">
                                    Leverage AI to automate repetitive tasks, reduce manual errors, and scale operations smartly.
                                </p>

                                <ul className="space-y-1.5 mb-5">
                                    <li className="flex items-start gap-2 text-xs text-blue-100">
                                        <span className="text-blue-400 font-bold">✓</span>
                                        <span>AI-powered workflows</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-xs text-blue-100">
                                        <span className="text-blue-400 font-bold">✓</span>
                                        <span>Chatbot &amp; NLP automation</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-xs text-blue-100">
                                        <span className="text-blue-400 font-bold">✓</span>
                                        <span>Process automation &amp; optimization</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                {/* Futuristic AI Wave Graphic */}
                                <div className="relative w-full h-24 rounded-lg overflow-hidden border border-blue-500/30 bg-blue-950/40 mb-3.5 flex items-center justify-center">
                                    <Image
                                        src="/banner/Glass.png"
                                        alt="AI Process Neural Grid"
                                        fill
                                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] via-transparent to-transparent" />
                                    <span className="relative z-10 text-[11px] font-mono tracking-widest text-blue-200 uppercase bg-blue-900/60 px-2 py-0.5 rounded border border-blue-400/30">
                                        AI ENGINE ACTIVE
                                    </span>
                                </div>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-white transition-colors group/link"
                                >
                                    <span>Learn More</span>
                                    <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                                </Link>
                            </div>
                        </motion.div>

                        {/* 5. Software Integration & Cloud Consulting Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative bg-[#0b4dbf] text-white rounded-2xl border border-blue-400/30 p-5 sm:p-6 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                        >
                            {/* Ambient Glow */}
                            <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                            <div>
                                <div className="flex items-center justify-between mb-3.5">
                                    <div className="w-8 h-8 rounded-lg bg-white/15 text-white flex items-center justify-center font-bold text-xs">
                                        05
                                    </div>
                                    <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-white">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
                                        </svg>
                                    </div>
                                </div>

                                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                                    Software Integration, <br />
                                    Data Migration &amp; Consulting
                                </h3>
                                <p className="text-xs text-blue-100/85 mb-4 leading-relaxed">
                                    Connect your business systems, improve data accuracy, and get expert guidance for a smooth digital transformation.
                                </p>

                                <ul className="space-y-1.5 mb-5">
                                    <li className="flex items-start gap-2 text-xs text-blue-100">
                                        <span className="text-white font-bold">✓</span>
                                        <span>System &amp; API Integration (third-party)</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-xs text-blue-100">
                                        <span className="text-white font-bold">✓</span>
                                        <span>Safe data transfer &amp; cleanup</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-xs text-blue-100">
                                        <span className="text-white font-bold">✓</span>
                                        <span>IT consulting &amp; strategy</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                {/* Cloud Integration Graphic */}
                                <div className="relative w-full h-24 rounded-lg overflow-hidden border border-white/20 bg-blue-800/50 mb-3.5 flex items-center justify-center">
                                    <Image
                                        src="/banner/Minimalist Blue Gradient with Abstract Curves.png"
                                        alt="Cloud Data Integration"
                                        fill
                                        className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b4dbf] via-transparent to-transparent" />
                                    <div className="relative z-10 flex items-center gap-1.5 text-white text-xs font-semibold">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
                                        </svg>
                                        <span>Cloud API Sync</span>
                                    </div>
                                </div>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-blue-100 transition-colors group/link"
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
                3. WHY CHOOSE PRIME CLOUD SECTION (Building Photo + 4 Key Value Pillars)
            ========================================================================= */}
            <section className="w-full py-16 lg:py-20 bg-slate-50 border-t border-b border-slate-200/70">
                <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

                        {/* Left Column: Glass Modern Office Building Graphic */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:col-span-5 relative"
                        >
                            <div className="relative w-full h-[280px] sm:h-[340px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
                                <Image
                                    src="/about/office.jpg"
                                    alt="Prime Cloud Headquarters Building"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b]/80 via-[#0b132b]/20 to-transparent" />

                                {/* Floating Quote Box inside photo */}
                                <div className="absolute top-5 right-5 text-right">
                                    <span className="inline-block px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-medium text-xs border border-white/30">
                                        Your Success <br /> is Our Priority
                                    </span>
                                </div>

                                {/* Logo / Name Tag at bottom */}
                                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#0052ff] flex items-center justify-center text-white font-black text-lg shadow-md">
                                        P
                                    </div>
                                    <div className="text-white">
                                        <h4 className="font-bold text-sm tracking-tight leading-none mb-1">Prime Cloud Solutions</h4>
                                        <p className="text-[11px] text-blue-200 font-normal">Technology &amp; ERP Partner</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Title + 4 Grid Feature Cards */}
                        <div className="lg:col-span-7">

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.8 }}
                                className="mb-8"
                            >
                                <h2 className="text-2xl sm:text-3xl font-black text-[#0b132b] tracking-tight mb-2">
                                    Why Choose Prime Cloud?
                                </h2>
                                <p className="text-slate-600 text-xs sm:text-sm max-w-lg">
                                    We go beyond implementation — we build long-term partnerships with our clients.
                                </p>
                            </motion.div>

                            {/* 4 Feature Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                                {/* Feature 1 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.7, delay: 0.1 }}
                                    className="bg-white p-4.5 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all hover:-translate-y-0.5"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0052ff] flex items-center justify-center mb-3">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-sm mb-1">Expert Team</h4>
                                    <p className="text-slate-500 text-xs leading-relaxed">
                                        Rich domain knowledge and certified technical professionals.
                                    </p>
                                </motion.div>

                                {/* Feature 2 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    className="bg-white p-4.5 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all hover:-translate-y-0.5"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0052ff] flex items-center justify-center mb-3">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-sm mb-1">Tailored Solutions</h4>
                                    <p className="text-slate-500 text-xs leading-relaxed">
                                        Designed precisely for your unique business workflows.
                                    </p>
                                </motion.div>

                                {/* Feature 3 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.7, delay: 0.3 }}
                                    className="bg-white p-4.5 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all hover:-translate-y-0.5"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0052ff] flex items-center justify-center mb-3">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-sm mb-1">On-Time Delivery</h4>
                                    <p className="text-slate-500 text-xs leading-relaxed">
                                        Agile approach with committed delivery timelines.
                                    </p>
                                </motion.div>

                                {/* Feature 4 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.7, delay: 0.4 }}
                                    className="bg-white p-4.5 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all hover:-translate-y-0.5"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0052ff] flex items-center justify-center mb-3">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-sm mb-1">Reliable 24/7 Support</h4>
                                    <p className="text-slate-500 text-xs leading-relaxed">
                                        Dedicated post-launch helpdesk &amp; IT consultancy.
                                    </p>
                                </motion.div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* =========================================================================
                4. A SIMPLE 4-STEP IMPLEMENTATION JOURNEY
            ========================================================================= */}
            <section className="w-full py-16 lg:py-20 bg-white">
                <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">

                    {/* Header */}
                    <div className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.7 }}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052ff] uppercase tracking-wider mb-2"
                        >
                            <span>— OUR PROCESS</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-2xl sm:text-3xl font-black text-[#0b132b] tracking-tight mb-2"
                        >
                            A Simple 4-Step Implementation Journey
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-slate-600 text-xs sm:text-sm max-w-xl"
                        >
                            From initial consult to ongoing support, our structured approach makes your digital transformation effortless and risk-free.
                        </motion.p>
                    </div>

                    {/* 4 Process Horizontal Steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">

                        {/* Step 1: Discover */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="relative bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all"
                        >
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052ff] flex items-center justify-center mb-4">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <span className="text-[11px] font-bold text-[#0052ff] uppercase tracking-wider">01</span>
                            <h3 className="text-base font-bold text-slate-900 mt-0.5 mb-2">Discover</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Understand your business needs and bottlenecks.
                            </p>
                        </motion.div>

                        {/* Step 2: Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all"
                        >
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052ff] flex items-center justify-center mb-4">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <span className="text-[11px] font-bold text-[#0052ff] uppercase tracking-wider">02</span>
                            <h3 className="text-base font-bold text-slate-900 mt-0.5 mb-2">Plan</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Design the right solution, map processes, and set milestones.
                            </p>
                        </motion.div>

                        {/* Step 3: Implement */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="relative bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all"
                        >
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052ff] flex items-center justify-center mb-4">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <span className="text-[11px] font-bold text-[#0052ff] uppercase tracking-wider">03</span>
                            <h3 className="text-base font-bold text-slate-900 mt-0.5 mb-2">Implement</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Configure, customize, migrate data, and test thoroughly.
                            </p>
                        </motion.div>

                        {/* Step 4: Optimize */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="relative bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all"
                        >
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052ff] flex items-center justify-center mb-4">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <span className="text-[11px] font-bold text-[#0052ff] uppercase tracking-wider">04</span>
                            <h3 className="text-base font-bold text-slate-900 mt-0.5 mb-2">Optimize</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Train your team, launch, monitor performance, and provide continuous support.
                            </p>
                        </motion.div>

                    </div>

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
