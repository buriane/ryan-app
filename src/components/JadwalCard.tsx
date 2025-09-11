"use client";

import { JadwalDokter } from '@/types';
import Link from 'next/link';
import { formatDateIndonesian } from '../utils/formatters';
import { motion } from 'framer-motion';

interface JadwalCardProps {
    jadwal: JadwalDokter;
}

const JadwalCard = ({ jadwal }: JadwalCardProps) => {
    const isAvailable = jadwal.kuotaTersisa > 0;
    const availabilityText = isAvailable ? 'TERSEDIA' : 'PENUH';
    const availabilityClass = isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
    const availabilityPercentage = Math.round((jadwal.kuotaTersisa / jadwal.kuotaTotal) * 100);

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
            className="bg-white rounded-lg overflow-hidden shadow-md"
        >
            <motion.div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{jadwal.nama}</h3>
                    <motion.span
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className={`text-xs font-bold px-2 py-1 rounded-full ${availabilityClass}`}
                    >
                        {availabilityText}
                    </motion.span>
                </div>
                <p className="text-blue-600 font-medium mb-3">{jadwal.spesialisasi}</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="text-sm">
                        <p className="text-gray-500">Hari/Tanggal</p>
                        <p className="font-medium">{jadwal.hari}, {formatDateIndonesian(jadwal.tanggal)}</p>
                    </div>
                    <div className="text-sm">
                        <p className="text-gray-500">Jam Praktik</p>
                        <p className="font-medium">{jadwal.jamMulai} - {jadwal.jamSelesai}</p>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="flex justify-between mb-1 text-sm">
                        <span>Kuota</span>
                        <span>{jadwal.kuotaTersisa} / {jadwal.kuotaTotal}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className={`h-2 rounded-full ${availabilityPercentage > 50 ? 'bg-green-500' : availabilityPercentage > 25 ? 'bg-yellow-500' : 'bg-red-500'}`}
                            style={{ width: `${availabilityPercentage}%` }}
                        ></div>
                    </div>
                </div>
                <Link
                    href={`/daftar?jadwalId=${jadwal.id}`}
                    className={`block w-full py-2 px-4 text-center rounded-md text-white font-medium ${isAvailable ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
                    aria-disabled={!isAvailable}
                >
                    {isAvailable ? 'Daftar Sekarang' : 'Kuota Penuh'}
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default JadwalCard;
