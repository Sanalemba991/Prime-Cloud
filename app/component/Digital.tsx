"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    service: string;
    avatar: string;
    rating: number;
    content: string;
    highlight: string;

}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Rashid Al-Maktoum",
        role: "Chief Operating Officer",
        company: "Apex Global Logistics",
        service: "Odoo ERP Implementation",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        rating: 5,
        highlight: "Streamlined end-to-end supply chain",
        content:
            "Prime Cloud transformed our complex multi-warehouse operations with a seamless Odoo implementation. Our inventory errors dropped by over 80% within the first two months, and team reporting that once took days is now live and instant.",

    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Head of Digital Operations",
        company: "Vanguard Financial Services",
        service: "Zoho CRM & Books Customization",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        rating: 4,
        highlight: "Automated client onboarding pipeline",
        content:
            "The level of customization and business domain knowledge Prime Cloud brought to the table was incredible. They integrated Zoho with our banking gateways and automated client follow-ups, cutting administrative hours by half.",

    },
    {
        id: 3,
        name: "Tariq Bin Khalid",
        role: "Managing Director",
        company: "Crestview Retail Group",
        service: "AI Process Automation & Analytics",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        rating: 4,
        highlight: "AI-driven demand forecasting",
        content:
            "Integrating custom AI models into our sales tracking allowed us to predict inventory demand ahead of peak season. Prime Cloud delivered on time, provided dedicated training, and remains our go-to technology partner.",

    },
    {
        id: 4,
        name: "Elena Rostova",
        role: "Finance Director",
        company: "OmniTech Solutions",
        service: "Tally Prime & Cloud Integration",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
        rating: 5,
        highlight: "Zero downtime financial migration",
        content:
            "Migrating multiple years of multi-currency accounting data into modern cloud-connected Tally seemed daunting, but the Prime Cloud team handled every single edge case with absolute precision and zero disruption.",

    },
];

export default function Digital() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    useEffect(() => {
        if (!isAutoPlay) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5500);
        return () => clearInterval(interval);
    }, [isAutoPlay]);

    const active = testimonials[activeIndex];

    return (
        <section className="w-full bg-[#f8faff] py-16 sm:py-20 select-none overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.7 }}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f1fd] mb-3 text-[11px] font-bold text-[#0052ff] tracking-tight shadow-xs uppercase"
                        >
                            <span>Client Testimonials</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0f172a] tracking-tight leading-[1.2]"
                        >
                            Trusted by Leading Businesses <br />
                            <span className="text-[#0052ff]">Across Industries</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[13px] sm:text-sm text-slate-500 max-w-md font-normal leading-relaxed"
                    >
                        See how our ERP implementations, cloud software, and AI solutions deliver real, measurable business impact.
                    </motion.p>
                </div>

                {/* Main Featured Testimonial Card */}
                <div
                    onMouseEnter={() => setIsAutoPlay(false)}
                    onMouseLeave={() => setIsAutoPlay(true)}
                    className="relative rounded-3xl bg-white border border-slate-100 shadow-[0_12px_40px_rgba(0,82,255,0.06)] overflow-hidden px-6 py-7 sm:px-10 sm:py-9 lg:px-12 lg:py-10 mb-8"
                >
                    {/* Background Artwork Aura Layer */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden opacity-70">
                        <Image
                            src="/banner/layer.png"
                            alt="Digital Background Aura"
                            fill
                            priority
                            className="object-cover object-right"
                        />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

                        {/* Left Column: Quote, Content & Author */}
                        <div className="lg:col-span-8 flex flex-col justify-between">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    {/* Star Rating & Service Tag */}
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <div className="flex items-center gap-1 text-amber-400">
                                            {[...Array(active.rating)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-slate-300">•</span>
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-[11px] font-bold text-[#0052ff]">
                                            {active.service}
                                        </span>
                                    </div>

                                    {/* Highlight Headline */}
                                    <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight leading-snug mb-3.5">
                                        &ldquo;{active.highlight}&rdquo;
                                    </h3>

                                    {/* Quote Body */}
                                    <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 mb-6 font-normal">
                                        {active.content}
                                    </p>

                                    {/* Client Identity & Metric */}
                                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                                        <div className="flex items-center gap-3.5">
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#0052ff]/20 shadow-sm shrink-0">
                                                <Image
                                                    src={active.avatar}
                                                    alt={active.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-sm sm:text-[15px] font-extrabold text-slate-900 leading-tight">
                                                    {active.name}
                                                </h4>
                                                <p className="text-xs text-slate-500 font-medium mt-0.5">
                                                    {active.role} • <span className="text-slate-700 font-semibold">{active.company}</span>
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right Column: Navigation Pills & Overview Cards */}
                        <div className="lg:col-span-4 flex flex-col justify-center space-y-2.5">
                            <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-1">
                                Recent Success Stories
                            </span>

                            {testimonials.map((item, idx) => {
                                const isCurrent = idx === activeIndex;
                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => setActiveIndex(idx)}
                                        className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer ${isCurrent
                                            ? "bg-white border-[#0052ff] shadow-[0_6px_20px_rgba(0,82,255,0.1)] ring-1 ring-[#0052ff]/30 translate-x-1"
                                            : "bg-slate-50/80 border-slate-200/70 hover:bg-white hover:border-slate-300 text-slate-600"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 min-w-0">
                                            <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 border border-slate-200">
                                                <Image
                                                    src={item.avatar}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="min-w-0">
                                                <div className={`text-xs font-bold truncate ${isCurrent ? "text-[#0052ff]" : "text-slate-800"}`}>
                                                    {item.name}
                                                </div>
                                                <div className="text-[11px] text-slate-500 truncate">
                                                    {item.company}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="shrink-0">
                                            <span
                                                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors ${isCurrent
                                                    ? "bg-[#0052ff] text-white"
                                                    : "bg-slate-200 text-slate-600"
                                                    }`}
                                            >
                                                &rarr;
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}

                            {/* Carousel Indicators / Controls */}
                            <div className="flex items-center justify-between pt-2">
                                <div className="flex items-center gap-1.5">
                                    {testimonials.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveIndex(i)}
                                            aria-label={`Go to slide ${i + 1}`}
                                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === activeIndex ? "w-6 bg-[#0052ff]" : "w-2 bg-slate-300 hover:bg-slate-400"
                                                }`}
                                        />
                                    ))}
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                                        aria-label="Previous testimonial"
                                        className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center text-xs transition-colors shadow-2xs cursor-pointer"
                                    >
                                        &larr;
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
                                        aria-label="Next testimonial"
                                        className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center text-xs transition-colors shadow-2xs cursor-pointer"
                                    >
                                        &rarr;
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* Bottom Trust Indicators / Social Proof Row */}


            </div>
        </section>
    );
}
