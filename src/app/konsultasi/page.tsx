"use client";

import { useAppContext } from "@/context/AppContext";
import KonsultasiCard from "@/components/KonsultasiCard";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Search, Calendar, RefreshCw, Check } from "lucide-react";
import { getOneSchedulePerDoctor } from "@/utils/doctorFilter";

export default function JadwalPage() {
    const { jadwalDokter } = useAppContext();

    // Add search filter state
    const [searchQuery, setSearchQuery] = useState("");

    // Get one schedule per doctor (1 doctor = 1 schedule)
    const uniqueDoctors = useMemo(() => getOneSchedulePerDoctor(jadwalDokter), [jadwalDokter]);

    // Filter doctors by name
    const filteredDoctors = useMemo(() => {
        return uniqueDoctors.filter(doctor =>
            doctor.nama.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [uniqueDoctors, searchQuery]);

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
                    Konsultasi Dokter
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-600 max-w-2xl mx-auto"
                >
                    Pilih dokter dan mulai konsultasi kesehatan gigi Anda secara online.
                </motion.p>
            </motion.section>

            {/* Filter Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8"
            >
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="mb-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Cari nama dokter..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
                            />
                        </div>
                    </div>

                    {/* Reset Kuota Button
                    <div className="flex justify-end items-center">
                        {resetSuccess && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mr-3 flex items-center text-green-600 text-sm"
                            >
                                <Check className="h-4 w-4 mr-1" />
                                <span>Kuota & nomor antrian berhasil direset!</span>
                            </motion.div>
                        )}
                        <button
                            onClick={handleResetKuota}
                            disabled={isResetting}
                            className={`flex items-center px-3 py-1.5 rounded-md font-medium text-sm transition-colors ${isResetting
                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                : 'bg-sky-100 hover:bg-sky-200 text-sky-800'
                                }`}
                        >
                            {isResetting ? (
                                <>
                                    <RefreshCw className="h-4 w-4 mr-1 animate-spin" />
                                    Sedang Mereset...
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                    Reset Semua Kuota
                                </>
                            )}
                        </button>
                    </div> */}
                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDoctors.map((jadwal, index) => (
                        <motion.div
                            key={jadwal.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * (index % 3) }}
                        >
                            <KonsultasiCard dokter={jadwal} />
                        </motion.div>
                    ))}
                </div>

                {filteredDoctors.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center py-12"
                    >
                        <p className="text-gray-500">
                            {uniqueDoctors.length === 0
                                ? "Tidak ada dokter tersedia saat ini"
                                : "Tidak ada dokter yang sesuai dengan pencarian"}
                        </p>
                    </motion.div>
                )}
            </motion.section>
        </motion.div>
    );
}
