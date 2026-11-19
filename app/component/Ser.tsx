"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface IndustryItem {
    id: string;
    title: string;
    image: string;
    direction: "left" | "right";
    offset: number;
    delay: number;
    icon: React.ReactNode;
}

const industries: IndustryItem[] = [
    {
        id: "manufacturing",
        title: "Manufacturing",
        image: "/industries/manufacturing.jpg",
        direction: "left",
        offset: -80,
        delay: 0.1,
        icon: (
            <svg
                className="w-4.5 h-4.5 text-[#0052ff]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 19h16M6 19v-3l4-5 4 1.5 3-4.5"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 8h4v4" />
                <circle cx="6" cy="16" r="1.5" fill="currentColor" />
                <circle cx="10" cy="11" r="1.5" fill="currentColor" />
                <circle cx="14" cy="12.5" r="1.5" fill="currentColor" />
            </svg>
        ),
    },
    {
        id: "retail",
        title: "Retail & Distribution",
        image: "/industries/retail.jpg",
        direction: "left",
        offset: -40,
        delay: 0.2,
        icon: (
            <svg
                className="w-4.5 h-4.5 text-[#0052ff]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
            >
                <rect x="4" y="3" width="7" height="18" rx="1" />
                <rect x="13" y="8" width="7" height="13" rx="1" />
                <path
                    strokeLinecap="round"
                    d="M6.5 6.5h2M6.5 10.5h2M6.5 14.5h2M15.5 11.5h2M15.5 15.5h2"
                />
            </svg>
        ),
    },
    {
        id: "services",
        title: "Services & Consulting",
        image: "/industries/services.jpg",
        direction: "right",
        offset: 40,
        delay: 0.3,
        icon: (
            <svg
                className="w-4.5 h-4.5 text-[#0052ff]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        ),
    },
    {
        id: "trading",
        title: "Trading & Wholesale",
        image: "/industries/trading.jpg",
        direction: "right",
        offset: 80,
        delay: 0.4,
        icon: (
            <svg
                className="w-4.5 h-4.5 text-[#0052ff]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
            >
                <rect x="6" y="6" width="12" height="12" rx="2" />
                <path
                    strokeLinecap="round"
                    d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"
                />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
        ),
    },
];

export default function Ser() {
    return (
        <section id="industries" className="w-full bg-white py-16 sm:py-20 select-none overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-6 sm:p-8 lg:px-10 lg:py-7 mt-8 sm:mt-10 shadow-[0_12px_32px_rgba(0,82,255,0.18)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >

                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
                        <Image
                            src="/banner/cta-banner.png"
                            alt="CTA Background"
                            fill
                            priority
                            className="object-fill w-full h-full"
                        />
                    </div>

                    {/* Left Content: Title & Subtitle (From Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10 max-w-xl"
                    >
                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-1.5">
                            Ready to Transform Your Business?
                        </h3>
                        <p className="text-xs sm:text-[13.5px] text-blue-100/90 font-normal leading-relaxed">
                            Let&apos;s discuss how Prime Cloud Solutions LLC can help you implement the right solution for your business.
                        </p>
                    </motion.div>

                    {/* Right Content: Button (From Right) */}
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
    );
}
