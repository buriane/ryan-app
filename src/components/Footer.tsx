"use client";

import Link from 'next/link';
import { Calendar, Phone, Instagram, MapPin, Home, Clock, Users, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 border-t-2 rounded-lg border-white bg-gradient-to-br from-teal-700 to-sky-900 m-4 pt-12 pb-20"
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="container mx-auto px-4"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid gap-8 md:grid-cols-4"
                >
                    {/* Logo & Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-4"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-2"
                        >
                            <motion.div
                                whileHover={{ rotate: 10 }}
                                transition={{ type: "spring" }}
                                className="w-12 h-12 bg-gradient-to-br from-white to-blue-100 rounded-lg shadow-md flex items-center justify-center transition-all duration-300"
                            >
                                <Image src="/logo.png" alt="Dentiland Logo" width={32} height={32} />
                            </motion.div>
                            <span className="text-xl font-bold text-white">
                                Dentiland
                            </span>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-blue-100 text-sm"
                        >
                            Sistem informasi jadwal dokter dan pendaftaran pasien yang mudah dan terpercaya.
                        </motion.p>
                    </motion.div>

                    {/* Navigasi */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="font-semibold mb-4 text-white">Navigasi</h3>
                        <ul className="space-y-2 text-sm">
                            <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                                <Link href="/" className="text-blue-100 hover:text-white transition-colors flex items-center space-x-2">
                                    <Home className="w-4 h-4" />
                                    <span>Beranda</span>
                                </Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                                <Link href="/jadwal" className="text-blue-100 hover:text-white transition-colors flex items-center space-x-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>Jadwal Dokter</span>
                                </Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                                <Link href="/daftar" className="text-blue-100 hover:text-white transition-colors flex items-center space-x-2">
                                    <Users className="w-4 h-4" />
                                    <span>Pendaftaran</span>
                                </Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                                <Link href="/tentang" className="text-blue-100 hover:text-white transition-colors flex items-center space-x-2">
                                    <Info className="w-4 h-4" />
                                    <span>Tentang Kami</span>
                                </Link>
                            </motion.li>
                        </ul>
                    </motion.div>

                    {/* Kontak */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h3 className="font-semibold mb-4 text-white">Kontak</h3>
                        <ul className="space-y-3 text-sm">
                            <motion.li
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                className="flex items-center space-x-3 text-blue-100"
                            >
                                <Phone className="w-4 h-4 flex-shrink-0" />
                                <span>(0281) 1234-5678</span>
                            </motion.li>
                            <motion.li
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                className="flex items-center space-x-3 text-blue-100"
                            >
                                <a
                                    href="https://www.instagram.com/dentiland.id?igsh=aGdmaTh5MDkxeW81"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3"
                                >
                                    <Instagram className="w-4 h-4 flex-shrink-0" />
                                    <span>@dentiland.id</span>
                                </a>
                            </motion.li>

                            <motion.li
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                className="flex items-start space-x-3 text-blue-100"
                            >
                                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>Ruko Mega Kuningan<br />PIK 2</span>
                            </motion.li>
                            <motion.li
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                className="flex items-center space-x-3 text-blue-100"
                            >
                                <Clock className="w-4 h-4 flex-shrink-0" />
                                <span>Selasa - Minggu: 08:00-20:00</span>
                            </motion.li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="border-t border-blue-400/20 mt-12 pt-8 text-center text-sm text-blue-100"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        &copy; 2024 Dentiland App. Semua hak dilindungi.
                        <br className="sm:hidden" />
                        <span className="hidden sm:inline"> | </span>
                        Sistem ini membantu mempermudah akses layanan kesehatan.
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;