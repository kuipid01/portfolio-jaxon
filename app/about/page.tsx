"use client"
import React from "react";
import { motion } from "framer-motion";
import { DarkBtn } from "../components/buttons";
import Footer from "../components/footer";
import { Award, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const education = [
    {
        years: "2016-2021",
        degree: "B.Eng. Mechanical Engineering",
        school: "Federal University of Technology, Minna (FUTMINNA)",
        description: "Built strong analytical and systems-thinking foundations that now shape how I design and engineer reliable software products."
    },
    {
        years: "2022",
        degree: "Web Development Certificate",
        school: "freeCodeCamp (Online)",
        description: "Completed a practical web development track covering modern frontend and backend engineering fundamentals."
    }
];

const awards: { name: string; description: string; year: string }[] = [];

const whyMe = [
    {
        id: "01",
        title: "Builder mindset",
        description: "I enjoy turning ideas into production-ready products, from architecture decisions to polished UI details."
    },
    {
        id: "02",
        title: "Frontend + backend balance",
        description: "I work across the stack, so interfaces stay intuitive while APIs, data models, and services stay solid."
    },
    {
        id: "03",
        title: "Fintech product thinking",
        description: "I prioritize data accuracy, reliability, and trust, especially where payments, lending, and customer records are involved."
    },
    {
        id: "04",
        title: "Calm under pressure",
        description: "I debug quickly, communicate clearly, and keep delivery moving when systems get messy."
    },
    {
        id: "05",
        title: "Clean, maintainable code",
        description: "I prefer readable structure, clear boundaries, and practical patterns that teams can extend with confidence."
    },
    {
        id: "06",
        title: "Reliable teammate",
        description: "I collaborate well with product, design, and engineering teams, and I care about shipping useful outcomes."
    }
];

const process = [
    {
        id: "STEP 01",
        title: "Discovery",
        description: "In-depth research and discovery to understand project goals, audience needs, and market landscape."
    },
    {
        id: "STEP 02",
        title: "Research",
        description: "Gathering insights and inspiration to inform the design process and establish a solid creative direction."
    },
    {
        id: "STEP 03",
        title: "Implementation",
        description: "Bringing designs to life through careful implementation, rapid prototyping, and iterative testing."
    },
    {
        id: "STEP 04",
        title: "Management",
        description: "Managing projects efficiently to ensure timely delivery, maintaining high quality standards at every stage."
    }
];

const reviews = [
    {
        text: "Stephen helped us stabilize a fintech lending workflow end-to-end. He improved backend reliability, tightened API responses, and still delivered clean frontend experiences for our ops team.",
        author: "Amaka",
        position: "Product Lead, Fintech"
    },
    {
        text: "From dashboard interfaces to service-layer fixes, Stephen consistently shipped fast without sacrificing quality. He thinks like an engineer and communicates like a partner.",
        author: "Tunde",
        position: "Engineering Manager"
    }
];

const marqueeLogos = ["REACT", "NEXTJS", "TYPESCRIPT", "NODEJS", "GOLANG", "POSTGRES", "REDIS", "AWS"];

export default function AboutPage() {
    return (
        <div className="flex flex-col bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="w-full pt-32 pb-20 lg:px-10 md:px-8 px-5">
                <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[60px] md:text-[100px] lg:text-[140px] font-black uppercase tracking-tighter leading-[0.85] mb-12"
                    >
                        I&apos;M Stephen <br /> Adegoke
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-[600px] aspect-[4/5] bg-gray-100 mb-12 overflow-hidden"
                    >
                        <Image
                            src="/images/jaxon1.png"
                            alt="Stephen Adegoke"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-[500px]"
                    >
                        <p className="text-[14px] md:text-[16px] text-[#171717]/60 font-medium leading-relaxed mb-8">
                            I&apos;m Stephen Adegoke, a fullstack software engineer focused on building reliable digital products across backend systems and frontend experiences. I care about clean architecture, smooth user flows, and software that scales with real business needs.
                        </p>
                        <div className="flex justify-center">
                            <DarkBtn text="Hire me" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Marquee Section */}
            <section className="w-full py-20 border-y border-[#f0f0f0] overflow-hidden">
                <div className="flex whitespace-nowrap">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="flex gap-20 items-center px-10"
                    >
                        {[...marqueeLogos, ...marqueeLogos].map((logo, i) => (
                            <span key={i} className="text-[20px] md:text-[24px] font-black tracking-widest text-[#171717]/20 uppercase">
                                {logo}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Education Section */}
            <section className="w-full py-32 lg:px-10 md:px-8 px-5 border-b border-[#f0f0f0]">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
                    <div className="lg:col-span-5">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-[50px] md:text-[80px] font-black uppercase tracking-tighter leading-none"
                        >
                            EDUCATION
                        </motion.h2>
                    </div>
                    <div className="lg:col-span-1" />
                    <div className="lg:col-span-6 flex flex-col gap-12">
                        {education.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-12 border-b border-[#f0f0f0] last:border-0"
                            >
                                <span className="md:col-span-3 text-[14px] font-bold text-[#171717]/40">{item.years}</span>
                                <div className="md:col-span-9">
                                    <h3 className="text-[20px] md:text-[24px] font-bold mb-2">{item.degree}</h3>
                                    <p className="text-[14px] font-bold text-[#171717]/60 mb-4">{item.school}</p>
                                    <p className="text-[14px] text-[#171717]/50 leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="w-full py-32 lg:px-10 md:px-8 px-5 border-b border-[#f0f0f0]">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
                    <div className="lg:col-span-5">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-[50px] md:text-[80px] font-black uppercase tracking-tighter leading-none"
                        >
                            AWARDS
                        </motion.h2>
                    </div>
                    <div className="lg:col-span-1" />
                    <div className="lg:col-span-6 flex flex-col">
                        {awards.length > 0 ? (
                            awards.map((award, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className="flex justify-between items-start py-10 border-b border-[#f0f0f0] last:border-0"
                                >
                                    <div className="max-w-[80%]">
                                        <h3 className="text-[20px] md:text-[24px] font-bold mb-2">{award.name}</h3>
                                        <p className="text-[14px] text-[#171717]/50 leading-relaxed">{award.description}</p>
                                    </div>
                                    <span className="text-[14px] font-bold text-[#171717]/40">{award.year}</span>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="py-12 px-8 border border-[#f0f0f0] bg-[#fcfcfc] flex items-start gap-4"
                            >
                                <Award size={22} className="text-[#171717]/60 mt-0.5" />
                                <div>
                                    <h3 className="text-[22px] font-bold mb-2">Not Yet Awarded</h3>
                                    <p className="text-[14px] text-[#171717]/55 leading-relaxed">
                                        No shelf trophies yet, just shipped products, happy users, and strong engineering outcomes. The plaques can catch up later.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* Why Choose Me Section */}
            <section className="w-full py-32 lg:px-10 md:px-8 px-5 border-b border-[#f0f0f0]">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
                    <div className="lg:col-span-5">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-[50px] md:text-[80px] font-black uppercase tracking-tighter leading-none"
                        >
                            WHY <br /> CHOOSE <br /> ME?
                        </motion.h2>
                    </div>
                    <div className="lg:col-span-1" />
                    <div className="lg:col-span-6 flex flex-col">
                        {whyMe.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="grid grid-cols-12 gap-4 py-10 border-b border-[#f0f0f0] last:border-0 group cursor-default"
                            >
                                <span className="col-span-2 text-[14px] font-black text-[#171717]/20">{item.id}</span>
                                <div className="col-span-10">
                                    <h3 className="text-[20px] md:text-[24px] font-bold mb-2 group-hover:translate-x-2 transition-transform duration-500">{item.title}</h3>
                                    <p className="text-[14px] text-[#171717]/50 leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Working Process Section */}
            <section className="w-full py-32 lg:px-10 md:px-8 px-5 border-b border-[#f0f0f0]">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
                    <div className="lg:col-span-5">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-[50px] md:text-[80px] font-black uppercase tracking-tighter leading-none"
                        >
                            WORKING <br /> PROCESS
                        </motion.h2>
                    </div>
                    <div className="lg:col-span-1" />
                    <div className="lg:col-span-6 flex flex-col">
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="grid grid-cols-12 gap-4 py-10 border-b border-[#f0f0f0] last:border-0"
                            >
                                <span className="col-span-3 text-[12px] font-black text-[#171717]/30 tracking-widest">{item.id}</span>
                                <div className="col-span-9">
                                    <h3 className="text-[20px] md:text-[24px] font-bold mb-2">{item.title}</h3>
                                    <p className="text-[14px] text-[#171717]/50 leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Reviews Section */}
            <section className="w-full py-32 lg:px-10 md:px-8 px-5">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex justify-between items-end mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-[50px] md:text-[80px] font-black uppercase tracking-tighter leading-none"
                        >
                            CLIENT <br /> REVIEWS
                        </motion.h2>
                        <div className="flex gap-4">
                            <button className="w-12 h-12 flex items-center justify-center bg-black text-white hover:bg-[#171717] transition-colors">
                                <ChevronLeft size={20} />
                            </button>
                            <button className="w-12 h-12 flex items-center justify-center bg-black text-white hover:bg-[#171717] transition-colors">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {reviews.map((review, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="p-12 bg-[#f9f9f9] flex flex-col gap-10"
                            >
                                <div className="flex gap-1 text-black">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="black" />)}
                                </div>
                                <p className="text-[20px] md:text-[24px] font-bold leading-snug">
                                    &ldquo;{review.text}&rdquo;
                                </p>
                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center font-bold text-[14px]">
                                        {review.author[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[16px]">{review.author}</h4>
                                        <p className="text-[13px] text-[#171717]/40 font-medium">{review.position}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
}
