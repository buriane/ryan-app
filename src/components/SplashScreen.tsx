'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Heart, Star, Award } from 'lucide-react';

interface SplashScreenProps {
    onLoadingComplete: () => void;
}

export default function SplashScreen({ onLoadingComplete }: SplashScreenProps) {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);

    const loadingSteps = [
        "Menyiapkan senyuman terbaik...",
        "Menghangatkan klinik untuk Anda...",
        "Menyambut keluarga kecil...",
        "Hampir siap!"
    ];

    useEffect(() => {
        // Reduced loading time to 1.5 seconds maximum
        const minLoadingTime = 1500; // 1.5 seconds maximum loading time
        const startTime = Date.now();

        // Simulate loading progress
        const interval = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            const progressScale = Math.min(elapsedTime / minLoadingTime, 1); // Scale from 0 to 1 based on elapsed time

            setLoadingProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    // Reduced delay before calling onLoadingComplete
                    setTimeout(() => {
                        if (onLoadingComplete) onLoadingComplete();
                    }, 300); // Reduced from 1000ms to 300ms
                    return 100;
                }

                // Faster progress calculation
                const timeBasedIncrement = progressScale * (Math.random() * 8 + 4); // Increased increment speed
                const newProgress = prev + timeBasedIncrement;

                // Update current step based on progress
                const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length);
                setCurrentStep(Math.min(stepIndex, loadingSteps.length - 1));

                return Math.min(newProgress, 100);
            });
        }, 150); // Reduced interval from 200ms to 150ms for faster updates

        return () => clearInterval(interval);
    }, [onLoadingComplete, loadingSteps.length]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-sky-800 to-teal-700 overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
                ></motion.div>
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-20 right-20 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl"
                ></motion.div>
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute top-1/2 left-1/3 w-48 h-48 bg-sky-300/15 rounded-full blur-2xl"
                ></motion.div>
            </div>

            {/* Floating Dental Icons */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, 0],
                        rotate: [0, 10, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-16 right-16 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30"
                >
                    <Sparkles className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        x: [0, -10, 0],
                        rotate: [0, -15, 0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute top-1/4 left-16 w-10 h-10 bg-gradient-to-br from-pink-400/30 to-purple-500/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20"
                >
                    <Heart className="w-5 h-5 text-white/80" />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, -25, 0],
                        x: [0, 20, 0],
                        rotate: [0, 20, 0]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute bottom-1/4 right-20 w-8 h-8 bg-yellow-400/30 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20"
                >
                    <Star className="w-4 h-4 text-white/90" />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        x: [0, -25, 0],
                        rotate: [0, -10, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                    className="absolute bottom-20 left-1/4 w-11 h-11 bg-emerald-400/25 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/25"
                >
                    <Award className="w-5 h-5 text-white/85" />
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="relative text-center text-white px-8 max-w-md">
                {/* Logo Container with Advanced Animation */}
                <motion.div
                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{
                        duration: 1.2,
                        type: "spring",
                        bounce: 0.5,
                        delay: 0.2
                    }}
                    className="mb-8"
                >
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 2, -2, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative mx-auto w-32 h-32 bg-white/15 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/30"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/30 to-sky-400/30 rounded-3xl blur-xl"></div>

                        {/* Logo */}
                        <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                            className="relative w-full h-full bg-gradient-to-br from-white via-sky-100 to-teal-100 rounded-2xl shadow-lg flex items-center justify-center"
                        >
                            <Image
                                src="/logo.png"
                                alt="Dentiland Logo"
                                width={60}
                                height={60}
                                className="drop-shadow-md"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Brand Name with Staggered Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mb-2"
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold tracking-wide"
                    >
                        {"Dentiland".split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.8 + index * 0.1,
                                    type: "spring",
                                    bounce: 0.3
                                }}
                                className="inline-block bg-gradient-to-r from-white via-sky-100 to-teal-200 bg-clip-text text-transparent"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.h1>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="text-lg text-sky-100 mb-12 font-medium"
                >
                    Kids Dental Clinic
                </motion.p>

                {/* Loading Progress */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2 }}
                    className="w-full"
                >
                    {/* Progress Bar Container */}
                    <div className="relative w-full h-3 bg-white/20 rounded-full overflow-hidden mb-6 backdrop-blur-sm border border-white/30">
                        {/* Animated Background */}
                        <motion.div
                            animate={{
                                x: ["-100%", "100%"]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        ></motion.div>

                        {/* Progress Fill */}
                        <motion.div
                            className="h-full bg-gradient-to-r from-teal-400 via-sky-400 to-blue-500 rounded-full relative overflow-hidden"
                            style={{ width: `${loadingProgress}%` }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {/* Shimmer Effect */}
                            <motion.div
                                animate={{
                                    x: ["-100%", "100%"]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                            ></motion.div>
                        </motion.div>
                    </div>

                    {/* Loading Text */}
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <p className="text-sky-100 text-sm font-medium mb-2">
                            {loadingSteps[currentStep]}
                        </p>
                        <motion.p
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-white/60 text-xs"
                        >
                            {Math.round(loadingProgress)}%
                        </motion.p>
                    </motion.div>
                </motion.div>

                {/* Pulse Indicator */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-teal-400 to-sky-400 rounded-full shadow-lg"
                ></motion.div>
            </div>

            {/* Bottom Decorative Element */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="flex items-center gap-2 text-white/60 text-xs">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white/40 border-t-white/80 rounded-full"
                    ></motion.div>
                    <span className="font-medium">Loading amazing experience...</span>
                </div>
            </motion.div>
        </motion.div>
    );
}