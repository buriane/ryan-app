'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, MapPin, Clock, Users, Award, Heart, Shield, Sparkles, Star } from 'lucide-react';

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-sky-50 to-blue-100 rounded-xl">
            {/* Hero Section with Different Layout */}
            <section className="relative py-20 overflow-hidden">
                {/* Floating Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-10 w-32 h-32 bg-teal-200/30 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-20 w-48 h-48 bg-sky-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-10 right-1/3 w-24 h-24 bg-blue-200/40 rounded-full blur-xl animate-bounce delay-500"></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{
                            x: [0, 10, 0],
                            y: [0, -15, 0],
                            rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-5 left-5 w-12 h-12 bg-white/80 rounded-2xl flex items-center justify-center shadow-lg"
                    >
                        <Sparkles className="w-6 h-6 text-teal-600" />
                    </motion.div>
                    <motion.div
                        animate={{
                            x: [0, -15, 0],
                            y: [0, 10, 0]
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        className="absolute bottom-10 right-5 w-10 h-10 bg-gradient-to-br from-sky-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                        <Star className="w-5 h-5 text-white" />
                    </motion.div>
                </div>

                <div className="container mx-auto px-4 relative">
                    <div className="text-center mb-16">
                        {/* Logo Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                            className="flex justify-center mb-8"
                        >
                            <div className="bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/40">
                                <div className="flex items-center gap-4">
                                    <motion.div
                                        whileHover={{
                                            rotate: [0, -5, 5, 0],
                                            scale: 1.1
                                        }}
                                        transition={{ type: "spring", bounce: 0.6 }}
                                        className="w-20 h-20 bg-gradient-to-br from-teal-500 to-sky-600 rounded-2xl shadow-lg flex items-center justify-center"
                                    >
                                        <Image
                                            src="/logo.png"
                                            alt="Dentiland Logo"
                                            width={50}
                                            height={50}
                                            className="drop-shadow-sm filter brightness-0 invert"
                                        />
                                    </motion.div>
                                    <div className="text-left">
                                        <h2 className="text-2xl font-bold text-gray-800 tracking-wide">Dentiland</h2>
                                        <p className="text-teal-600 font-medium">Kids Dental Clinic</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Page Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-6xl font-bold mb-6"
                        >
                            <span className="bg-gradient-to-r from-teal-600 via-sky-600 to-blue-700 bg-clip-text text-transparent">
                                Tentang
                            </span>
                            <br />
                            <span className="text-gray-800">
                                Kami
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="w-24 h-1 bg-gradient-to-r from-teal-500 to-sky-500 rounded-full mx-auto"
                        ></motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-4">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="space-y-8"
                            >
                                {/* Story Card */}
                                <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                        className="space-y-6"
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-sky-600 rounded-2xl flex items-center justify-center">
                                                <Heart className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-800">Apa itu Dentiland?</h3>
                                        </div>

                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            <span className="font-semibold text-teal-700">Dentiland</span> adalah klinik gigi ramah anak yang menghadirkan pengalaman perawatan gigi yang menyenangkan, aman, dan profesional untuk seluruh keluarga. Kami memahami bahwa kunjungan ke dokter gigi bisa menjadi tantangan bagi anak-anak, itulah mengapa Dentiland dirancang dengan suasana yang nyaman dan menyenangkan, serta pendekatan yang penuh empati dari tim kami.
                                        </p>

                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            Didukung oleh dokter gigi yang kompeten dan berpengalaman, kami menyediakan layanan lengkap mulai dari pemeriksaan rutin, perawatan gigi anak, hingga tindakan spesialis. Fasilitas kami dilengkapi dengan <span className="font-semibold text-sky-700">radiografi digital</span>, <span className="font-semibold text-sky-700">dental lab</span>, serta alat medis modern untuk menunjang diagnosis dan perawatan yang akurat dan efisien.
                                        </p>

                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            Dentiland berkomitmen memberikan perawatan terbaik dengan sentuhan personal, demi senyum sehat dan ceria anak-anak Anda.
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Features Grid */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="grid grid-cols-2 gap-6"
                                >
                                    <div className="bg-gradient-to-br from-white/70 to-teal-50/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/40">
                                        <Users className="w-8 h-8 text-teal-600 mb-3" />
                                        <h4 className="font-bold text-gray-800 mb-2">Tim Ahli</h4>
                                        <p className="text-sm text-gray-600">Dokter gigi berpengalaman & bersertifikat</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-white/70 to-sky-50/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/40">
                                        <Shield className="w-8 h-8 text-sky-600 mb-3" />
                                        <h4 className="font-bold text-gray-800 mb-2">Aman & Steril</h4>
                                        <p className="text-sm text-gray-600">Standar sterilisasi internasional</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-white/70 to-blue-50/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/40">
                                        <Award className="w-8 h-8 text-blue-600 mb-3" />
                                        <h4 className="font-bold text-gray-800 mb-2">Teknologi Modern</h4>
                                        <p className="text-sm text-gray-600">Peralatan medis canggih</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-white/70 to-purple-50/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/40">
                                        <Sparkles className="w-8 h-8 text-purple-600 mb-3" />
                                        <h4 className="font-bold text-gray-800 mb-2">Ramah Anak</h4>
                                        <p className="text-sm text-gray-600">Suasana menyenangkan untuk si kecil</p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Right Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="relative"
                            >
                                {/* Decorative Background */}
                                <div className="absolute -inset-6 bg-gradient-to-r from-teal-300/30 to-sky-300/30 rounded-3xl blur-2xl"></div>
                                <div className="absolute -inset-2 bg-white/40 backdrop-blur-sm rounded-3xl border border-white/50"></div>

                                {/* Main Image Container */}
                                <motion.div
                                    animate={{
                                        y: [0, -8, 0],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="relative bg-white/80 backdrop-blur-md rounded-3xl p-4 shadow-2xl border border-white/60 overflow-hidden"
                                >
                                    <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                                        <Image
                                            src="/about.jpg"
                                            alt="Dentiland Clinic"
                                            fill
                                            className="object-cover"
                                        />
                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-gradient-to-r from-teal-800 via-sky-800 to-blue-900 relative overflow-hidden rounded-xl mt-20">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-10 right-20 w-60 h-60 bg-teal-300/20 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Hubungi Kami
                        </h2>
                        <div className="w-20 h-1 bg-white/60 rounded-full mx-auto mb-12"></div>

                        {/* Contact Cards */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Instagram */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-16 h-16 bg-gradient-to-br from-pink-700 to-purple-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                                >
                                    <Instagram className="w-8 h-8 text-white" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-white mb-4">Instagram</h3>
                                <a
                                    href="https://www.instagram.com/dentiland.id?igsh=aGdmaTh5MDkxeW81"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sky-100 hover:text-white transition-colors duration-200 font-medium"
                                >
                                    @dentiland.id
                                </a>
                            </motion.div>

                            {/* Location */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                    className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                                >
                                    <MapPin className="w-8 h-8 text-white" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-white mb-4">Lokasi</h3>
                                <p className="text-sky-100 font-medium">
                                    Ruko Mega Kuningan<br />PIK 2
                                </p>
                            </motion.div>

                            {/* Hours */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                                >
                                    <Clock className="w-8 h-8 text-white" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-white mb-4">Jam Buka</h3>
                                <p className="text-sky-100 font-medium">
                                    Selasa - Minggu<br />08:00 - 20:00
                                </p>
                            </motion.div>
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="mt-16"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    href="/jadwal"
                                    className="inline-block bg-white text-teal-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:bg-sky-50 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-2">
                                        <span>Buat Janji Konsultasi</span>
                                        <motion.span
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            →
                                        </motion.span>
                                    </div>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}