"use client"
import React from "react";
import { Easing, motion } from "framer-motion";
import PortfolioSection from "./components/portfolio-section";
import ProjectsSection from "./components/projects-section";
import ExperienceSection from "./components/experience-section";
import ReviewsSection from "./components/reviews-section";
import Footer from "./components/footer";

export default function Home() {
    const textVariants = {
        hidden: { y: "100%" },
        visible: {
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as Easing
            }
        }
    };

    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    return (
        <div className="flex flex-col">
            <div className="lg:px-10 md:px-8 px-5 md:pt-10 lg:pt-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="flex flex-col h-[calc(100vh-80px)]  items-center justify-center "
                >
                    <div className="overflow-hidden  mb-4">
                        <motion.p
                            variants={textVariants}
                            className="text-[20px] md:text-[24px] font-medium "
                        >
                            Hello, I’m Adegoke Stephen
                        </motion.p>
                    </div>

                    <div className="text-left mt-2 md:mt-10">
                        <div className="overflow-hidden">
                            <motion.p
                                variants={textVariants}
                                className="text-left leading-[1.1] md:leading-[160px] tracking-[-.08em] text-[60px] md:text-[154px] font-black uppercase"
                            >
                                ENGINEER+
                            </motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                variants={textVariants}
                                className="text-left leading-[1.1] md:leading-[160px] tracking-[-.08em] text-[60px] md:text-[154px] font-black uppercase"
                            >
                                Developer
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <PortfolioSection />
            <ProjectsSection />
            <ExperienceSection />
            <ReviewsSection />
            <Footer />
        </div>
    );
}
