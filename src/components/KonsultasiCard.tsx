"use client";

import { JadwalDokter } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface KonsultasiCardProps {
    dokter: JadwalDokter;
}

const KonsultasiCard = ({ dokter }: KonsultasiCardProps) => {
    // Generate random status for demonstration purposes
    const isOnline = Math.random() > 0.3; // 70% chance to be online
    const statusClass = isOnline ? 'bg-green-500' : 'bg-gray-400';
    const statusText = isOnline ? 'Online' : 'Offline';

    // Random rating between 4.0 and 5.0
    const rating = (4 + Math.random()).toFixed(1);

    return (
        <motion.div
            whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"
            }}
            transition={{
                duration: 0.2,
                ease: "easeInOut"
            }}
            className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
        >
            <div className="relative">
                <div className="w-full h-36 bg-gradient-to-r from-sky-100 to-sky-50 flex justify-center items-center overflow-hidden">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg"
                    >
                        <Image
                            src={dokter.profileImg || "/profile.webp"}
                            alt={`Dr. ${dokter.nama}`}
                            fill
                            sizes="112px"
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </motion.div>
                </div>
                <motion.span
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 ${isOnline ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                >
                    <span className={`inline-block w-2 h-2 rounded-full ${statusClass}`}></span>
                    {statusText}
                </motion.span>
            </div>
            <motion.div className="p-6">
                <div className="text-center mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{dokter.nama}</h3>
                    <p className="text-sky-800 font-medium">{dokter.spesialisasi}</p>
                </div>

                <div className="flex justify-center items-center mb-4">
                    <div className="flex items-center text-amber-500">
                        <Star size={16} fill="currentColor" />
                        <span className="ml-1 font-medium">{rating}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-300 mx-2"></div>
                    <div className="text-gray-500 text-sm">10+ konsultasi</div>
                </div>

                <div className="mb-6">
                    <div className="text-sm text-gray-600 text-center">
                        Dokter spesialis dengan pengalaman lebih dari 5 tahun menangani berbagai kasus kedokteran gigi.
                    </div>
                </div>

                <Link
                    href={`/konsultasi/${dokter.id}`}
                    className="w-full py-3 px-4 text-center rounded-md text-white font-medium transition-colors bg-sky-700 hover:bg-sky-800 flex items-center justify-center gap-2"
                >
                    <MessageSquare size={18} />
                    <span>Chat dengan Dokter</span>
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default KonsultasiCard;