"use client";
import React from "react";
import { motion } from "framer-motion";
import { DarkBtn } from "./buttons";
import { useRouter } from "next/navigation";

const footerLinks = [
  {
    heading: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Project", href: "/projects" },
    ],
  },
  {
    heading: "Utility Pages",
    links: [
      { label: "Licenses", href: "#" },
      { label: "404 Page", href: "/404" },
    ],
  },
  {
    heading: "More Pages",
    links: [
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Socials",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/kuipid/" },
      { label: "GitHub", href: "https://github.com/kuipid01" },
      { label: "X", href: "https://x.com/balde_arc" },
    ],
  },
];

const Footer = () => {
    const router = useRouter()
  return (
    <footer className="w-full bg-[#f7f7f7]">
      {/* CTA Section */}
      <div className="lg:px-10 md:px-8 px-5 py-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left – CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-black uppercase tracking-tighter leading-[1.05] text-[#171717] mb-8">
              Have any project
              <br />
              idea? Contact me
            </h2>
            <DarkBtn
              text="Contact Now"
              onClick={() =>  router.push("/contact")}
            />
          </motion.div>

          {/* Right – Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8"
          >
            {footerLinks.map((column) => (
              <div key={column.heading} className="flex flex-col gap-4">
                <h4 className="text-[13px] font-bold uppercase tracking-wide text-[#171717]">
                  {column.heading}
                </h4>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-[14px] text-[#171717]/60 hover:text-[#171717] transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto lg:px-10 md:px-8 px-5 py-6 flex items-center justify-between">
          <p className="text-[13px] text-[#171717]/50">
            Copyright @ Adegoke Stephen. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
