"use client"
import React from "react";
import { motion } from "framer-motion";
import { DarkBtn } from "./buttons";

const services = [
    {
        id: "01",
        title: "Backend\n& APIs",
        description:
            "Building high-performance, secure, and scalable server-side systems and robust API architectures that power complex applications. From database design to microservices, I engineer backends that handle real-world scale.",
        tags: "Node.js • Go • Python • PostgreSQL • Redis",
        images: [
            "https://images.unsplash.com/photo-1635405074683-96d6921a2a2c?q=80&w=2000",
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000",
        ],
    },
    {
        id: "02",
        title: "Frontend\nEngineering",
        description:
            "Creating responsive, high-performance, and pixel-perfect user interfaces with a focus on speed, SEO, and accessibility. I bring designs to life with clean, maintainable code and smooth interactions.",
        tags: "React • Next.js • TypeScript • Tailwind • Framer Motion",
        images: [
            "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000",
            "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2000",
            "https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=2000",
        ],
    },
    {
        id: "03",
        title: "System\nDesign",
        description:
            "Designing distributed systems and infrastructure that handle massive scale, ensuring high availability and system reliability. I architect solutions that grow with your business and withstand real-world demands.",
        tags: "Microservices • AWS • Docker • Kubernetes • CI/CD",
        images: [
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000",
            "https://images.unsplash.com/photo-1635405074683-96d6921a2a2c?q=80&w=2000",
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000",
        ],
    },
    {
        id: "04",
        title: "Mobile\nDevelopment",
        description:
            "Developing cross-platform mobile applications that provide native-level performance and seamless user experiences across devices. From concept to app store, I build mobile products people love to use.",
        tags: "React Native • Expo • Mobile UX • App Store",
        images: [
            "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2000",
            "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000",
            "https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=2000",
        ],
    },
    {
        id: "05",
        title: "UI / UX\nThinking",
        description:
            "Crafting intuitive and beautiful digital experiences by blending user-centric research with modern aesthetic principles. I design interfaces that feel natural, reduce friction, and delight users at every step.",
        tags: "Figma • Prototyping • Design Systems • User Research",
        images: [
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000",
            "https://images.unsplash.com/photo-1635405074683-96d6921a2a2c?q=80&w=2000",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000",
        ],
    },
    {
        id: "06",
        title: "Product\nArchitecture",
        description:
            "Planning the technical foundation of digital products from ideation to launch, ensuring long-term growth and stable evolution. I help teams make the right technical decisions early so products scale smoothly.",
        tags: "Strategy • MVP Development • Scalability • DevOps",
        images: [
            "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000",
            "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2000",
            "https://images.unsplash.com/photo-1635405074683-96d6921a2a2c?q=80&w=2000",
        ],
    },
];

const ServicesSection = () => {
    return (
        <section className="w-full bg-white">
            {/* Hero Header */}
            <div className="py-32 lg:px-10 md:px-8 px-5 border-t border-[#f0f0f0]">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="text-[60px] md:text-[80px] lg:text-[100px] font-black uppercase tracking-tighter leading-[0.95] text-[#171717]"
                    >
                        Choose
                        <br />
                        Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[14px] md:text-[16px] text-[#171717]/60 leading-relaxed max-w-[480px] lg:justify-self-end"
                    >
                        I offer a comprehensive range of engineering and design
                        services to help you build robust, scalable, and
                        beautifully crafted digital products.
                    </motion.p>
                </div>
            </div>

            {/* Individual Service Blocks */}
            {services.map((service) => (
                <div
                    key={service.id}
                    className="border-t border-[#f0f0f0] py-24 lg:py-32 lg:px-10 md:px-8 px-5"
                >
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

                            <div className="flex flex-col gap-4 max-w-[420px]">
                                <p className="text-[12px] font-bold uppercase tracking-widest text-[#171717]/30">
                                    {service.tags}
                                </p>
                                <p className="text-[14px] md:text-[15px] text-[#171717]/60 leading-relaxed">
                                    {service.description}
                                </p>
                                <DarkBtn
                                    text="Learn More"
                                    className="mt-2 self-start"
                                />
                            </div>
                        </motion.div>

                        {/* Right — Image Gallery */}
                        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                            {/* Large image spanning full width */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="col-span-2 relative aspect-16/10 overflow-hidden bg-[#f5f5f5] group"
                            >
                                <img
                                    src={service.images[0]}
                                    alt={`${service.title} showcase`}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                            </motion.div>

                            {/* Two smaller images */}
                            {service.images.slice(1).map((img, imgIdx) => (
                                <motion.div
                                    key={imgIdx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{
                                        once: true,
                                        margin: "-30px",
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: (imgIdx + 1) * 0.1,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="relative aspect-4/3 overflow-hidden bg-[#f5f5f5] group"
                                >
                                    <img
                                        src={img}
                                        alt={`${service.title} detail ${imgIdx + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ServicesSection;
