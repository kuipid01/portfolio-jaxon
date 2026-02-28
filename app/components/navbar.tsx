"use client"
import React from 'react'
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { LightBtn } from './buttons'
import Link from 'next/link'

const Navbar = () => {
    const links = [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
    ]
    return (
        <div className="flex lg:px-10 md:px-8 px-5 py-3 justify-between items-center">
            <Link href="/">
                <h1 className=' font-black text-3xl'>Kuipid</h1>
            </Link>
            <ul className=' flex gap-8 items-center'>
                {
                    links.map((link) => (
                        <motion.li
                            key={link.label}
                            initial="initial"
                            whileHover="hover"
                            className='relative overflow-hidden cursor-pointer text-[15px] h-6'
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
                                    <span className='h-6 flex items-center'>{link.label}</span>
                                </motion.div>
                            </Link>
                        </motion.li>
                    ))
                }
            </ul>

            <Link href="/contact">
                <LightBtn text="Contact" />
            </Link>
        </div>
    )
}

export default Navbar
