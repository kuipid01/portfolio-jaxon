"use client"
import React, { useState, useEffect } from 'react'
import { ArrowRight, Menu, X, Github, Linkedin, Twitter } from "lucide-react"
import { motion, AnimatePresence, Easing } from "framer-motion"
import { LightBtn, DarkBtn } from './buttons'
import Link from 'next/link'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Lock scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [menuOpen]);

    const links = [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as Easing,
                when: "afterChildren"
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as Easing,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, y: 20 },
        open: { opacity: 1, y: 0 }
    };

    return (
        <nav className="flex lg:px-10 md:px-8 px-5 py-4 relative justify-between items-center z-[100] bg-white">
            <Link href="/" className="z-[110]" onClick={() => setMenuOpen(false)}>
                <h1 className='font-black text-3xl tracking-tighter'>Kuipid</h1>
            </Link>

            {/* Desktop Links */}
            <ul className='hidden md:flex gap-8 items-center'>
                {links.map((link) => (
                    <motion.li
                        key={link.label}
                        initial="initial"
                        whileHover="hover"
                        className='relative overflow-hidden cursor-pointer text-[15px] font-medium h-6'
                    >
                        <Link href={link.href}>
                            <motion.div
                                variants={{
                                    initial: { y: 0 },
                                    hover: { y: "-50%" }
                                }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className='flex flex-col'
                            >
                                <span className='h-6 flex items-center'>{link.label}</span>
                                <span className='h-6 flex items-center text-black/40'>{link.label}</span>
                            </motion.div>
                        </Link>
                    </motion.li>
                ))}
            </ul>

            <div className="flex items-center gap-4">
                <Link className='hidden md:block' href="/contact">
                    <LightBtn text="Contact" />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className='md:hidden z-[110] relative p-2 overflow-hidden'
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label='Toggle menu'
                >
                    <AnimatePresence mode="wait">
                        {menuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={28} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="open"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={28} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className='fixed inset-0 w-full h-screen bg-white z-[100] md:hidden flex flex-col pt-24 px-5 pb-10'
                    >
                        <div className="flex flex-col h-full">
                            <ul className='flex flex-col gap-6 mt-10'>
                                {links.map((link) => (
                                    <motion.li
                                        key={link.label}
                                        variants={itemVariants}
                                        className='overflow-hidden'
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                            className='text-[48px] font-black uppercase tracking-tighter leading-none hover:pl-4 transition-all duration-300'
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="mt-auto space-y-12">
                                <motion.div variants={itemVariants} className="space-y-4">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30">Get in touch</p>
                                    <Link
                                        href="/contact"
                                        onClick={() => setMenuOpen(false)}
                                        className="block"
                                    >
                                        <DarkBtn text="Start a Project" className="w-full justify-between" />
                                    </Link>
                                </motion.div>

                                <motion.div variants={itemVariants} className="flex justify-between items-end border-t border-black/5 pt-8">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30">Socials</p>
                                        <div className="flex gap-4">
                                            <Link href="https://github.com/kuipid01" target="_blank" className="hover:text-black/50 transition-colors"><Github size={20} /></Link>
                                            <Link href="https://www.linkedin.com/in/kuipid/" target="_blank" className="hover:text-black/50 transition-colors"><Linkedin size={20} /></Link>
                                            <Link href="https://x.com/balde_arc" target="_blank" className="hover:text-black/50 transition-colors"><Twitter size={20} /></Link>
                                        </div>
                                    </div>
                                    <p className="text-[11px] text-black/40 font-medium font-inter">© 2026 Kuipid</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar

