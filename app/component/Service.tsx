"use client";

import React from "react";
import { motion } from "framer-motion";

interface ServiceItem {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    href?: string;
    direction: "left" | "right" | "bottom";
    offset: number;
    delay: number;
}

const services: ServiceItem[] = [
    {
        id: "odoo",
        title: "Odoo ERP Implementation",
        description: "Implementation, customization, and ongoing support for Odoo.",
        href: "#odoo",
        direction: "left",
        offset: -80,
        delay: 0.1,
        icon: (
            <div className="w-14 h-14 rounded-2xl bg-[#f5eef8] flex items-center justify-center">
                <span className="text-xl font-extrabold tracking-tight text-[#714B67]">
                    odoo
                </span>
            </div>
        ),
    },
    {
        id: "zoho",
        title: "Zoho Software Implementation",
        description:
            "Setup, customization, and integration of Zoho applications.",
        href: "#zoho",
        direction: "left",
        offset: -40,
        delay: 0.2,
        icon: (
            <div className="w-14 h-14 flex items-center justify-center">
                <div className="flex items-center gap-1 font-black">
                    <span className="bg-[#e53935] text-white w-6 h-6 rounded flex items-center justify-center text-xs font-bold shadow-2xs">
                        Z
                    </span>
                    <span className="bg-[#43a047] text-white w-6 h-6 rounded flex items-center justify-center text-xs font-bold shadow-2xs">
                        O
                    </span>
                    <span className="bg-[#1e88e5] text-white w-6 h-6 rounded flex items-center justify-center text-xs font-bold shadow-2xs">
                        H
                    </span>
                    <span className="bg-[#fbc02d] text-white w-6 h-6 rounded flex items-center justify-center text-xs font-bold shadow-2xs">
                        O
                    </span>
                </div>
            </div>
        ),
    },
    {
        id: "tally",
        title: "Tally Implementation & Support",
        description:
            "Tally setup, migration, customization, and long-term support.",
        href: "#tally",
        direction: "bottom",
        offset: 60,
        delay: 0.3,
        icon: (
            <div className="w-14 h-14 flex items-center justify-center">
                <div className="w-9 h-9 grid grid-cols-2 gap-0.5 p-0.5 rounded-xs">
                    <div className="bg-[#0b5cff] rounded-[1px]"></div>
                    <div className="bg-[#eab308] rounded-[1px]"></div>
                    <div className="bg-[#38bdf8] rounded-[1px]"></div>
                    <div className="bg-[#f59e0b] rounded-[1px]"></div>
                </div>
            </div>
        ),
    },
    {
        id: "ai",
        title: "AI Solutions & Automation",
        description:
            "AI-powered solutions to automate workflows and improve efficiency.",
        href: "#ai-solutions",
        direction: "right",
        offset: 40,
        delay: 0.4,
        icon: (
            <div className="w-14 h-14 flex items-center justify-center">
                <div className="relative w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex flex-col items-center justify-center text-[#0052ff]">
                    <svg
                        className="w-5 h-5"
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
                    <span className="text-[9px] font-black tracking-tighter absolute">
                        AI
                    </span>
                </div>
            </div>
        ),
    },
    {
        id: "integration",
        title: "Integration & Consulting",
        description:
            "Software integration, data migration, and business consulting.",
        href: "#integration-consulting",
        direction: "right",
        offset: 80,
        delay: 0.5,
        icon: (
            <div className="w-14 h-14 rounded-2xl bg-blue-50/70 flex items-center justify-center text-[#0052ff]">
                <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                    />
                </svg>
            </div>
        ),
    },
];

export default function Service() {
    return (
        <section id="services" className="w-full bg-[#fcfdff] py-16 sm:py-24 select-none overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">

                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="text-xs sm:text-[13px] font-extrabold tracking-widest text-[#0052ff] uppercase block mb-2.5"
                    >
                        OUR SERVICES
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight mb-3.5"
                    >
                        End-to-End Business Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-xl mx-auto"
                    >
                        From ERP implementation to AI-driven automation, we help you build
                        a more efficient, integrated and intelligent business.
                    </motion.p>
                </div>

                {/* 5 Cards Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {services.map((item) => {
                        const initialAnim =
                            item.direction === "left"
                                ? { opacity: 0, x: item.offset }
                                : item.direction === "right"
                                    ? { opacity: 0, x: item.offset }
                                    : { opacity: 0, y: item.offset };

                        return (
                            <motion.div
                                key={item.id}
                                initial={initialAnim}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{
                                    duration: 1.1,
                                    delay: item.delay,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,82,255,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[300px]"
                            >
                                <div>
                                    {/* Top Icon */}
                                    <div className="mb-6 flex items-center justify-start">
                                        {item.icon}
                                    </div>

                                    {/* Card Title */}
                                    <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0f172a] tracking-tight leading-snug mb-2.5">
                                        {item.title}
                                    </h3>

                                    {/* Card Description */}
                                    <p className="text-[13px] text-slate-500 font-normal leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Bottom Arrow Button */}
                                <div className="pt-6">
                                    <a
                                        href={item.href || "#"}
                                        aria-label={`Learn more about ${item.title}`}
                                        className="w-9 h-9 rounded-full border border-blue-100 bg-blue-50/50 group-hover:bg-[#0052ff] group-hover:border-[#0052ff] flex items-center justify-center text-[#0052ff] group-hover:text-white transition-all duration-200 shadow-2xs"
                                    >
                                        <svg
                                            className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2.2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
