"use client"
import React from "react";
import { motion } from "framer-motion";
import { experiences, stats } from "../data/experience";

const ExperienceSection = () => {
    return (
        <section className="w-full py-32 lg:px-10 md:px-8 px-5 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* ═══════════════════════════════════════ */}
                {/* WORK EXPERIENCE                        */}
                {/* ═══════════════════════════════════════ */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[60px] md:text-[80px] lg:text-[100px] font-black uppercase tracking-tighter leading-[0.95] text-center text-[#171717] mb-20"
                >
                    Work
                    <br />
                    Experience
                </motion.h2>

                {/* Experience List */}
                <div className="max-w-[800px] mx-auto flex flex-col">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.role}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="group border-b border-[#e5e5e5] py-8 flex items-center justify-between gap-4"
                        >
                            <h3 className="text-[18px] md:text-[22px] font-bold tracking-tight text-[#171717] group-hover:translate-x-2 transition-transform duration-500">
                                {exp.role}
                            </h3>
                            <div className="text-right shrink-0">
                                <p className="text-[13px] md:text-[14px] font-medium text-[#171717]">
                                    {exp.company}
                                </p>
                                <p className="text-[12px] md:text-[13px] text-[#171717]/50">
                                    {exp.period}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ═══════════════════════════════════════ */}
                {/* SOME NUMBERS                           */}
                {/* ═══════════════════════════════════════ */}
                <div className="mt-40 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left – Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="lg:col-span-4 text-[50px] md:text-[70px] lg:text-[80px] font-black uppercase tracking-tighter leading-[0.95] text-[#171717]"
                    >
                        Some
                        <br />
                        Numbers
                    </motion.h2>

                    {/* Right – Stats Grid */}
                    <div className="lg:col-span-8 grid grid-cols-2 gap-x-16 gap-y-14">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="flex flex-col gap-1"
                            >
                                <p className="text-[48px] md:text-[60px] lg:text-[72px] font-black tracking-tight leading-none text-[#171717]">
                                    {stat.value}
                                    <span className="text-[28px] md:text-[36px] lg:text-[42px] font-bold align-top">
                                        {stat.suffix}
                                    </span>
                                </p>
                                <p className="text-[12px] md:text-[14px] text-[#171717]/50 tracking-wide">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
