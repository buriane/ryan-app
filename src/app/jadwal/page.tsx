"use client";

import { useAppContext } from "@/context/AppContext";
import JadwalCard from "@/components/JadwalCard";
import { motion } from "framer-motion";

export default function JadwalPage() {
    const { jadwalDokter } = useAppContext();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <motion.section
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center mb-8"
            >
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-3xl font-bold text-gray-800 mb-2"
                >
                    Jadwal Praktik Dokter
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-600 max-w-2xl mx-auto"
                >
                    Lihat jadwal dokter yang tersedia dan daftar untuk mendapatkan nomor antrian konsultasi
                </motion.p>
            </motion.section>

            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jadwalDokter.map((jadwal, index) => (
                        <motion.div
                            key={jadwal.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * (index % 3) }}
                        >
                            <JadwalCard jadwal={jadwal} />
                        </motion.div>
                    ))}
                </div>

                {jadwalDokter.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center py-12"
                    >
                        <p className="text-gray-500">Tidak ada jadwal dokter yang tersedia saat ini</p>
                    </motion.div>
                )}
            </motion.section>
        </motion.div>
    );
}
