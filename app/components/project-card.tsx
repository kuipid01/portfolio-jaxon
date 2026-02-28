"use client"
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Project } from "../data/projects";

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="group flex flex-col gap-5"
        >
            {/* Image Container */}
            <Link href={`/projects/${project.slug}`} className="relative w-full aspect-[4/3] overflow-hidden bg-[#f5f5f5] block">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            </Link>

            {/* Content */}
            <div className="flex flex-col gap-2">
                <h3 className="text-[22px] md:text-[26px] font-black tracking-tight text-[#171717] leading-none">
                    {project.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-[#171717]/60 leading-relaxed max-w-[380px]">
                    {project.description}
                </p>
            </div>

            {/* View Project Button */}
            <Link href={`/projects/${project.slug}`}>
                <motion.span
                    initial="initial"
                    whileHover="hover"
                    className="self-start inline-flex px-5 py-2 border border-[#e0e0e0] bg-white text-[13px] font-bold items-center gap-2 hover:bg-black hover:text-white hover:border-black cursor-pointer transition-colors duration-300"
                >
                    View Project
                    <span className="relative w-[16px] h-[16px] overflow-hidden inline-block">
                        <motion.span
                            className="flex will-change-transform"
                            variants={{
                                initial: { x: "-100%" },
                                hover: { x: "0%" },
                            }}
                            transition={{
                                duration: 0.42,
                                ease: [0.4, 0, 0.2, 1],
                            }}
                        >
                            <ArrowRight size={16} className="shrink-0" />
                            <ArrowRight size={16} className="shrink-0" />
                        </motion.span>
                    </span>
                </motion.span>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
