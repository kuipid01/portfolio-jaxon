"use client"
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { reviews } from "../data/reviews";

const CARD_GAP = 24; // gap in px
const AUTO_SCROLL_INTERVAL = 4000; // ms

const ReviewsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(2);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const maxIndex = Math.max(reviews.length - cardsPerView, 0);

    // Responsive cards per view
    useEffect(() => {
        const updateCardsPerView = () => {
            if (window.innerWidth < 768) {
                setCardsPerView(1);
            } else {
                setCardsPerView(2);
            }
        };
        updateCardsPerView();
        window.addEventListener("resize", updateCardsPerView);
        return () => window.removeEventListener("resize", updateCardsPerView);
    }, []);

    const goNext = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const goPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    // Auto-scroll
    useEffect(() => {
        intervalRef.current = setInterval(goNext, AUTO_SCROLL_INTERVAL);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [goNext]);

    // Reset auto-scroll timer on manual navigation
    const handleManualNav = (direction: "prev" | "next") => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (direction === "prev") goPrev();
        else goNext();
        intervalRef.current = setInterval(goNext, AUTO_SCROLL_INTERVAL);
    };

    // Calculate translation percentage
    // Each card takes (100% / cardsPerView) of the container width
    const cardWidthPercent = 100 / cardsPerView;
    const translateX = -(currentIndex * cardWidthPercent);

    return (
        <section className="w-full py-32 lg:px-10 md:px-8 px-5 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="flex items-end justify-between mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[50px] md:text-[70px] lg:text-[90px] font-black uppercase tracking-tighter leading-[0.95] text-[#171717]"
                    >
                        Client
                        <br />
                        Reviews
                    </motion.h2>

                    {/* Navigation Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-2"
                    >
                        <button
                            onClick={() => handleManualNav("prev")}
                            className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-[#333] transition-colors duration-300 cursor-pointer"
                            aria-label="Previous review"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button
                            onClick={() => handleManualNav("next")}
                            className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-[#333] transition-colors duration-300 cursor-pointer"
                            aria-label="Next review"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </motion.div>
                </div>

                {/* Carousel Track */}
                <div className="overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{ x: `${translateX}%` }}
                        transition={{
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{ gap: `${CARD_GAP}px` }}
                    >
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="shrink-0 bg-[#f7f7f7] p-8 md:p-10 flex flex-col justify-between"
                                style={{
                                    width: `calc((100% - ${CARD_GAP * (cardsPerView - 1)}px) / ${cardsPerView})`,
                                }}
                            >
                                {/* Quote */}
                                <p className="text-[18px] md:text-[22px] lg:text-[26px] font-bold tracking-tight leading-snug text-[#171717] mb-10">
                                    &ldquo;{review.quote}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-[13px] font-black text-[#171717]">
                                        {review.avatar}
                                    </div>
                                    <div>
                                        <p className="text-[14px] font-bold text-[#171717]">
                                            {review.name}
                                        </p>
                                        <p className="text-[12px] text-[#171717]/50">
                                            {review.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Progress Dots */}
                <div className="flex items-center gap-2 mt-8">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                if (intervalRef.current)
                                    clearInterval(intervalRef.current);
                                setCurrentIndex(i);
                                intervalRef.current = setInterval(
                                    goNext,
                                    AUTO_SCROLL_INTERVAL
                                );
                            }}
                            className={`h-[3px] transition-all duration-500 cursor-pointer ${i === currentIndex
                                    ? "w-10 bg-black"
                                    : "w-5 bg-black/15 hover:bg-black/30"
                                }`}
                            aria-label={`Go to review ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
