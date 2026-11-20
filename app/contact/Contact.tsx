"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to submit message");
            }

            setIsSubmitted(true);
            setFormData({
                fullName: "",
                companyName: "",
                email: "",
                phone: "",
                service: "",
                message: "",
            });
            setTimeout(() => setIsSubmitted(false), 6000);
        } catch (err: any) {
            setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full bg-white select-none overflow-hidden">

            {/* ================= 1. HERO / BANNER SECTION ================= */}
            <section className="relative w-full pt-12 pb-16 sm:pb-20 lg:py-24 bg-white overflow-hidden select-none">
                {/* Background Image Layer */}
                <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
                    {/* Mobile Background Image */}
                    <Image
                        src="/banner/Prime Cloud Modern Reception Lobby.png"
                        alt="Contact Banner Background Mobile"
                        fill
                        priority
                        className="block sm:hidden object-cover object-right"
                    />
                    {/* Desktop / Tablet Background Image */}
                    <Image
                        src="/banner/contact.png"
                        alt="Contact Banner Background"
                        fill
                        priority
                        className="hidden sm:block object-cover object-right"
                    />
                </div>

                <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

                        {/* Left Column: Headings & 3 Trust Badges */}
                        <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4">
                            {/* Pill Tag */}
                            <motion.div
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                                className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#e8f1fd] text-[12px] font-bold text-[#0052ff] mb-5 tracking-tight shadow-2xs"
                            >
                                Contact Us
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0f172a] tracking-tight leading-[1.16] mb-5"
                            >
                                Let&apos;s Build <br />
                                Your Next Solution <br />
                                <span className="text-[#0052ff]">Together</span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="text-[12px] sm:text-sm text-slate-500 font-normal leading-relaxed max-w-lg mb-6 sm:mb-8"
                            >
                                <span className="sm:hidden">
                                    Have a project or question? We&apos;re here to help you with ERP and AI solutions.
                                </span>
                                <span className="hidden sm:inline">
                                    Have a project, a question, or need expert advice? We&apos;re here to help you with ERP, business software, and AI solutions.
                                </span>
                            </motion.p>

                            {/* 3 Trust Badges (Quick Response, Expert Team, Trusted Support) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="flex items-center pt-2 max-w-md w-full"
                            >
                                {/* Badge 1: Quick Response */}
                                <div className="flex-1 flex flex-col items-center text-center px-2">
                                    <div className="text-[#0052ff] mb-2.5">
                                        <svg className="w-5 h-5 fill-none stroke-[#0052ff] stroke-[2.4]" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h8l-2 8 11-13h-7l2-7z" />
                                        </svg>
                                    </div>
                                    <span className="text-[13px] font-extrabold text-[#0a1128] tracking-tight">Quick Response</span>
                                </div>

                                {/* Divider line */}
                                <div className="w-[1px] h-9 bg-slate-200/80 shrink-0" />

                                {/* Badge 2: Expert Team */}
                                <div className="flex-1 flex flex-col items-center text-center px-2">
                                    <div className="text-[#0052ff] mb-2.5">
                                        <svg className="w-5 h-5 fill-none stroke-[#0052ff] stroke-[2.2]" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-[13px] font-extrabold text-[#0a1128] tracking-tight">Expert Team</span>
                                </div>

                                {/* Divider line */}
                                <div className="w-[1px] h-9 bg-slate-200/80 shrink-0" />

                                {/* Badge 3: Trusted Support */}
                                <div className="flex-1 flex flex-col items-center text-center px-2">
                                    <div className="text-[#0052ff] mb-2.5">
                                        <svg className="w-5 h-5 fill-none stroke-[#0052ff] stroke-[2.2]" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <span className="text-[13px] font-extrabold text-[#0a1128] tracking-tight">Trusted Support</span>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= 2. GET IN TOUCH & INTERACTIVE CONTACT FORM ================= */}
            <section id="contact-form" className="w-full py-16 sm:py-20 bg-white">
                <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

                        {/* Left: Interactive Form Card (7 Cols) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-100"
                        >
                            <h2 className="text-2xl sm:text-[26px] font-black text-[#0a1128] tracking-tight mb-2">
                                Send Us a Message
                            </h2>
                            <p className="text-[13px] sm:text-sm text-slate-500 mb-7 font-normal">
                                Fill in the details below and our team will get back to you within 24 hours.
                            </p>

                            {isSubmitted && (
                                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium flex items-center gap-2.5">
                                    <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Thank you! Your message has been sent successfully. We will contact you soon.
                                </div>
                            )}

                            {errorMessage && (
                                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium flex items-center gap-2.5">
                                    <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    {errorMessage}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Row 1: Full Name & Company Name */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Full Name */}
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Full Name *"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052ff]/20 focus:border-[#0052ff] transition-all bg-white text-slate-800"
                                        />
                                    </div>

                                    {/* Company Name */}
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            placeholder="Company Name"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052ff]/20 focus:border-[#0052ff] transition-all bg-white text-slate-800"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Email & Phone Number */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Email */}
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address *"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052ff]/20 focus:border-[#0052ff] transition-all bg-white text-slate-800"
                                        />
                                    </div>

                                    {/* Phone Number */}
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052ff]/20 focus:border-[#0052ff] transition-all bg-white text-slate-800"
                                        />
                                    </div>
                                </div>

                                {/* Row 3: How can we help you? */}
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                    <select
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0052ff]/20 focus:border-[#0052ff] transition-all bg-white appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled>How can we help you? *</option>
                                        <option value="ERP Solutions & Implementation">ERP Solutions & Implementation</option>
                                        <option value="Custom Software Development">Custom Software Development</option>
                                        <option value="AI Solutions & Machine Learning">AI Solutions & Machine Learning</option>
                                        <option value="Cloud Migration & DevOps">Cloud Migration & DevOps</option>
                                        <option value="IT Consulting & Advisory">IT Consulting & Advisory</option>
                                        <option value="Other Inquiries">Other Inquiries</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Row 4: Your Message */}
                                <div className="relative">
                                    <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>
                                    </div>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message *"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052ff]/20 focus:border-[#0052ff] transition-all bg-white resize-none text-slate-800"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3.5 px-6 rounded-xl bg-[#0052ff] hover:bg-[#0047db] active:bg-[#003cb8] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#0052ff]/20 hover:shadow-lg hover:shadow-[#0052ff]/30 transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                                    <span>→</span>
                                </button>
                            </form>
                        </motion.div>

                        {/* Right: Get in Touch Info (5 Cols) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:col-span-5 flex flex-col gap-6 pl-0 lg:pl-2"
                        >
                            <div>
                                <h2 className="text-2xl sm:text-[26px] font-black text-[#0a1128] tracking-tight mb-2">
                                    Get in Touch
                                </h2>
                                <p className="text-[13px] sm:text-sm text-slate-500 font-normal leading-relaxed">
                                    Reach out to us directly through any of the following channels.
                                </p>
                            </div>

                            <div className="space-y-3.5">
                                {/* Call Us */}
                                <a
                                    href="tel:+971501234567"
                                    className="flex items-center gap-4 p-4 hover:border-blue-200 hover:shadow-md transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-[#edf4ff] text-[#0052ff] flex items-center justify-center shrink-0 group-hover:bg-[#0052ff] group-hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-[#0a1128]">Call Us</span>
                                        <span className="text-[14px] font-bold text-[#0a1128] group-hover:text-[#0052ff] transition-colors">
                                            +971 50 123 4567
                                        </span>
                                    </div>
                                </a>

                                {/* Email Us */}
                                <a
                                    href="mailto:info@primecloudsolutionsllc.com"
                                    className="flex items-center gap-4 p-4 hover:border-blue-200 hover:shadow-md transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-[#edf4ff] text-[#0052ff] flex items-center justify-center shrink-0 group-hover:bg-[#0052ff] group-hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-xs font-bold text-[#0a1128]">Email Us</span>
                                        <span className="text-[14px] font-bold text-[#0a1128] group-hover:text-[#0052ff] transition-colors truncate">
                                            info@primecloudsolutionsllc.com
                                        </span>
                                    </div>
                                </a>

                                {/* Visit Our Office */}
                                <div className="flex items-center gap-4 p-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[#edf4ff] text-[#0052ff] flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-[#0a1128]">Visit Our Office</span>
                                        <span className="text-[14px] font-bold text-[#0a1128]">
                                            Dubai, United Arab Emirates
                                        </span>
                                    </div>
                                </div>

                                {/* Divider line between Visit Our Office and Office Hours */}
                                <div className="w-full border-t border-slate-200/80 my-2" />

                                {/* Office Hours */}
                                <div className="flex items-start gap-4 p-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[#edf4ff] text-[#0052ff] flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-[#0a1128]">Office Hours</span>
                                        <span className="text-[13px] font-bold text-[#0a1128] mt-0.5">
                                            Mon – Fri: 9:00 AM – 6:00 PM (GST)
                                        </span>
                                        <span className="text-[12px] text-slate-500 mt-0.5">
                                            Sat – Sun: Closed
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ================= 3. OUR OFFICE DUBAI BANNER CARD ================= */}
            <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 mt-6 sm:mt-8">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full rounded-2xl overflow-hidden shadow-lg min-h-[160px] sm:min-h-[190px] flex items-center justify-between"
                >
                    {/* Background Dubai Skyline with blue gradient blend */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/contact/dubai.png"
                            alt="Dubai Skyline"
                            className="w-full h-full object-cover object-center"
                        />
                        {/* Gradient transition into deep brand blue on the right / mobile full overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#092b6b]/90 via-[#092b6b]/95 to-[#051c48] sm:from-transparent sm:via-[#092b6b]/85 sm:to-[#051c48]" />
                    </div>

                    {/* Content inside Dubai banner */}
                    <div className="relative z-10 w-full p-5 sm:p-8 flex items-center justify-start sm:justify-end">
                        <div className="flex flex-col items-start text-left text-white max-w-full sm:max-w-[280px]">
                            {/* Pin icon + Our Office */}
                            <div className="flex items-center gap-2 mb-2">
                                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                                </svg>
                                <h3 className="text-lg sm:text-2xl font-black tracking-tight text-white leading-none">
                                    Our Office
                                </h3>
                            </div>

                            {/* Details */}
                            <p className="text-[13px] sm:text-[13.5px] font-semibold text-white/95 leading-snug">
                                Prime Cloud Solutions LLC
                            </p>
                            <p className="text-[11.5px] sm:text-[12px] text-white/80 mb-3 sm:mb-3.5 leading-snug">
                                Dubai, United Arab Emirates
                            </p>

                            {/* Button */}
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-white text-[#0a1128] hover:bg-slate-100 text-[11px] sm:text-[11.5px] font-bold transition-all shadow-md group"
                            >
                                <span>View on Google Maps</span>
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ================= 4. WHY GET IN TOUCH WITH US? (4 FEATURES ROW) ================= */}
            <div className="max-w-[1240px] mb-10 mx-auto px-5 sm:px-8 lg:px-10 mt-14 sm:mt-18">
                {/* Section title with subtle lines */}
                <div className="flex items-center justify-center gap-5 mb-10">
                    <div className="h-[1.5px] bg-slate-200 flex-1 max-w-[140px] hidden sm:block" />
                    <h3 className="text-xl sm:text-[23px] font-black text-[#001038] tracking-tight text-center">
                        Why <span className="text-blue-900">Get in Touch With Us?</span>
                    </h3>
                    <div className="h-[1.5px] bg-slate-200 flex-1 max-w-[140px] hidden sm:block" />
                </div>

                {/* 4 Feature Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center">
                    {/* Item 1: Free Consultation */}
                    <div className="flex items-center gap-3.5">
                        <div className="w-[52px] h-[52px] rounded-2xl bg-[#eef5ff] text-[#0052ff] flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6 fill-none stroke-[#0052ff] stroke-2" viewBox="0 0 24 24">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                                <circle cx="8" cy="15" r="1" fill="#0052ff" />
                                <circle cx="12" cy="15" r="1" fill="#0052ff" />
                                <circle cx="16" cy="15" r="1" fill="#0052ff" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-[14px] font-extrabold text-[#001038] mb-0.5 leading-snug">Free Consultation</h4>
                            <p className="text-[12px] text-slate-500 font-normal leading-snug">Discuss your requirements with our experts.</p>
                        </div>
                    </div>

                    {/* Item 2: Tailored Solutions */}
                    <div className="flex items-center gap-3.5">
                        <div className="w-[52px] h-[52px] rounded-2xl bg-[#eef5ff] text-[#0052ff] flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6 fill-none stroke-[#0052ff] stroke-2" viewBox="0 0 24 24">
                                <line x1="4" y1="21" x2="4" y2="14" />
                                <line x1="4" y1="10" x2="4" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12" y2="3" />
                                <line x1="20" y1="21" x2="20" y2="16" />
                                <line x1="20" y1="12" x2="20" y2="3" />
                                <line x1="1" y1="14" x2="7" y2="14" />
                                <line x1="9" y1="8" x2="15" y2="8" />
                                <line x1="17" y1="16" x2="23" y2="16" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-[14px] font-extrabold text-[#001038] mb-0.5 leading-snug">Tailored Solutions</h4>
                            <p className="text-[12px] text-slate-500 font-normal leading-snug">Get recommendations for your business needs.</p>
                        </div>
                    </div>

                    {/* Item 3: Fast Response */}
                    <div className="flex items-center gap-3.5">
                        <div className="w-[52px] h-[52px] rounded-2xl bg-[#eef5ff] text-[#0052ff] flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6 fill-[#0052ff]" viewBox="0 0 24 24">
                                <path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-[14px] font-extrabold text-[#001038] mb-0.5 leading-snug">Fast Response</h4>
                            <p className="text-[12px] text-slate-500 font-normal leading-snug">We aim to get back to you within 24 hours.</p>
                        </div>
                    </div>

                    {/* Item 4: End-to-End Support */}
                    <div className="flex items-center gap-3.5">
                        <div className="w-[52px] h-[52px] rounded-2xl bg-[#eef5ff] text-[#0052ff] flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6 fill-none stroke-[#0052ff] stroke-2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-[14px] font-extrabold text-[#001038] mb-0.5 leading-snug">End-to-End Support</h4>
                            <p className="text-[12px] text-slate-500 font-normal leading-snug">From consultation to implementation and beyond.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
