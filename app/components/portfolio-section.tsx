"use client"
import React from "react";
import { ArrowRight, Clover, Sun, LayoutGrid, CircleDot, Hexagon, Grid3X3 } from "lucide-react";
import { motion } from "framer-motion";
import { DarkBtn } from "./buttons";

const PortfolioSection = () => {

    return (
        <section className="w-full py-32 lg:px-10 md:px-8 px-5 bg-white overflow-hidden">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col  justify-between h-full "
                >
                    <div className="max-w-lg">
                        <p className="text-[14px] md:text-[16px] text-[#171717]/80 leading-relaxed font-medium">
                            <span className="text-black font-bold">Architecting digital solutions. </span>
                            I build complete digital products from the ground up, focusing on backend architecture, API design,
                            and high-performance frontend interfaces. I create software that is robust, scalable, and intuitive to use.
                        </p>

                        <DarkBtn text="Contact Now" className="mt-4" />
                    </div>

                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={{
                            animate: {
                                transition: {
                                    staggerChildren: 0.08
                                }
                            }
                        }}
                        className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12"
                    >
                        {[
                            { name: "Backend & APIs", icon: CircleDot },
                            { name: "Frontend Engineering", icon: LayoutGrid },
                            { name: "System Design", icon: Grid3X3 },
                            { name: "Mobile Development", icon: Hexagon },
                            { name: "UI / UX Thinking", icon: Sun },
                            { name: "Product Architecture", icon: Clover },
                        ].map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                variants={{
                                    initial: { opacity: 0, y: 20 },
                                    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                className="group flex flex-col gap-5 cursor-default"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black text-black/20 tracking-[0.2em]">0{index + 1}</span>
                                    <div className="h-px flex-1 bg-[#f0f0f0] ml-4 group-hover:bg-black transition-all duration-700" />
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-[#f8f8f8] group-hover:bg-black group-hover:text-white transition-all duration-500 rotate-0 group-hover:rotate-45">
                                        <skill.icon size={20} strokeWidth={1.5} className="group-hover:-rotate-45 transition-transform duration-500" />
                                    </div>
                                    <h4 className="text-[14px] font-extrabold uppercase tracking-tight leading-none text-[#171717] group-hover:translate-x-2 transition-transform duration-500">
                                        {skill.name}
                                    </h4>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Content - Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative w-full justify-self-end aspect-[4/5] max-w-[450px] max-h-[80vh] overflow-hidden group shadow-2xl"
                >
                    <img
                        src="/images/kui.png"
                        alt="Adegoke Stephen"
                        className="w-full h-full object-cover grayscale contrast-125 brightness-105 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000" />
                    <div className="absolute bottom-0 left-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 bg-linear-to-t from-black to-transparent w-full">
                        <p className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">Based in Nigeria • Available for hire</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioSection;
