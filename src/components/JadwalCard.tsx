"use client";

import { JadwalDokter } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { formatDateIndonesian } from '../utils/formatters';
import { motion } from 'framer-motion';

interface JadwalCardProps {
    jadwal: JadwalDokter;
}

const JadwalCard = ({ jadwal }: JadwalCardProps) => {
    const hasNoSchedule = (jadwal.hari === "-" && jadwal.tanggal === "-") || (jadwal.jamMulai === "-" && jadwal.jamSelesai === "-");
    const isAvailable = jadwal.kuotaTersisa > 0;
    const availabilityText = isAvailable ? 'TERSEDIA' : 'PENUH';
    const availabilityClass = isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
    const availabilityPercentage = Math.round((jadwal.kuotaTersisa / jadwal.kuotaTotal) * 100);

    // Handler untuk mencegah klik ketika tidak tersedia
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!isAvailable) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

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
                            src={jadwal.profileImg || "/profile.webp"}
                            alt={`Dr. ${jadwal.nama}`}
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
                    className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full ${availabilityClass}`}
                >
                    {availabilityText}
                </motion.span>
            </div>
            <motion.div className="p-6">
                <div className="text-center mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{jadwal.nama}</h3>
                    <p className="text-sky-800 font-medium">{jadwal.spesialisasi}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="text-sm">
                        <p className="text-gray-500">Hari/Tanggal</p>
                        {jadwal.hari !== "-" && jadwal.tanggal
                            ? (
                                <p className="font-medium">
                                    {jadwal.hari}, {formatDateIndonesian(jadwal.tanggal)}
                                </p>
                            )
                            : (
                                <p className="font-medium text-gray-800">Setiap Hari</p>
                            )}
                    </div>

                    <div className="text-sm">
                        <p className="text-gray-500">Jam Praktik</p>
                        <p className="font-medium">{jadwal.jamMulai} - {jadwal.jamSelesai}</p>
                    </div>
                </div>
                {!hasNoSchedule ? (
                    <>
                        <div className="mb-4">
                            <div className="flex justify-between mb-1 text-sm">
                                <span>Kuota</span>
                                <span>{jadwal.kuotaTersisa} / {jadwal.kuotaTotal}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full ${availabilityPercentage > 50 ? 'bg-teal-500' : availabilityPercentage > 25 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                    style={{ width: `${availabilityPercentage}%` }}
                                ></div>
                            </div>
                        </div>
                        {isAvailable ? (
                            <Link
                                href={`/daftar?jadwalId=${jadwal.id}`}
                                className="block w-full py-3 px-4 text-center rounded-md text-white font-medium transition-colors bg-sky-700 hover:bg-sky-800"
                            >
                                Daftar Sekarang
                            </Link>
                        ) : (
                            <button
                                disabled
                                className="block w-full py-3 px-4 text-center rounded-md text-white font-medium bg-gray-400 cursor-not-allowed"
                                aria-disabled="true"
                            >
                                Kuota Penuh
                            </button>
                        )}
                    </>
                ) : (
                    <div className="mb-[110px]">
                        {/* This empty space maintains the same height as cards with quota and registration button */}
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default JadwalCard;