"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, animate, AnimatePresence } from "framer-motion";

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
    // Modal state for Enquiry / Contact Form
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const openEnquiryModal = (serviceName: string) => {
        setSelectedService(serviceName);
        setFormData((prev) => ({ ...prev, service: serviceName }));
        setIsSubmitted(false);
        setErrorMessage("");
        setIsModalOpen(true);
    };

    const closeEnquiryModal = () => {
        setIsModalOpen(false);
        setErrorMessage("");
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        try {
            const res = await fetch("/api/service-enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to submit enquiry");
            }

            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setIsModalOpen(false);
                setFormData({
                    fullName: "",
                    companyName: "",
                    email: "",
                    phone: "",
                    service: "",
                    message: "",
                });
            }, 2200);
        } catch (err: any) {
            setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen]);
    // Fast, responsive smooth scroll to target hash anchor
    useEffect(() => {
        const handleHash = () => {
            const hash = window.location.hash;
            if (hash) {
                const targetId = hash.replace("#", "");
                const element = document.getElementById(targetId);
                if (element) {
                    const navbarHeight = 80;
                    const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            }
        };

        const timer = setTimeout(handleHash, 50);
        window.addEventListener("hashchange", handleHash);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("hashchange", handleHash);
        };
    }, []);

    return (
        <div className="w-full bg-[#f8fafc]/40 text-slate-800 select-none overflow-hidden font-sans">

            {/* =========================================================================
                1. HERO / BANNER SECTION (Full Background Image)
            ========================================================================= */}
            <section className="relative w-full min-h-0 lg:min-h-[560px] flex items-center bg-white overflow-hidden pt-12 pb-16 sm:pb-20 lg:py-16 select-none">
                {/* Full Banner Background Artwork */}
                <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
                    {/* Mobile Background Image */}
                    <Image
                        src="/banner/Modern Blue Tech Dashboard Workspace.png"
                        alt="Services Hero Banner Background Mobile"
                        fill
                        priority
                        className="block sm:hidden object-cover object-right"
                    />
                    {/* Desktop / Tablet Background Image */}
                    <Image
                        src="/banner/Right-Aligned Odoo Dashboard Workspace.png"
                        alt="Services Hero Banner Background"
                        fill
                        priority
                        className="hidden sm:block object-cover object-[75%_center] sm:object-right"
                    />
                </div>

                <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

                        {/* Left Column: Heading, Subtext, Buttons, Stats */}
                        <div className="lg:col-span-7 flex flex-col items-start text-left pr-0 lg:pr-4">

                            {/* Pill / Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#e8f1fd] mb-5 text-[12px] sm:text-[13px] font-bold text-[#0052ff] tracking-tight shadow-2xs"
                            >
                                <span>Our Services</span>
                            </motion.div>

                            {/* Main Heading */}
                            <motion.h1
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="text-3xl sm:text-4xl lg:text-[48px] font-black tracking-tight leading-[1.16] lg:leading-[1.12] text-[#0f172a] mb-5"
                            >
                                Powering Your Business <br />
                                with <span className="text-[#0052ff]">Smart Technology</span>
                            </motion.h1>

                            {/* Paragraph */}
                            <motion.p
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="text-[13.5px] sm:text-sm lg:text-[15px] leading-relaxed text-slate-500 max-w-xl lg:max-w-[480px] mb-8 font-normal"
                            >
                                We deliver ERP and AI solutions that streamline operations, improve efficiency, and drive business growth.
                            </motion.p>

                            {/* CTA Buttons - Matching Banner.tsx button aesthetics */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="flex items-center gap-3.5 mb-10"
                            >
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#0052ff] hover:bg-[#0047db] text-white font-semibold text-xs sm:text-[13.5px] lg:text-[14px] shadow-[0_4px_16px_rgba(0,82,255,0.28)] hover:shadow-[0_6px_20px_rgba(0,82,255,0.36)] hover:-translate-y-0.5 transition-all duration-200 group"
                                >
                                    <span>Get Started</span>
                                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                                        →
                                    </span>
                                </Link>


                            </motion.div>

                            {/* Stats Counter Row - Hidden on mobile, visible on desktop/PC */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="hidden sm:grid grid-cols-3 gap-4 sm:gap-10 pt-4 border-t border-slate-200/80 w-full max-w-[460px]"
                            >
                                <div>
                                    <h4 className="text-xl sm:text-3xl font-extrabold text-[#0b132b] tracking-tight">
                                        <Counter value={5} suffix="+" />
                                    </h4>
                                    <p className="text-[11px] sm:text-[12px] text-slate-500 font-medium mt-0.5 leading-tight">Years Experience</p>
                                </div>
                                <div>
                                    <h4 className="text-xl sm:text-3xl font-extrabold text-[#0b132b] tracking-tight">
                                        <Counter value={100} suffix="+" />
                                    </h4>
                                    <p className="text-[11px] sm:text-[12px] text-slate-500 font-medium mt-0.5 leading-tight">Satisfied Clients</p>
                                </div>
                                <div>
                                    <h4 className="text-xl sm:text-3xl font-extrabold text-[#0b132b] tracking-tight">
                                        <Counter value={50} suffix="+" />
                                    </h4>
                                    <p className="text-[11px] sm:text-[12px] text-slate-500 font-medium mt-0.5 leading-tight">Projects Delivered</p>
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
            <section id="core-services" className="w-full py-10 sm:py-16 lg:py-24 bg-white relative">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10">

                    {/* Section Header */}
                    <div className="mb-6 sm:mb-12">
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
                            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b132b] tracking-tight mb-2.5"
                        >
                            Our Core Services
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-slate-600 text-xs sm:text-sm lg:text-base max-w-xl"
                        >
                            Tailored technology solutions to streamline your operations and drive growth.
                        </motion.p>
                    </div>

                    {/* TOP ROW: 2 Large Cards (Odoo & Zoho) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mb-5 sm:mb-6">

                        {/* 1. Odoo Card */}
                        <div
                            id="odoo"
                            className="group relative bg-[#fbfcfe] rounded-2xl border border-slate-200/90 p-5 sm:p-7 hover:shadow-xl transition-all duration-300 hover:border-blue-200 flex flex-col justify-between overflow-hidden min-h-0 sm:min-h-[275px] scroll-mt-28"
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

                            <div className="relative z-10 w-full sm:max-w-[65%] md:max-w-[58%] lg:max-w-[53%] flex flex-col justify-between h-full bg-white/80 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none p-3.5 sm:p-0 rounded-xl sm:rounded-none">
                                <div>
                                    <div className="w-8 h-8 rounded-lg border border-blue-200 bg-white/95 backdrop-blur-xs text-[#0052ff] flex items-center justify-center font-bold text-xs mb-2.5 shadow-2xs">
                                        01
                                    </div>

                                    <h3 className="text-base sm:text-[17px] font-bold text-slate-900 mb-1.5 leading-snug">
                                        Odoo ERP Implementation, <br className="hidden sm:block" />
                                        Customization &amp; Support
                                    </h3>
                                    <p className="text-xs sm:text-[12.5px] text-slate-600 mb-3 sm:mb-3.5 leading-relaxed font-normal">
                                        Powerful, flexible, and open-source ERP to manage your business end-to-end.
                                    </p>

                                    <ul className="space-y-1.5 mb-3.5 sm:mb-4">
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

                                <button
                                    type="button"
                                    onClick={() => openEnquiryModal("Odoo ERP Implementation, Customization & Support")}
                                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#0052ff] hover:text-[#003bb5] transition-colors group/link mt-1 cursor-pointer w-fit text-left"
                                >
                                    <span>Contact Us</span>
                                    <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                                </button>
                            </div>
                        </div>

                        {/* 2. Zoho Card */}
                        <div
                            id="zoho"
                            className="group relative bg-[#fbfcfe] rounded-2xl border border-slate-200/90 p-5 sm:p-7 hover:shadow-xl transition-all duration-300 hover:border-blue-200 flex flex-col justify-between overflow-hidden min-h-0 sm:min-h-[275px] scroll-mt-28"
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

                            <div className="relative z-10 w-full sm:max-w-[65%] md:max-w-[58%] lg:max-w-[53%] flex flex-col justify-between h-full bg-white/80 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none p-3.5 sm:p-0 rounded-xl sm:rounded-none">
                                <div>
                                    <div className="w-8 h-8 rounded-lg border border-blue-200 bg-white/95 backdrop-blur-xs text-[#0052ff] flex items-center justify-center font-bold text-xs mb-2.5 shadow-2xs">
                                        02
                                    </div>

                                    <h3 className="text-base sm:text-[17px] font-bold text-slate-900 mb-1.5 leading-snug">
                                        Zoho Software Implementation <br className="hidden sm:block" />
                                        &amp; Customization
                                    </h3>
                                    <p className="text-xs sm:text-[12.5px] text-slate-600 mb-3 sm:mb-3.5 leading-relaxed font-normal">
                                        Flexible cloud solutions to manage your sales, marketing, finance and more.
                                    </p>

                                    <ul className="space-y-1.5 mb-3.5 sm:mb-4">
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

                                <button
                                    type="button"
                                    onClick={() => openEnquiryModal("Zoho Software Implementation & Customization")}
                                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#0052ff] hover:text-[#003bb5] transition-colors group/link mt-1 cursor-pointer w-fit text-left"
                                >
                                    <span>Contact Us</span>
                                    <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                                </button>
                            </div>
                        </div>

                    </div>


                    {/* BOTTOM ROW: 3 Cards (Tally, AI Automation, Database Integration) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">

                        {/* 3. Tally Card */}
                        <div
                            id="tally"
                            className="group relative bg-[#fbfcfe] rounded-2xl border border-slate-200/90 p-5 sm:p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-200 flex flex-col justify-between overflow-hidden min-h-0 sm:min-h-[265px] scroll-mt-28"
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

                            <div className="relative z-10 w-full sm:max-w-[70%] md:max-w-[62%] lg:max-w-[58%] flex flex-col justify-between h-full bg-white/80 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none p-3 sm:p-0 rounded-xl sm:rounded-none">
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

                                <button
                                    type="button"
                                    onClick={() => openEnquiryModal("Tally Implementation & Support")}
                                    className="inline-flex items-center gap-1.5 text-[11.5px] sm:text-xs font-bold text-[#0052ff] hover:text-[#003bb5] transition-colors group/link mt-1 cursor-pointer w-fit text-left"
                                >
                                    <span>Contact Us</span>
                                    <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                                </button>
                            </div>
                        </div>

                        {/* 4. AI Solutions & Automation Card */}
                        <div
                            id="ai"
                            className="group relative bg-[#fbfcfe] rounded-2xl border border-slate-200/90 p-5 sm:p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-200 flex flex-col justify-between overflow-hidden min-h-0 sm:min-h-[265px] scroll-mt-28"
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

                            <div className="relative z-10 w-full sm:max-w-[70%] md:max-w-[62%] lg:max-w-[58%] flex flex-col justify-between h-full bg-white/80 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none p-3 sm:p-0 rounded-xl sm:rounded-none">
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

                                <button
                                    type="button"
                                    onClick={() => openEnquiryModal("AI Solutions & Process Automation")}
                                    className="inline-flex items-center gap-1.5 text-[11.5px] sm:text-xs font-bold text-[#0052ff] hover:text-[#003bb5] transition-colors group/link mt-1 cursor-pointer w-fit text-left"
                                >
                                    <span>Contact Us</span>
                                    <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                                </button>
                            </div>
                        </div>

                        {/* 5. Software Integration & Cloud Consulting Card */}
                        <div
                            id="integration"
                            className="group relative bg-[#fbfcfe] rounded-2xl border border-slate-200/90 p-5 sm:p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-200 flex flex-col justify-between overflow-hidden min-h-0 sm:min-h-[265px] scroll-mt-28"
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

                            <div className="relative z-10 w-full sm:max-w-[70%] md:max-w-[62%] lg:max-w-[58%] flex flex-col justify-between h-full bg-white/80 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none p-3 sm:p-0 rounded-xl sm:rounded-none">
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

                                <button
                                    type="button"
                                    onClick={() => openEnquiryModal("Software Integration & Data Migration")}
                                    className="inline-flex items-center gap-1.5 text-[11.5px] sm:text-xs font-bold text-[#0052ff] hover:text-[#003bb5] transition-colors group/link mt-1 cursor-pointer w-fit text-left"
                                >
                                    <span>Contact Us</span>
                                    <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/* =========================================================================
                3. WHY CHOOSE PRIME CLOUD SECTION (Full-Width Banner with Background Image - Desktop/PC only)
            ========================================================================= */}
            <section className="hidden sm:block w-full py-8 sm:py-12 lg:py-16 bg-white">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10">

                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full overflow-hidden rounded-2xl min-h-[260px] sm:min-h-[240px] lg:min-h-[260px] flex items-center p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-100"
                    >
                        {/* Background Image of the Section */}
                        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
                            <Image
                                src="/service/glassa.png"
                                alt="Why Choose Prime Cloud Background"
                                fill
                                priority
                                className="object-cover object-[70%_center] sm:object-left lg:object-center"
                            />
                            {/* Subtle gradient wash on mobile to guarantee crystal clear text contrast without ugly white cutout box */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/30 sm:hidden" />
                        </div>

                        {/* Content Overlay */}
                        <div className="relative z-10 w-full lg:w-[56%] xl:w-[52%] ml-auto flex flex-col justify-center pl-0 sm:pl-4 lg:pl-6 pr-0 sm:pr-4">
                            <h2 className="text-xl sm:text-2xl lg:text-[24px] font-black text-[#0b132b] tracking-tight mb-1.5 leading-snug">
                                Why Choose Prime Cloud?
                            </h2>
                            <p className="text-xs sm:text-[13px] text-slate-600 mb-5 sm:mb-5 font-normal leading-relaxed max-w-lg">
                                We go beyond implementation — we build long-term partnerships with our clients.
                            </p>

                            {/* 4 Feature Items in a Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 pt-1">
                                {/* Item 1 */}
                                <div className="flex flex-col items-start pr-1 sm:pr-2">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50/90 text-[#0052ff] flex items-center justify-center mb-2 shadow-2xs">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                                        Expert Team
                                    </h4>
                                    <p className="text-[10.5px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">
                                        &amp; Domain Knowledge
                                    </p>
                                </div>

                                {/* Item 2 */}
                                <div className="flex flex-col items-start sm:border-l sm:border-slate-200/80 sm:px-2.5">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50/90 text-[#0052ff] flex items-center justify-center mb-2 shadow-2xs">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                                        Tailored Solutions
                                    </h4>
                                    <p className="text-[10.5px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">
                                        for Your Business
                                    </p>
                                </div>

                                {/* Item 3 */}
                                <div className="flex flex-col items-start sm:border-l sm:border-slate-200/80 sm:px-2.5">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50/90 text-[#0052ff] flex items-center justify-center mb-2 shadow-2xs">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                                        On-Time Delivery
                                    </h4>
                                    <p className="text-[10.5px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">
                                        &amp; Dedicated Support
                                    </p>
                                </div>

                                {/* Item 4 */}
                                <div className="flex flex-col items-start sm:border-l sm:border-slate-200/80 sm:pl-2.5">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50/90 text-[#0052ff] flex items-center justify-center mb-2 shadow-2xs">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                                        Scalable
                                    </h4>
                                    <p className="text-[10.5px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">
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
                <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10">

                    {/* Single unified card container like the design */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full rounded-2xl bg-[#f8fbff] border border-blue-100/70 py-5 px-5 sm:py-6 sm:px-8 lg:px-9 shadow-sm"
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
                            <div className="lg:col-span-8 xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-4 lg:gap-1.5 items-start">

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
                                    <div className="hidden lg:flex absolute right-0 top-1/3 -translate-y-1/2 text-slate-300">
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
                                    <div className="hidden lg:flex absolute right-0 top-1/3 -translate-y-1/2 text-slate-300">
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
                                    <div className="hidden lg:flex absolute right-0 top-1/3 -translate-y-1/2 text-slate-300">
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
            <section className="w-full pb-12 sm:pb-16 lg:pb-20 bg-white">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                        className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-6 sm:p-9 lg:px-12 lg:py-8 shadow-[0_12px_32px_rgba(0,82,255,0.18)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                    >
                        {/* Background Artwork */}
                        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
                            <Image
                                src="/banner/cta-banner.png"
                                alt="Services CTA Background"
                                fill
                                priority
                                className="object-cover md:object-fill w-full h-full"
                            />
                        </div>

                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="relative z-10 max-w-xl text-left"
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
                            className="relative z-10 w-full sm:w-auto shrink-0"
                        >
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-[#0052ff] hover:bg-blue-50 font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
                            >
                                <span>Book a Free Consultation</span>
                                <span className="text-base leading-none">&rarr;</span>
                            </Link>
                        </motion.div>

                    </motion.div>
                </div>
            </section>

            {/* =========================================================================
                ENQUIRY / CONTACT MODAL POPUP
            ========================================================================= */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                        {/* Backdrop overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={closeEnquiryModal}
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
                        />

                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 15 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto"
                        >
                            {/* Close Button */}
                            <button
                                type="button"
                                onClick={closeEnquiryModal}
                                aria-label="Close Modal"
                                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Header */}
                            <div className="mb-5 pr-6">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f1fd] mb-2.5 text-[11px] font-bold text-[#0052ff] tracking-tight">
                                    <span>Quick Enquiry</span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black text-[#0b132b] tracking-tight">
                                    Enquire About This Service
                                </h3>
                                {selectedService && (
                                    <p className="text-xs sm:text-[13px] text-[#0052ff] font-semibold mt-1">
                                        {selectedService}
                                    </p>
                                )}
                                <p className="text-xs text-slate-500 mt-1">
                                    Please share your details below and our specialists will reach out promptly.
                                </p>
                            </div>

                            {/* Success Notification */}
                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-medium flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Thank you! Your enquiry has been sent successfully. We will get in touch shortly.</span>
                                </motion.div>
                            )}

                            {/* Error Notification */}
                            {errorMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <span>{errorMessage}</span>
                                </motion.div>
                            )}

                            {/* Enquiry Form */}
                            <form onSubmit={handleFormSubmit} className="space-y-3.5">
                                {/* Row 1: Full Name & Company Name */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {/* Full Name */}
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="Full Name *"
                                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-[13px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052ff]/20 focus:border-[#0052ff] transition-all bg-white text-slate-800"
                                        />
                                    </div>

                                    {/* Company Name */}
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                            placeholder="Company Name"
                                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-[13px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052ff]/20 focus:border-[#0052ff] transition-all bg-white text-slate-800"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Email & Phone Number */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {/* Email */}
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Email Address *"
                                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-[13px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052ff]/20 focus:border-[#0052ff] transition-all bg-white text-slate-800"
                                        />
                                    </div>

                                    {/* Phone Number */}
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Phone Number *"
                                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-[13px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052ff]/20 focus:border-[#0052ff] transition-all bg-white text-slate-800"
                                        />
                                    </div>
                                </div>

                                {/* Row 3: Interested Service Dropdown */}
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                    <select
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0052ff]/20 focus:border-[#0052ff] transition-all bg-white appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled>Select Service *</option>
                                        <option value="Odoo ERP Implementation, Customization & Support">Odoo ERP Implementation, Customization & Support</option>
                                        <option value="Zoho Software Implementation & Customization">Zoho Software Implementation & Customization</option>
                                        <option value="Tally Implementation & Support">Tally Implementation & Support</option>
                                        <option value="AI Solutions & Process Automation">AI Solutions & Process Automation</option>
                                        <option value="Software Integration & Data Migration">Software Integration & Data Migration</option>
                                        <option value="Other Inquiries">Other Inquiries</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Row 4: Message / Description */}
                                <div className="relative">
                                    <div className="absolute top-3 left-3 pointer-events-none text-slate-400">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>
                                    </div>
                                    <textarea
                                        name="message"
                                        rows={3}
                                        required
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Message / Description of requirements *"
                                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-[13px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052ff]/20 focus:border-[#0052ff] transition-all bg-white resize-none text-slate-800"
                                    />
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center justify-end gap-2.5 pt-2">
                                    <button
                                        type="button"
                                        onClick={closeEnquiryModal}
                                        className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="px-6 py-2.5 rounded-xl bg-[#0052ff] hover:bg-[#0047db] active:bg-[#003cb8] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shadow-[#0052ff]/20 hover:shadow-lg hover:shadow-[#0052ff]/30 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        <span>{isSubmitting ? "Submitting..." : "Submit Enquiry"}</span>
                                        <span>&rarr;</span>
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
