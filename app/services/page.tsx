"use client"
import React from "react";
import { motion } from "framer-motion";
import { DarkBtn } from "../components/buttons";
import Footer from "../components/footer";

const services = [
    {
        id: "01",
        title: "Backend\n& APIs",
        shortTitle: "Backend & APIs",
        description:
            "Building high-performance, secure, and scalable server-side systems and robust API architectures that power complex applications. From database design to microservices, I engineer backends that handle real-world scale.",
        offerings: [
            "RESTful & GraphQL APIs",
            "Database architecture",
            "Authentication & security",
            "Microservices design",
            "Server optimization",
        ],
        image: "https://images.unsplash.com/photo-1635405074683-96d6921a2a2c?q=80&w=2000",
    },
    {
        id: "02",
        title: "Frontend\nEngineering",
        shortTitle: "Frontend Engineering",
        description:
            "Creating responsive, high-performance, and pixel-perfect user interfaces with a focus on speed, SEO, and accessibility. I bring designs to life with clean, maintainable code and smooth interactions.",
        offerings: [
            "Component architecture",
            "Performance optimization",
            "Responsive layouts",
            "Animation & interactions",
            "SEO & accessibility",
        ],
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000",
    },
    {
        id: "03",
        title: "System\nDesign",
        shortTitle: "System Design",
        description:
            "Designing distributed systems and infrastructure that handle massive scale, ensuring high availability and system reliability. I architect solutions that grow with your business and withstand real-world demands.",
        offerings: [
            "Cloud infrastructure",
            "CI/CD pipelines",
            "Load balancing & scaling",
            "Monitoring & logging",
            "Disaster recovery",
        ],
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000",
    },
    {
        id: "04",
        title: "Mobile\nDevelopment",
        shortTitle: "Mobile Development",
        description:
            "Developing cross-platform mobile applications that provide native-level performance and seamless user experiences across devices. From concept to app store, I build mobile products people love to use.",
        offerings: [
            "Cross-platform apps",
            "Native performance",
            "Offline-first architecture",
            "Push notifications",
            "App store deployment",
        ],
        image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2000",
    },
    {
        id: "05",
        title: "UI / UX\nThinking",
        shortTitle: "UI / UX Thinking",
        description:
            "Crafting intuitive and beautiful digital experiences by blending user-centric research with modern aesthetic principles. I design interfaces that feel natural, reduce friction, and delight users at every step.",
        offerings: [
            "User interface design",
            "Prototyping",
            "UX design and usability",
            "Design system",
            "User flows and wireframes",
        ],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000",
    },
    {
        id: "06",
        title: "Product\nArchitecture",
        shortTitle: "Product Architecture",
        description:
            "Planning the technical foundation of digital products from ideation to launch, ensuring long-term growth and stable evolution. I help teams make the right technical decisions early so products scale smoothly.",
        offerings: [
            "Technical strategy",
            "MVP scoping & planning",
            "Scalability audits",
            "Architecture documentation",
            "Team & process setup",
        ],
        image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=2000",
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Header */}
            <section className="w-full pt-16 pb-10 lg:px-10 md:px-8 px-5 bg-white">
                <div className="max-w-[1400px] mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="text-[50px] md:text-[80px] lg:text-[110px] font-black uppercase tracking-tighter leading-[0.95] text-[#171717]"
                    >
                        What&apos;s
                        <br />
                        Available?
                    </motion.h1>
                </div>
            </section>

            {/* Choose Services — Compact List */}
            <section className="w-full py-32 lg:px-10 md:px-8 px-5 bg-white border-t border-[#f0f0f0]">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
                    {/* Left — Heading */}
                    <div className="lg:col-span-5">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="text-[60px] md:text-[80px] lg:text-[100px] font-black uppercase tracking-tighter leading-none text-[#171717] sticky top-32"
                        >
                            Choose
                            <br />
                            Services
                        </motion.h2>
                    </div>

                    {/* Right — Service List */}
                    <div className="lg:col-span-7 flex flex-col">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.08,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="group border-t border-[#f0f0f0] first:border-t-0 py-10"
                            >
                                <div className="grid grid-cols-12 items-center gap-4">
                                    <span className="col-span-2 text-[13px] font-black text-black/70 tracking-widest">
                                        [{service.id}]
                                    </span>
                                    <h3 className="col-span-10 text-[24px] md:text-[32px] font-bold tracking-tighter text-[#171717] leading-none text-right group-hover:translate-x-[-8px] transition-transform duration-500">
                                        {service.shortTitle}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                        <div className="border-t border-[#f0f0f0]" />
                    </div>
                </div>
            </section>

            {/* Individual Service Detail Sections */}
            {services.map((service, serviceIdx) => (
                <section
                    key={service.id}
                    className="w-full bg-white"
                >
                    {/* Title + Offerings Row */}
                    <div className="border-t border-[#f0f0f0] py-24 lg:py-32 lg:px-10 md:px-8 px-5">
                        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                            {/* Left — Title & Description */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="lg:col-span-5 flex flex-col gap-8"
                            >
                                <h3 className="text-[50px] md:text-[70px] lg:text-[90px] font-black uppercase tracking-tighter leading-[0.9] text-[#171717] whitespace-pre-line">
                                    {service.title}
                                </h3>

                                <div className="flex flex-col gap-4 max-w-[380px]">
                                    <p className="text-[13px] md:text-[14px] text-[#171717]/60 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <DarkBtn
                                        text="Contact Now"
                                        className="mt-2 self-start"
                                    />
                                </div>
                            </motion.div>

                            {/* Right — Numbered Offerings List */}
                            <div className="lg:col-span-7 flex flex-col">
                                {service.offerings.map((offering, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{
                                            duration: 0.6,
                                            delay: i * 0.06,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        className="group border-t border-[#f0f0f0] first:border-t-0 py-8"
                                    >
                                        <div className="grid grid-cols-12 items-center gap-4">
                                            <span className="col-span-3 md:col-span-2 text-[13px] font-black text-black/30 tracking-widest">
                                                [{String(i + 1).padStart(2, "0")}]
                                            </span>
                                            <h4 className="col-span-9 md:col-span-10 text-[18px] md:text-[22px] font-bold tracking-tight text-[#171717] text-right group-hover:translate-x-[-8px] transition-transform duration-500">
                                                {offering}
                                            </h4>
                                        </div>
                                    </motion.div>
                                ))}
                                <div className="border-t border-[#f0f0f0]" />
                            </div>
                        </div>
                    </div>

                    {/* Full-Width Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="w-full lg:px-10 md:px-8 px-5 pb-24 lg:pb-32"
                    >
                        <div className="max-w-[1400px] mx-auto">
                            <div className="relative w-full aspect-16/9 overflow-hidden bg-[#f5f5f5] group">
                                <img
                                    src={service.image}
                                    alt={`${service.shortTitle} showcase`}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                            </div>
                        </div>
                    </motion.div>
                </section>
            ))}

            <Footer />
        </div>
    );
}
