"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <main className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-[#f8f8f8]">
            <div className="pointer-events-none absolute inset-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#171717]/5 blur-2xl"
                />
                <motion.div
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute right-[-60px] top-[20%] h-80 w-80 rounded-full bg-[#171717]/10 blur-2xl"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="absolute bottom-[-80px] left-[25%] h-72 w-72 rounded-full bg-[#171717]/5 blur-2xl"
                />
            </div>

            <section className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-[1200px] flex-col items-center justify-center px-5 py-20 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="mb-4 text-[12px] font-black uppercase tracking-[0.35em] text-[#171717]/45"
                >
                    Lost In The Build
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[88px] leading-[0.85] font-black tracking-tighter text-transparent [webkit-text-stroke:2px_#171717] md:text-[160px] lg:text-[220px]"
                >
                    404
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.15 }}
                    className="mt-3 text-[28px] font-black uppercase tracking-tight text-[#171717] md:text-[40px]"
                >
                    This Page Took A Wrong Turn
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.22 }}
                    className="mt-4 max-w-[640px] text-[15px] leading-relaxed text-[#171717]/60 md:text-[16px]"
                >
                    The URL might be outdated, moved, or never existed. Let&apos;s route you back to something useful.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.3 }}
                    className="mt-10 flex flex-wrap items-center justify-center gap-3"
                >
                    <Link
                        href="/"
                        className="inline-flex min-w-[150px] items-center justify-center border border-[#171717] bg-[#171717] px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-white hover:text-[#171717]"
                    >
                        Back Home
                    </Link>
                    <Link
                        href="/projects"
                        className="inline-flex min-w-[150px] items-center justify-center border border-[#171717] px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-[#171717] transition-colors duration-300 hover:bg-[#171717] hover:text-white"
                    >
                        View Projects
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
