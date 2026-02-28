"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { DarkBtn } from "../components/buttons";
import Footer from "../components/footer";

const serviceOptions = [
    "Backend & APIs",
    "Frontend Engineering",
    "System Design",
    "Mobile Development",
    "UI / UX Thinking",
    "Product Architecture",
];

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{
        type: "success" | "error";
        text: string;
    } | null>(null);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        company: "",
        website: "",
        service: "",
        description: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        if (submitMessage) setSubmitMessage(null);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const payload = (await response.json()) as {
                ok: boolean;
                message: string;
            };

            if (!response.ok || !payload.ok) {
                setSubmitMessage({
                    type: "error",
                    text: payload.message || "Unable to send request right now.",
                });
                return;
            }

            setSubmitMessage({
                type: "success",
                text: "Request sent successfully. I will get back to you soon.",
            });

            setFormData({
                fullName: "",
                email: "",
                company: "",
                website: "",
                service: "",
                description: "",
            });
        } catch {
            setSubmitMessage({
                type: "error",
                text: "Network error. Please try again in a moment.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="w-full pt-16 pb-20 lg:px-10 md:px-8 px-5 bg-white">
                <div className="max-w-[1400px] mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="text-[50px] md:text-[80px] lg:text-[110px] font-black uppercase tracking-tighter leading-[0.95] text-[#171717]"
                    >
                        Contact
                        <br />
                        With Me
                    </motion.h1>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="w-full py-24 lg:px-10 md:px-8 px-5 bg-white border-t border-[#f0f0f0]">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
                    {/* Left — Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="lg:col-span-4 flex flex-col gap-16"
                    >
                        {/* Office Location */}
                        <div className="flex flex-col gap-3">
                            <p className="text-[12px] font-bold uppercase tracking-widest text-[#171717]/40">
                                Office Location
                            </p>
                            <div className="text-[14px] md:text-[15px] font-medium text-[#171717] leading-relaxed">
                                <p>Lagos, Nigeria</p>
                                <p>Available Worldwide</p>
                            </div>
                        </div>

                        {/* Office Time */}
                        <div className="flex flex-col gap-3">
                            <p className="text-[12px] font-bold uppercase tracking-widest text-[#171717]/40">
                                Office Time
                            </p>
                            <div className="text-[14px] md:text-[15px] font-medium text-[#171717] leading-relaxed">
                                <p>Monday – Sunday</p>
                                <p>9am – 6pm WAT</p>
                            </div>
                        </div>

                        {/* Support */}
                        <div className="flex flex-col gap-3">
                            <p className="text-[12px] font-bold uppercase tracking-widest text-[#171717]/40">
                                Support
                            </p>
                            <p className="text-[14px] md:text-[15px] font-medium text-[#171717]">
                                stephenadegoke614@gmail.com
                            </p>
                        </div>

                        {/* CV */}
                        <div className="flex flex-col gap-3">
                            <p className="text-[12px] font-bold uppercase tracking-widest text-[#171717]/40">
                                Resume
                            </p>
                            <a
                                href="https://drive.google.com/file/d/1bHLzzniHoYC7gGOyB6Pt473erOzSk7j8/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-fit items-center border border-[#171717] px-4 py-2 text-[12px] font-bold uppercase tracking-wider text-[#171717] transition-colors duration-300 hover:bg-[#171717] hover:text-white"
                            >
                                View CV
                            </a>
                        </div>
                    </motion.div>

                    {/* Right — Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.15,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="lg:col-span-8"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-10"
                        >
                            {/* Row 1: Full Name + Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[13px] font-bold text-[#171717]">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        placeholder="Your full name"
                                        className="w-full px-4 py-3 text-[14px] text-[#171717] bg-white border border-[#e0e0e0] outline-none focus:border-black transition-colors duration-300 placeholder:text-[#171717]/30"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[13px] font-bold text-[#171717]">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        placeholder="you@email.com"
                                        className="w-full px-4 py-3 text-[14px] text-[#171717] bg-white border border-[#e0e0e0] outline-none focus:border-black transition-colors duration-300 placeholder:text-[#171717]/30"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Company Name + Website URL */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[13px] font-bold text-[#171717]">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        placeholder="Your company"
                                        className="w-full px-4 py-3 text-[14px] text-[#171717] bg-white border border-[#e0e0e0] outline-none focus:border-black transition-colors duration-300 placeholder:text-[#171717]/30"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[13px] font-bold text-[#171717]">
                                        Website URL
                                    </label>
                                    <input
                                        type="url"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        placeholder="www.yoursite.com"
                                        className="w-full px-4 py-3 text-[14px] text-[#171717] bg-white border border-[#e0e0e0] outline-none focus:border-black transition-colors duration-300 placeholder:text-[#171717]/30"
                                    />
                                </div>
                            </div>

                            {/* Row 3: Services Dropdown */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-bold text-[#171717]">
                                    What services are you looking for?
                                </label>
                                <div className="relative">
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 text-[14px] text-[#171717] bg-white border border-[#e0e0e0] outline-none focus:border-black transition-colors duration-300 appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled>
                                            Select your services
                                        </option>
                                        {serviceOptions.map((opt) => (
                                            <option key={opt} value={opt}>
                                                {opt}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            className="text-[#171717]/40"
                                        >
                                            <path
                                                d="M3 4.5L6 7.5L9 4.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Row 4: Project Description */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-bold text-[#171717]">
                                    Project Description
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                    placeholder="Enter your description"
                                    rows={6}
                                    className="w-full px-4 py-3 text-[14px] text-[#171717] bg-white border border-[#e0e0e0] outline-none focus:border-black transition-colors duration-300 placeholder:text-[#171717]/30 resize-y"
                                />
                            </div>

                            {/* Submit */}
                            <div className="flex flex-col gap-3">
                                <DarkBtn
                                    text={isSubmitting ? "Sending..." : "Send it over"}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={isSubmitting ? "opacity-60 cursor-not-allowed" : ""}
                                />
                                {submitMessage && (
                                    <p
                                        className={`text-[13px] font-medium ${
                                            submitMessage.type === "success"
                                                ? "text-green-700"
                                                : "text-red-600"
                                        }`}
                                    >
                                        {submitMessage.text}
                                    </p>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
