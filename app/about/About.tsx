"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
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

export default function About() {
    return (
        <div className="w-full bg-white select-none overflow-hidden">

            {/* ================= 1. HERO / BANNER SECTION ================= */}
            <section className="relative w-full pt-12 pb-16 sm:pb-20 lg:py-24 bg-white overflow-hidden select-none">
                {/* Background Image Layer */}
                <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
                    {/* Mobile Background Image */}
                    <Image
                        src="/banner/Prime Cloud Solutions Glass Banner.png"
                        alt="About Banner Background Mobile"
                        fill
                        priority
                        className="block sm:hidden object-cover object-right"
                    />
                    {/* Desktop / Tablet Background Image */}
                    <Image
                        src="/banner/Glass.png"
                        alt="About Banner Background Aura"
                        fill
                        priority
                        className="hidden sm:block object-cover object-right"
                    />
                </div>

                <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

                        {/* Left Column: Headings & Buttons (Enters from Left) */}
                        <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4">
                            {/* Pill Tag */}
                            <motion.div
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                                className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#e8f1fd] text-[12px] font-bold text-[#0052ff] mb-5 tracking-tight shadow-2xs"
                            >
                                About Us
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0f172a] tracking-tight leading-[1.16] mb-5"
                            >
                                Powering Businesses <br />
                                with ERP, Software <br />
                                and <span className="text-[#0052ff]">AI Solutions</span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="text-[12px] sm:text-sm text-slate-500 font-normal leading-relaxed max-w-xl mb-6 sm:mb-8"
                            >
                                <span className="sm:hidden">
                                    We empower modern enterprises by simplifying operations and driving innovation with ERP &amp; AI automation.
                                </span>
                                <span className="hidden sm:inline">
                                    We empower modern enterprises by simplifying complex operations, unifying disparate workflows, and driving continuous digital innovation with certified expertise in Odoo, Zoho, Tally, and intelligent AI automation.
                                </span>
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="flex items-center gap-3.5"
                            >
                                <a
                                    href="/services"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#0052ff] hover:bg-[#0047db] text-white font-semibold text-xs sm:text-[13.5px] shadow-[0_4px_16px_rgba(0,82,255,0.28)] hover:shadow-[0_6px_20px_rgba(0,82,255,0.36)] hover:-translate-y-0.5 transition-all duration-200 group"
                                >
                                    <span>Our Services</span>
                                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                                        →
                                    </span>
                                </a>


                            </motion.div>
                        </div>

                        {/* Right Column: 3D Floating Brand Graphic (Enters from Right + Ambient Float) */}


                    </div>
                </div>
            </section>

            {/* ================= 2. STATS BAR WITH DIVIDERS ================= */}
            <section className="w-full bg-white py-6 sm:py-8 lg:py-10 select-none">
                <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-0 items-center">

                        {/* Stat 1: 100+ Projects Delivered */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center justify-start sm:justify-center gap-3 sm:gap-4.5 md:pr-4 lg:pr-6"
                        >
                            <svg
                                className="w-8 h-8 sm:w-10 sm:h-10 text-[#0052ff] shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.2}
                            >
                                <circle cx="10" cy="14" r="7" />
                                <circle cx="10" cy="14" r="3.5" />
                                <circle cx="10" cy="14" r="1" fill="currentColor" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l5-5m0 0h-3.5m3.5 0v3.5" />
                            </svg>
                            <div>
                                <div className="text-xl sm:text-2xl lg:text-[28px] font-black text-[#0a1128] leading-none mb-1 tracking-tight">
                                    <Counter value={100} suffix="+" duration={2.2} />
                                </div>
                                <div className="text-[11px] sm:text-[12px] lg:text-[13px] text-slate-500 font-medium tracking-tight">
                                    Projects Delivered
                                </div>
                            </div>
                        </motion.div>

                        {/* Stat 2: 50+ Happy Clients */}
                        <motion.div
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center justify-start sm:justify-center gap-3 sm:gap-4.5 md:border-l md:border-slate-200/80 md:px-4 lg:px-6"
                        >
                            <svg
                                className="w-8 h-8 sm:w-10 sm:h-10 text-[#0052ff] shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.2}
                            >
                                <circle cx="12" cy="8" r="3" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 20a5.5 5.5 0 0111 0" />
                                <circle cx="6" cy="10" r="2" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 19a4 4 0 014-3" />
                                <circle cx="18" cy="10" r="2" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 16a4 4 0 014 3" />
                            </svg>
                            <div>
                                <div className="text-xl sm:text-2xl lg:text-[28px] font-black text-[#0a1128] leading-none mb-1 tracking-tight">
                                    <Counter value={50} suffix="+" duration={2.0} />
                                </div>
                                <div className="text-[11px] sm:text-[12px] lg:text-[13px] text-slate-500 font-medium tracking-tight">
                                    Happy Clients
                                </div>
                            </div>
                        </motion.div>

                        {/* Stat 3: 5+ Industries Served */}
                        <motion.div
                            initial={{ opacity: 0, x: 25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center justify-start sm:justify-center gap-3 sm:gap-4.5 md:border-l md:border-slate-200/80 md:px-4 lg:px-6"
                        >
                            <svg
                                className="w-8 h-8 sm:w-10 sm:h-10 text-[#0052ff] shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                            <div>
                                <div className="text-xl sm:text-2xl lg:text-[28px] font-black text-[#0a1128] leading-none mb-1 tracking-tight">
                                    <Counter value={5} suffix="+" duration={1.6} />
                                </div>
                                <div className="text-[11px] sm:text-[12px] lg:text-[13px] text-slate-500 font-medium tracking-tight">
                                    Industries Served
                                </div>
                            </div>
                        </motion.div>

                        {/* Stat 4: 99% Client Satisfaction */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center justify-start sm:justify-center gap-3 sm:gap-4.5 md:border-l md:border-slate-200/80 md:pl-4 lg:pl-6"
                        >
                            <svg
                                className="w-8 h-8 sm:w-10 sm:h-10 text-[#0052ff] shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                            </svg>
                            <div>
                                <div className="text-xl sm:text-2xl lg:text-[28px] font-black text-[#0a1128] leading-none mb-1 tracking-tight">
                                    <Counter value={99} suffix="%" duration={2.2} />
                                </div>
                                <div className="text-[11px] sm:text-[12px] lg:text-[13px] text-slate-500 font-medium tracking-tight">
                                    Client Satisfaction
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ================= 3. OUR STORY SECTION ================= */}
            <section className="w-full py-16 sm:py-20 bg-white">
                <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                        {/* Left: Office Photo with Brand Overlay */}
                        <motion.div
                            initial={{ opacity: 0, x: -70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-slate-100 h-[280px] sm:h-[340px] group"
                        >
                            <Image
                                src="/banner/Primse.png"
                                alt="Prime Cloud Office Lobby"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Subtle Brand Watermark on the Reception Wall */}

                        </motion.div>

                        {/* Right: Story Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:col-span-6 flex flex-col items-start"
                        >
                            <span className="text-[11px] sm:text-xs font-black tracking-widest text-[#0052ff] uppercase mb-2.5 block">
                                OUR STORY
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0f172a] tracking-tight leading-snug mb-5">
                                The Prime Cloud Journey
                            </h2>
                            <p className="text-[13.5px] sm:text-sm text-slate-500 font-normal leading-relaxed mb-4">
                                Prime Cloud Solutions LLC was founded with a clear vision — to help businesses
                                across industries modernize, automate, and grow through the right combination
                                of ERP, business software, and AI-driven solutions.
                            </p>
                            <p className="text-[13.5px] sm:text-sm text-slate-500 font-normal leading-relaxed">
                                With expertise in Odoo, Zoho, Tally and business process automation, we deliver
                                end-to-end solutions from implementation and customization to integration, migration,
                                and ongoing support.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ================= 4. MISSION, VISION, VALUES (3 CARDS) ================= */}
            <section className="w-full py-12 sm:py-16 bg-[#fcfdff]">
                <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Card 1: Our Mission (From Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-white rounded-2xl p-7 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,82,255,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052ff] flex items-center justify-center mb-6">
                                    {/* Rocket Icon */}
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-3">
                                    Our Mission
                                </h3>
                                <p className="text-[13px] text-slate-500 font-normal leading-relaxed">
                                    To empower businesses with reliable, scalable, and intelligent software
                                    solutions that drive efficiency, productivity, and long-term growth.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 2: Our Vision (From Bottom) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-white rounded-2xl p-7 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,82,255,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052ff] flex items-center justify-center mb-6">
                                    {/* Binoculars / Vision Icon */}
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-3">
                                    Our Vision
                                </h3>
                                <p className="text-[13px] text-slate-500 font-normal leading-relaxed">
                                    To be a trusted global partner in ERP, business software, and AI solutions,
                                    known for delivering innovation, value, and measurable business impact.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 3: Our Values (From Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-white rounded-2xl p-7 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,82,255,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052ff] flex items-center justify-center mb-6">
                                    {/* Diamond / Gem Icon */}
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12l4 6-10 12L2 9l4-6z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-3">
                                    Our Values
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        "Client-Centric Approach",
                                        "Innovation & Continuous Improvement",
                                        "Transparency & Trust",
                                        "Quality & Long-Term Support",
                                    ].map((val) => (
                                        <li key={val} className="flex items-center gap-2">
                                            <svg className="w-3.5 h-3.5 text-[#0052ff] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            <span className="text-[12.5px] font-semibold text-slate-700">
                                                {val}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ================= 5. OUR EXPERTISE SECTION (5 CAPABILITY ICONS) ================= */}
            <section className="w-full py-16 sm:py-20 bg-white">
                <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">

                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
                        <motion.span
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[11px] sm:text-xs font-black tracking-widest text-[#0052ff] uppercase mb-2.5 block"
                        >
                            OUR EXPERTISE
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: -25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0f172a] tracking-tight leading-snug mb-3.5"
                        >
                            A Focused Approach to Business Transformation
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[13px] sm:text-sm text-slate-500 font-normal leading-relaxed max-w-xl mx-auto"
                        >
                            We combine domain expertise, industry best practices, and modern technology to deliver
                            solutions that solve real business challenges.
                        </motion.p>
                    </div>

                    {/* 5 Capability Items in Row with Vertical Dividers */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-center sm:items-start gap-y-8 gap-x-4">

                        {/* 1. ERP Implementation */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col items-center text-center px-3 sm:px-4"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#edf4ff] text-[#0052ff] flex items-center justify-center mb-4 transition-transform hover:scale-105 duration-200">
                                <svg className="w-7 h-7 text-[#0052ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <span className="text-[13px] sm:text-[14px] font-bold text-slate-900 leading-snug max-w-[170px]">
                                ERP Implementation &amp; Customization
                            </span>
                        </motion.div>

                        {/* 2. Business Software Deployment */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col items-center text-center px-3 sm:px-4 lg:border-l lg:border-slate-200/70"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#edf4ff] text-[#0052ff] flex items-center justify-center mb-4 transition-transform hover:scale-105 duration-200">
                                <svg className="w-7 h-7 text-[#0052ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                                </svg>
                            </div>
                            <span className="text-[13px] sm:text-[14px] font-bold text-slate-900 leading-snug max-w-[170px]">
                                Business Software Deployment
                            </span>
                        </motion.div>

                        {/* 3. AI Solutions & Automation */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col items-center text-center px-3 sm:px-4 lg:border-l lg:border-slate-200/70"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#edf4ff] text-[#0052ff] flex items-center justify-center mb-4 transition-transform hover:scale-105 duration-200">
                                <div className="relative flex flex-col items-center justify-center">
                                    <svg className="w-7 h-7 text-[#0052ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                        <rect x="5" y="5" width="14" height="14" rx="2.5" />
                                        <path strokeLinecap="round" d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                                    </svg>
                                    <span className="text-[9px] font-black text-[#0052ff] absolute">AI</span>
                                </div>
                            </div>
                            <span className="text-[13px] sm:text-[14px] font-bold text-slate-900 leading-snug max-w-[170px]">
                                AI Solutions &amp; Automation
                            </span>
                        </motion.div>

                        {/* 4. System Integration & Data Migration */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col items-center text-center px-3 sm:px-4 lg:border-l lg:border-slate-200/70"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#edf4ff] text-[#0052ff] flex items-center justify-center mb-4 transition-transform hover:scale-105 duration-200">
                                <svg className="w-7 h-7 text-[#0052ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-3.172l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg>
                            </div>
                            <span className="text-[13px] sm:text-[14px] font-bold text-slate-900 leading-snug max-w-[170px]">
                                System Integration &amp; Data Migration
                            </span>
                        </motion.div>

                        {/* 5. Consulting & Ongoing Support */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.0, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col items-center text-center px-3 sm:px-4 lg:border-l lg:border-slate-200/70 sm:col-span-2 lg:col-span-1"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#edf4ff] text-[#0052ff] flex items-center justify-center mb-4 transition-transform hover:scale-105 duration-200">
                                <svg className="w-7 h-7 text-[#0052ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 14v-3a9 9 0 0118 0v3" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 14a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H5a2 2 0 00-2 2v3zm18 0a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h1a2 2 0 012 2v3z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 16v2a3 3 0 01-3 3h-3" />
                                    <circle cx="12" cy="21" r="1" fill="currentColor" />
                                </svg>
                            </div>
                            <span className="text-[13px] sm:text-[14px] font-bold text-slate-900 leading-snug max-w-[170px]">
                                Consulting &amp; Ongoing Support
                            </span>
                        </motion.div>

                    </div>

                </div>
            </section>

            {/* ================= 6. BOTTOM CTA BANNER ================= */}
            <section className="w-full pb-20 bg-white">
                <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-6 sm:p-8 lg:px-10 lg:py-7 shadow-[0_12px_32px_rgba(0,82,255,0.18)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                    >
                        {/* Background Artwork */}
                        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
                            <Image
                                src="/banner/cta-banner.png"
                                alt="CTA Background"
                                fill
                                priority
                                className="object-fill w-full h-full"
                            />
                        </div>

                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="relative z-10 max-w-xl"
                        >
                            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-1.5">
                                Let&apos;s Build a Smarter, More Efficient Business
                            </h3>
                            <p className="text-xs sm:text-[13.5px] text-blue-100/90 font-normal leading-relaxed">
                                Partner with Prime Cloud Solutions LLC for ERP, business software, and AI solutions tailored to your goals.
                            </p>
                        </motion.div>

                        {/* Right Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="relative z-10 shrink-0"
                        >
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-[13px] shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all duration-200 group"
                            >
                                <span>Book a Free Consultation</span>
                                <span className="text-[#0052ff] group-hover:translate-x-0.5 transition-transform duration-200 font-bold">
                                    →
                                </span>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
