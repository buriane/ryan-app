"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '@/context/AppContext';
import { formatDateIndonesian } from '@/utils/formatters';
import { JadwalDokter } from '@/types';

interface ModalKonfirmasiProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalKonfirmasi = ({ isOpen, onClose }: ModalKonfirmasiProps) => {
    const { lastPendaftaran, jadwalDokter } = useAppContext();

    // Close on ESC key
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen, onClose]);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    // Get jadwal details
    const jadwalDetail: JadwalDokter | undefined = lastPendaftaran
        ? jadwalDokter.find(jadwal => jadwal.id === lastPendaftaran.jadwalId)
        : undefined;

    if (!isOpen || !lastPendaftaran || !jadwalDetail) {
        return null;
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white bg-opacity-50 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 overflow-hidden"
                    >
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="absolute top-0 left-0 h-2 bg-green-500"
                        ></motion.div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                            onClick={onClose}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-center mb-6 pt-2"
                        >
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                    type: "spring",
                                    damping: 10,
                                    delay: 0.4,
                                    duration: 0.8
                                }}
                                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-2xl font-bold text-gray-800"
                            >
                                Pendaftaran Berhasil!
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="text-gray-600"
                            >
                                Anda telah terdaftar untuk jadwal dokter berikut:
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="bg-gray-50 rounded-lg p-4 mb-6"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.9 }}
                                    className="col-span-2"
                                >
                                    <p className="text-sm text-gray-500">Nomor Antrian</p>
                                    <p className="text-lg font-bold text-blue-600">{lastPendaftaran.nomorAntrian}</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.0 }}
                                >
                                    <p className="text-sm text-gray-500">Nama Pasien</p>
                                    <p className="font-medium">{lastPendaftaran.namaPasien}</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.1 }}
                                >
                                    <p className="text-sm text-gray-500">Nomor Telepon</p>
                                    <p className="font-medium">{lastPendaftaran.telepon}</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2 }}
                                    className="col-span-2"
                                >
                                    <p className="text-sm text-gray-500">Dokter</p>
                                    <p className="font-medium">{jadwalDetail.nama} - {jadwalDetail.spesialisasi}</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.3 }}
                                >
                                    <p className="text-sm text-gray-500">Tanggal</p>
                                    <p className="font-medium">{jadwalDetail.hari}, {formatDateIndonesian(jadwalDetail.tanggal)}</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.4 }}
                                >
                                    <p className="text-sm text-gray-500">Jam Praktik</p>
                                    <p className="font-medium">{jadwalDetail.jamMulai} - {jadwalDetail.jamSelesai}</p>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="text-sm text-center text-gray-500 mb-6"
                        >
                            Harap datang 30 menit sebelum jadwal dan bawa nomor antrian Anda
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onClose}
                            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
                        >
                            Kembali ke Beranda
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModalKonfirmasi;
