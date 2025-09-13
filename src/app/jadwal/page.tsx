"use client";

import { useAppContext } from "@/context/AppContext";
import JadwalCard from "@/components/JadwalCard";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Search, Calendar } from "lucide-react";

export default function JadwalPage() {
    const { jadwalDokter } = useAppContext();

    // Filter states
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDay, setSelectedDay] = useState("Semua");

    // Days of the week in Indonesia
    const daysOfWeek = ["Semua", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

    // Get unique doctor names for dropdown
    const uniqueDoctors = useMemo(() => {
        const doctorNames = jadwalDokter.map(jadwal => jadwal.nama);
        return [...new Set(doctorNames)];
    }, [jadwalDokter]);

    // Filter jadwal based on search query and selected day
    const filteredJadwal = useMemo(() => {
        return jadwalDokter.filter(jadwal => {
            // Filter by doctor name
            const nameMatch = jadwal.nama.toLowerCase().includes(searchQuery.toLowerCase());

            // Filter by day
            let dayMatch = true;
            if (selectedDay !== "Semua") {
                // Special handling for Dr. Ryan who should appear on all days
                if (jadwal.hari === "-") {
                    dayMatch = true;  // Show Dr. Ryan on all days
                } else {
                    dayMatch = jadwal.hari === selectedDay;
                }
            }

            return nameMatch && dayMatch;
        });
    }, [jadwalDokter, searchQuery, selectedDay]);

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

            {/* Filter Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8"
            >
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Doctor Name Search */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Cari dokter..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
                            />
                        </div>

                        {/* Day Filter */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar className="h-5 w-5 text-gray-400" />
                            </div>
                            <select
                                value={selectedDay}
                                onChange={(e) => setSelectedDay(e.target.value)}
                                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500 bg-white"
                            >
                                {daysOfWeek.map((day) => (
                                    <option key={day} value={day}>
                                        {day === "Semua" ? "Semua Hari" : day}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJadwal.map((jadwal, index) => (
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

                {filteredJadwal.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center py-12"
                    >
                        <p className="text-gray-500">Tidak ada jadwal dokter yang sesuai dengan filter</p>
                    </motion.div>
                )}
            </motion.section>
        </motion.div>
    );
}
