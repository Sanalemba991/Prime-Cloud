"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";

function Counter({ value, prefix = "", suffix = "", duration = 2.2 }: { value: number; prefix?: string; suffix?: string; duration?: number }) {
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
                node.textContent = prefix + Math.round(latest) + suffix;
            },
        });

        return () => controls.stop();
    }, [inView, value, prefix, suffix, duration]);

    return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function Digital() {
    return (
        <section className="w-full bg-[#f8faff] py-16 sm:py-20 select-none overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">

                {/* Main Card Container */}
                <div className="relative rounded-3xl bg-white border border-slate-100 shadow-[0_10px_35px_rgba(0,82,255,0.04)] overflow-hidden px-6 py-6 sm:px-10 sm:py-8 lg:px-14 lg:py-9">

                    {/* Background Aura Image (/banner/layer.png) */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
                        <Image
                            src="/banner/layer.png"
                            alt="Digital Background Aura"
                            fill
                            priority
                            className="object-cover object-right"
                        />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

                        {/* Left Column: Text & Features (Enters from Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -85 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4"
                        >

                            {/* Tag */}
                            <span className="text-[11px] sm:text-xs font-black tracking-widest text-[#0052ff] uppercase mb-3 block">
                                DIGITAL TRANSFORMATION
                            </span>

                            {/* Title */}
                            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0f172a] tracking-tight leading-[1.2] mb-4">
                                Make Your Business <br />
                                Smarter, Faster &amp; More Efficient
                            </h2>

                            {/* Description */}
                            <p className="text-[13px] sm:text-sm text-slate-500 font-normal leading-relaxed max-w-lg mb-6 sm:mb-7">
                                We combine the power of ERP, business software and AI to
                                help you automate processes, integrate systems and unlock
                                new growth opportunities.
                            </p>

                            {/* Checkmarks / Benefits (Staggered Animation) */}
                            <div className="flex flex-wrap items-center gap-4 sm:gap-6">

                                {/* 1. Process Automation */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex items-center gap-2"
                                >
                                    <div className="w-5 h-5 rounded-full bg-[#0052ff] flex items-center justify-center text-white shrink-0 shadow-2xs">
                                        <svg className="w-3 h-3 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <span className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-tight">
                                        Process Automation
                                    </span>
                                </motion.div>

                                {/* 2. Better Visibility */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex items-center gap-2"
                                >
                                    <div className="w-5 h-5 rounded-full bg-[#0052ff] flex items-center justify-center text-white shrink-0 shadow-2xs">
                                        <svg className="w-3 h-3 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <span className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-tight">
                                        Better Visibility
                                    </span>
                                </motion.div>

                                {/* 3. Higher ROI */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex items-center gap-2"
                                >
                                    <div className="w-5 h-5 rounded-full bg-[#0052ff] flex items-center justify-center text-white shrink-0 shadow-2xs">
                                        <svg className="w-3 h-3 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <span className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-tight">
                                        Higher ROI
                                    </span>
                                </motion.div>

                            </div>

                        </motion.div>

                        {/* Right Column: Visual Floating Cards & Central Brand Logo Card (Enters from Right) */}
                        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[270px] sm:min-h-[290px] w-full">
                            <div className="relative w-full max-w-[500px] h-[260px] flex items-center justify-center">

                                {/* 1. Left Card: Automation +70% (Enters from Left + Floats) */}
                                <motion.div
                                    initial={{ opacity: 0, x: -70, y: 20 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute left-0 bottom-4 z-20"
                                >
                                    <motion.div
                                        animate={{ y: [0, -6, 0] }}
                                        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                                        className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-100 shadow-[0_12px_28px_rgba(0,0,0,0.06)] flex flex-col gap-0.5 w-[125px] sm:w-[138px]"
                                    >
                                        <span className="text-[11px] text-slate-900 font-bold">Automation</span>
                                        <span className="text-base sm:text-lg font-black text-slate-900 leading-none mb-1">
                                            <Counter value={70} prefix="+" suffix="%" duration={1.8} />
                                        </span>
                                        <div className="h-8 w-full">
                                            <svg className="w-full h-full" viewBox="0 0 100 40" fill="none">
                                                <path
                                                    d="M5 34 C 20 30, 35 28, 50 25 C 65 22, 75 14, 95 6"
                                                    stroke="#2563eb"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* 2. Center Card: PrimeCloud Logo Card (Scales up from center + Ambient Glow) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative z-30"
                                >
                                    <motion.div
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                        className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl bg-white border border-slate-100 shadow-[0_20px_45px_rgba(0,82,255,0.14)] flex items-center justify-center p-3"
                                    >
                                        <div className="relative flex items-center justify-center w-full h-full">
                                            <svg
                                                className="w-14 h-14 sm:w-16 sm:h-16"
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
                                    </motion.div>
                                </motion.div>

                                {/* 3. Right Top Card: Integration (Enters from Right + Floats) */}
                                <motion.div
                                    initial={{ opacity: 0, x: 80, y: -25 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute -top-1 sm:top-1 -right-3 sm:-right-4 z-20"
                                >
                                    <motion.div
                                        animate={{ y: [0, -7, 0] }}
                                        transition={{ repeat: Infinity, duration: 4.6, ease: "easeInOut", delay: 0.6 }}
                                        className="bg-white px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-slate-100 shadow-[0_12px_28px_rgba(0,0,0,0.06)] flex items-center gap-2.5 sm:gap-3 w-[155px] sm:w-[175px]"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#0052ff] shrink-0">
                                            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-3.172l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-[12px] sm:text-[13px] font-bold text-slate-900 leading-tight">Integration</div>
                                            <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium mt-0.5">Seamless &amp; Secure</div>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* 4. Right Bottom Card: AI Workflow (Enters from Right + Floats) */}
                                <motion.div
                                    initial={{ opacity: 0, x: 80, y: 25 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute -bottom-1 sm:bottom-1 -right-3 sm:-right-4 z-20"
                                >
                                    <motion.div
                                        animate={{ y: [0, 7, 0] }}
                                        transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 1 }}
                                        className="bg-white px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-slate-100 shadow-[0_12px_28px_rgba(0,0,0,0.06)] flex items-center gap-2.5 sm:gap-3 w-[155px] sm:w-[175px]"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#0052ff] shrink-0">
                                            <div className="relative flex flex-col items-center justify-center">
                                                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                                    <rect x="5" y="5" width="14" height="14" rx="2" strokeWidth={2} />
                                                    <path strokeLinecap="round" d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                                                </svg>
                                                <span className="text-[7px] font-black absolute">AI</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-[12px] sm:text-[13px] font-bold text-slate-900 leading-tight">AI Workflow</div>
                                            <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium mt-0.5">Automate &amp; Scale</div>
                                        </div>
                                    </motion.div>
                                </motion.div>

                            </div>
                        </div>

                    </div>

                </div>

                {/* Bottom Statistics Row with Separator Dividers (Alternate Left and Right Entry) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 pt-10 sm:pt-14 mt-6">

                    {/* Stat 1 (From Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-3.5"
                    >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0052ff] shrink-0">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-black text-slate-900 leading-none mb-1">
                                <Counter value={100} suffix="+" duration={2.2} />
                            </div>
                            <div className="text-xs text-slate-500 font-medium">Projects Delivered</div>
                        </div>
                    </motion.div>

                    {/* Stat 2 (From Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-3.5 md:border-l md:border-slate-200/80 md:pl-6"
                    >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0052ff] shrink-0">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-black text-slate-900 leading-none mb-1">
                                <Counter value={50} suffix="+" duration={2.0} />
                            </div>
                            <div className="text-xs text-slate-500 font-medium">Happy Clients</div>
                        </div>
                    </motion.div>

                    {/* Stat 3 (From Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-3.5 md:border-l md:border-slate-200/80 md:pl-6"
                    >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0052ff] shrink-0">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-black text-slate-900 leading-none mb-1">
                                <Counter value={5} suffix="+" duration={1.6} />
                            </div>
                            <div className="text-xs text-slate-500 font-medium">Industries Served</div>
                        </div>
                    </motion.div>

                    {/* Stat 4 (From Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-3.5 md:border-l md:border-slate-200/80 md:pl-6"
                    >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0052ff] shrink-0">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-black text-slate-900 leading-none mb-1">
                                <Counter value={99} suffix="%" duration={2.2} />
                            </div>
                            <div className="text-xs text-slate-500 font-medium">Client Satisfaction</div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
