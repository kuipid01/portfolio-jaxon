"use client"
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories } from "../data/projects";
import ProjectCard from "../components/project-card";
import Footer from "../components/footer";
import { DarkBtn } from "../components/buttons";

const INITIAL_COUNT = 4;
const LOAD_MORE_COUNT = 4;

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All Projects");
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

    const filtered = useMemo(() => {
        if (activeCategory === "All Projects") return projects;
        return projects.filter((p) => p.category === activeCategory);
    }, [activeCategory]);

    const visibleProjects = filtered.slice(0, visibleCount);
    const hasMore = visibleCount < filtered.length;

    const handleCategoryChange = (cat: string) => {
        setActiveCategory(cat);
        setVisibleCount(INITIAL_COUNT);
    };

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="w-full pt-16 pb-10 lg:px-10 md:px-8 px-5 bg-white">
                <div className="max-w-[1400px] mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[50px] md:text-[80px] lg:text-[110px] font-black uppercase tracking-tighter leading-[0.95] text-[#171717]"
                    >
                        Featured
                        <br />
                        Projects
                    </motion.h1>
                </div>
            </section>

            {/* Category Filters */}
            <section className="w-full pb-16 lg:px-10 md:px-8 px-5 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-3"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`px-5 py-2 text-[13px] font-bold tracking-tight transition-all duration-300 cursor-pointer ${activeCategory === cat
                                        ? "bg-black text-white"
                                        : "bg-white text-[#171717] border border-[#e0e0e0] hover:bg-[#f5f5f5]"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="w-full pb-32 lg:px-10 md:px-8 px-5 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16"
                    >
                        <AnimatePresence mode="popLayout">
                            {visibleProjects.map((project, index) => (
                                <motion.div
                                    key={project.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <ProjectCard project={project} index={index} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Load More */}
                    {hasMore && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex justify-center mt-16"
                        >
                            <div onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_COUNT)}>
                                <DarkBtn text="Load More" />
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
