"use client"
import React from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/project-card";
import Footer from "../../components/footer";

export default function ProjectDetailPage() {
    const params = useParams();
    const slug = params.slug as string;

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center h-[80vh]">
                <h1 className="text-[48px] font-black tracking-tighter text-[#171717]">
                    Project Not Found
                </h1>
                <p className="text-[16px] text-[#171717]/50 mt-4">
                    The project you&apos;re looking for doesn&apos;t exist.
                </p>
            </div>
        );
    }

    // Get other projects for "More Projects" section
    const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="w-full pt-16 pb-10 lg:px-10 md:px-8 px-5 bg-white">
                <div className="max-w-[1400px] mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[60px] md:text-[90px] lg:text-[130px] font-black uppercase tracking-tighter leading-[0.95] text-[#171717]"
                    >
                        {project.title}
                    </motion.h1>
                </div>
            </section>

            {/* Metadata Bar */}
            <section className="w-full pb-16 lg:px-10 md:px-8 px-5 bg-white border-b border-[#e5e5e5]">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-4"
                    >
                        {project.meta.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-1 text-center"
                            >
                                <p className="text-[11px] font-bold uppercase tracking-widest text-[#171717]/40">
                                    {item.label}
                                </p>
                                <p className="text-[14px] font-bold text-[#171717]">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </motion.div>

                    {project.links && project.links.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="mt-10 flex flex-wrap items-center justify-center gap-3"
                        >
                            {project.links.map((link) => (
                                <a
                                    key={`${project.slug}-${link.label}`}
                                    href={link.value}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-5 py-2.5 border border-[#171717] text-[#171717] text-[13px] font-bold uppercase tracking-wider hover:bg-[#171717] hover:text-white transition-colors duration-300"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Content Sections — Overview, Problems, Solutions */}
            {project.sections.map((section, sectionIdx) => (
                <section
                    key={section.heading}
                    className="w-full py-24 lg:px-10 md:px-8 px-5 bg-white"
                >
                    <div className="max-w-[1400px] mx-auto">
                        {/* Section Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="text-[36px] md:text-[48px] font-black tracking-tighter leading-none text-[#171717] mb-6"
                        >
                            {section.heading}
                        </motion.h2>

                        {/* Section Text */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-[14px] md:text-[16px] text-[#171717]/60 leading-relaxed max-w-[700px] mb-12"
                        >
                            {section.text}
                        </motion.p>

                        {/* Image Gallery */}
                        <ImageGallery
                            images={section.images ?? []}
                            sectionIdx={sectionIdx}
                        />
                    </div>
                </section>
            ))}

            {/* More Projects */}
            <section className="w-full py-32 lg:px-10 md:px-8 px-5 bg-white border-t border-[#e5e5e5]">
                <div className="max-w-[1400px] mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="text-[50px] md:text-[70px] lg:text-[90px] font-black uppercase tracking-tighter leading-none text-[#171717] mb-16"
                    >
                        More Projects
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
                        {otherProjects.map((p, i) => (
                            <ProjectCard key={p.slug} project={p} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

/* ─── Image Gallery Component ─── */
function ImageGallery({
    images,
    sectionIdx,
}: {
    images: string[];
    sectionIdx: number;
}) {
    if (images.length === 0) return null;

    // Layout patterns based on image count
    if (images.length <= 3) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {images.map((img, i) => (
                    <GalleryImage
                        key={i}
                        src={img}
                        index={i}
                        sectionIdx={sectionIdx}
                        className="aspect-[4/3]"
                    />
                ))}
            </div>
        );
    }

    if (images.length === 4) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {images.map((img, i) => (
                    <GalleryImage
                        key={i}
                        src={img}
                        index={i}
                        sectionIdx={sectionIdx}
                        className="aspect-[4/3]"
                    />
                ))}
            </div>
        );
    }

    // 5+ images: first row 2 large, remaining in grid of 4
    return (
        <div className="flex flex-col gap-4">
            {/* Top Row — 2 large images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {images.slice(0, 2).map((img, i) => (
                    <GalleryImage
                        key={i}
                        src={img}
                        index={i}
                        sectionIdx={sectionIdx}
                        className="aspect-[3/2]"
                    />
                ))}
            </div>
            {/* Bottom Row — remaining images in 4-col grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.slice(2).map((img, i) => (
                    <GalleryImage
                        key={i + 2}
                        src={img}
                        index={i + 2}
                        sectionIdx={sectionIdx}
                        className="aspect-square"
                    />
                ))}
            </div>
        </div>
    );
}

function GalleryImage({
    src,
    index,
    sectionIdx,
    className,
}: {
    src: string;
    index: number;
    sectionIdx: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={`relative overflow-hidden bg-[#f5f5f5] group ${className || ""}`}
        >
            <img
                src={src}
                alt={`Gallery image ${sectionIdx + 1}-${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        </motion.div>
    );
}
