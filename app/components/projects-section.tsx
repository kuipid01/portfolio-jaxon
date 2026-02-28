"use client"
import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./project-card";

const ProjectsSection = () => {
    return (
        <section className="w-full py-32 lg:px-10 md:px-8 px-5 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[60px] md:text-[80px] lg:text-[100px] font-black uppercase tracking-tighter leading-none text-center text-[#171717] mb-20"
                >
                    Projects
                </motion.h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;