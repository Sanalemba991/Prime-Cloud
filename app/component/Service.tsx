"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceItem {
    id: string;
    hash: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    direction: "left" | "right" | "bottom";
    offset: number;
    delay: number;
}

const services: ServiceItem[] = [
    {
        id: "odoo",
        hash: "odoo",
        title: "Odoo ERP Implementation",
        description: "Implementation, customization, and ongoing support for Odoo.",
        direction: "left",
        offset: -80,
        delay: 0.1,
        icon: (
            <div className="w-16 h-16 rounded-2xl bg-[#f5eef8] flex items-center justify-center p-2 overflow-hidden shadow-2xs">
                <Image
                    src="/logo/odoo.webp"
                    alt="Odoo ERP"
                    width={56}
                    height={56}
                    className="object-contain scale-125"
                />
            </div>
        ),
    },
    {
        id: "zoho",
        hash: "zoho",
        title: "Zoho Software Implementation",
        description:
            "Setup, customization, and integration of Zoho applications.",
        direction: "left",
        offset: -40,
        delay: 0.2,
        icon: (
            <div className="w-16 h-16 rounded-2xl bg-amber-50/60 flex items-center justify-center p-2.5 overflow-hidden shadow-2xs">
                <Image
                    src="/logo/zoho2.webp"
                    alt="Zoho Software"
                    width={80}
                    height={80}
                    className="object-contain scale-110"
                />
            </div>
        ),
    },
    {
        id: "tally",
        hash: "tally",
        title: "Tally Implementation & Support",
        description:
            "Tally setup, migration, customization, and long-term support.",
        direction: "bottom",
        offset: 60,
        delay: 0.3,
        icon: (
            <div className="w-16 h-16 rounded-2xl bg-blue-50/60 flex items-center justify-center p-2 overflow-hidden shadow-2xs">
                <Image
                    src="/logo/tally.png"
                    alt="Tally ERP"
                    width={29}
                    height={29}
                    className="object-contain scale-110"
                />
            </div>
        ),
    },
    {
        id: "ai",
        hash: "ai",
        title: "AI Solutions & Automation",
        description:
            "AI-powered solutions to automate workflows and improve efficiency.",
        direction: "right",
        offset: 40,
        delay: 0.4,
        icon: (
            <div className="w-16 h-16 rounded-2xl bg-indigo-50/60 flex items-center justify-center p-2 overflow-hidden shadow-2xs">
                <Image
                    src="/logo/AI.png"
                    alt="AI Solutions"
                    width={52}
                    height={52}
                    className="object-contain scale-110"
                />
            </div>
        ),
    },
    {
        id: "integration",
        hash: "integration",
        title: "Integration & Consulting",
        description:
            "Software integration, data migration, and business consulting.",
        direction: "right",
        offset: 80,
        delay: 0.5,
        icon: (
            <div className="w-16 h-16 rounded-2xl bg-sky-50/70 flex items-center justify-center p-2 overflow-hidden shadow-2xs">
                <Image
                    src="/logo/integration.png"
                    alt="Integration & Consulting"
                    width={52}
                    height={52}
                    className="object-contain scale-110"
                />
            </div>
        ),
    },
];

export default function Service() {
    const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        e.preventDefault();
        window.location.href = `/services#${hash}`;
    };
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
                                className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,82,255,0.08)]  transition-all duration-300 flex flex-col justify-between min-h-[300px]"
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
                                        href={`/services#${item.hash}`}
                                        onClick={(e) => handleServiceClick(e, item.hash)}
                                        aria-label={`Learn more about ${item.title}`}
                                        className="w-9 h-9 rounded-full border border-blue-100 bg-blue-50/50 group-hover:bg-[#0052ff] group-hover:border-[#0052ff] flex items-center justify-center text-[#0052ff] group-hover:text-white transition-all duration-200 shadow-2xs cursor-pointer"
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
