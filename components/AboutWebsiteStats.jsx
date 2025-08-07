"use client";

import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaProjectDiagram, FaSmile, FaClock } from "react-icons/fa";

const statsData = [
    { number: 2000, suffix: "kW", label: "Project Completed", icon: <FaProjectDiagram /> },
    { number: 700, suffix: "", label: "Happy Customers", icon: <FaSmile /> },
    { number: 8, suffix: "Years", label: "Years of Experience", icon: <FaClock /> },
];

// Hook to detect if an element is visible on screen
function useOnScreen(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsIntersecting(entry.isIntersecting),
            { threshold: 0.3 }
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref]);

    return isIntersecting;
}

// Hook for counting up animation
function useCountUp(target, duration = 1000, start = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startCount = 0;
        const increment = target / (duration / 10);

        const interval = setInterval(() => {
            startCount += increment;
            if (startCount >= target) {
                setCount(target);
                clearInterval(interval);
            } else {
                setCount(Math.ceil(startCount));
            }
        }, 10);

        return () => clearInterval(interval);
    }, [target, duration, start]);

    return count;
}

export default function AboutWebsiteStats() {
    const containerRef = useRef();
    const isVisible = useOnScreen(containerRef);

    // Init AOS once
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div
            ref={containerRef}
            className="bg-[#3B0A4F] hover:bg-[#5A0F76] transition duration-300 text-white px-6 py-12 md:py-16 rounded-3xl shadow-xl mx-4 md:mx-10 my-10"
            data-aos="fade-up"
        >
            <div className="flex flex-col md:flex-row justify-around items-center gap-10 md:gap-20">
                {statsData.map((stat, index) => {
                    const count = useCountUp(stat.number, 1200, isVisible);
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center group"
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >
                            <div className="text-yellow-300 text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>
                            <div className="text-4xl font-bold">
                                {count}
                                {stat.suffix && (
                                    <span className="text-2xl ml-1 font-medium">{stat.suffix}</span>
                                )}
                            </div>
                            <div className="text-lg text-gray-200 mt-2">{stat.label}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
