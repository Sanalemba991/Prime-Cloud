"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Slug() {
    return (
        <div className="w-full bg-[#fbfbfb] text-slate-900 font-sans antialiased selection:bg-slate-900 selection:text-white">
            {/* =========================================================================
          TOP HERO SECTION
         ========================================================================= */}
            <section className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-14 pt-16 sm:pt-20 pb-12">
                {/* Top Header Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-6 border-b border-slate-200/60 pb-10">
                    <div>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-black tracking-tight text-slate-900 leading-none">
                            Services.
                        </h1>
                    </div>
                    <div className="max-w-xs sm:text-right">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                            Get closer to us
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                            Explore our verified Odoo implementations and see how our systems transform businesses.
                        </p>
                    </div>
                </div>

                {/* Single Premium Image Box (Exact reference style) */}
                <div className="relative mt-10 rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 aspect-video sm:aspect-[21/9] max-h-[540px] w-full shadow-2xl border border-slate-800">
                    <Image
                        src="/service/odoo.png"
                        alt="Odoo ERP System Architecture and Implementation Dashboard"
                        fill
                        className="object-cover object-center filter contrast-110 brightness-95"
                        priority
                    />
                    {/* Subtle vignette overlay matching the screenshot */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-slate-950/50 pointer-events-none" />
                </div>

                {/* Bottom Caption & Action Row (Exact reference style) */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 px-1">
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-mono font-bold text-slate-400">/01</span>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium">
                            In this overview you can see our whole Odoo design and implementation process, from start to finish.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-md cursor-pointer shrink-0"
                    >
                        <span>Read more</span>
                        <span>&rarr;</span>
                    </Link>
                </div>
            </section>

            {/* =========================================================================
          EDITORIAL ASYMMETRIC GRID (Bordered Clean White Minimalist Layout)
         ========================================================================= */}
            <section className="border-t border-slate-200 bg-white">
                <div className="max-w-[1280px] mx-auto divide-y divide-slate-200">
                    {/* ROW 1: Odoo ERP Implementation (Big Left) | Cloud Hosting & Odoo.sh (Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                        {/* Odoo ERP Implementation (Big Hero Tile) */}
                        <div className="lg:col-span-7 p-8 sm:p-14 lg:p-20 flex flex-col justify-between group hover:bg-slate-50/50 transition-colors">
                            <div>
                                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest block mb-4">
                                    01 / Flagship Solution
                                </span>
                                <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-slate-900 leading-[1.08]">
                                    Odoo ERP <br />
                                    Implementation
                                </h2>
                            </div>
                            <div className="mt-10 sm:mt-16 max-w-lg">
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                                    All our Odoo deployments are carefully designed and configured in sandbox environments before being released to production by our certified architects. You receive a dedicated team ready to listen and build on your real operational demands.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    <span className="text-[11px] font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                                        End-to-End Delivery
                                    </span>
                                    <span className="text-[11px] font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                                        SOP Documentation
                                    </span>
                                    <span className="text-[11px] font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                                        Role-Based Access
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Cloud & Hosting Infrastructure (Top Right) */}
                        <div className="lg:col-span-5 p-8 sm:p-14 lg:p-20 flex flex-col justify-between group hover:bg-slate-50/50 transition-colors">
                            <div>
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-4">
                                    02 / Infrastructure
                                </span>
                                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                                    Cloud Hosting &amp; <br />
                                    Odoo.sh
                                </h3>
                            </div>
                            <div className="mt-10 sm:mt-16">
                                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                                    Our secured cloud architectures run on dedicated high-performance Odoo.sh and automated staging clusters, continuous automated daily backups, SSL security, and 99.9% uptime SLAs worldwide.
                                </p>
                                <div className="mt-6">
                                    <span className="inline-flex items-center text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        High-availability servers &rarr;
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ROW 2: Customization (Narrow Left) | Inventory & Manufacturing MRP (Big Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                        {/* Module Customization & API (Left) */}
                        <div className="lg:col-span-5 p-8 sm:p-14 lg:p-20 flex flex-col justify-between group hover:bg-slate-50/50 transition-colors">
                            <div>
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-4">
                                    03 / Tailored Logic
                                </span>
                                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                                    Custom Modules &amp; <br />
                                    API Integration
                                </h3>
                            </div>
                            <div className="mt-10 sm:mt-16">
                                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                                    Custom fields, multi-level approvals, payment gateways, WhatsApp notifications, and third-party logistics connected seamlessly via robust REST/XML-RPC APIs.
                                </p>
                            </div>
                        </div>

                        {/* Inventory, MRP & E-Commerce (Big Right) */}
                        <div className="lg:col-span-7 p-8 sm:p-14 lg:p-20 flex flex-col justify-between group hover:bg-slate-50/50 transition-colors">
                            <div>
                                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest block mb-4">
                                    04 / Operations
                                </span>
                                <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-slate-900 leading-[1.08]">
                                    Inventory &amp; <br />
                                    Manufacturing MRP
                                </h2>
                            </div>
                            <div className="mt-10 sm:mt-16 max-w-lg">
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                                    Our inventory and manufacturing systems are tailored to synchronize multi-warehouse replenishment, raw materials bill of materials (BoM), barcode terminal scanning, and automated lot traceability across all touchpoints.
                                </p>
                                <div className="mt-6">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-full transition-all"
                                    >
                                        <span>Read more</span>
                                        <span>&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ROW 3: Financial & Accounting (Left) | Training & 24/7 SLA Support (Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                        {/* Accounting & VAT Localization (Left) */}
                        <div className="lg:col-span-7 p-8 sm:p-14 lg:p-20 flex flex-col justify-between group hover:bg-slate-50/50 transition-colors">
                            <div>
                                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest block mb-4">
                                    05 / Finance
                                </span>
                                <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-slate-900 leading-[1.08]">
                                    Accounting &amp; <br />
                                    VAT Localization
                                </h2>
                            </div>
                            <div className="mt-10 sm:mt-16 max-w-lg">
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                                    We have a dedicated certified Odoo finance team who specialize in configuring charts of accounts, automatic bank feeds, multi-currency valuations, e-invoicing, and region-compliant VAT and corporate tax filings.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    <span className="text-[11px] font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                                        Multi-Currency
                                    </span>
                                    <span className="text-[11px] font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                                        Real-time Balance Sheet
                                    </span>
                                    <span className="text-[11px] font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                                        E-Invoicing Compliant
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Ongoing SLA & User Training (Right) */}
                        <div className="lg:col-span-5 p-8 sm:p-14 lg:p-20 flex flex-col justify-between group hover:bg-slate-50/50 transition-colors">
                            <div>
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-4">
                                    06 / Support
                                </span>
                                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                                    Training &amp; <br />
                                    24/7 Support
                                </h3>
                            </div>
                            <div className="mt-10 sm:mt-16">
                                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                                    Our hands-on training workshops and dedicated SLA ticketing support ensure high user adoption, fast resolution times, and peace of mind for your management team.
                                </p>
                                <div className="mt-6">
                                    <span className="inline-flex items-center text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        Explore support packages &rarr;
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================================
          BOTTOM SECTION: CONTACT CTA BANNER
         ========================================================================= */}
            <section className="border-t border-slate-200 bg-[#fbfbfb] py-20 sm:py-28">
                <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                    <div>
                        <span className="text-xs font-mono font-bold text-slate-400 block mb-2">
                            / LET&apos;S TALK
                        </span>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
                            Ready to automate with Odoo?
                        </h3>
                        <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-md">
                            Schedule a technical discovery session with our senior implementation consultants.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105 cursor-pointer"
                    >
                        <span>Book a Consultation</span>
                        <span>&rarr;</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
