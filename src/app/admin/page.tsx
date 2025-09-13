"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { resetJadwalUpdates, resetPendaftaranData } from "@/utils/resetStorage";
import { useRouter } from "next/navigation";

export default function AdminPage() {
    const router = useRouter();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleReset = () => {
        setLoading(true);
        try {
            // Reset jadwal updates (kuota)
            resetJadwalUpdates();
            // Reset pendaftaran data (nomor antrian)
            resetPendaftaranData();
            setMessage("Data jadwal dan nomor antrian berhasil direset! Halaman akan dimuat ulang dalam 2 detik...");

            // Reload the page after 2 seconds
            setTimeout(() => {
                router.refresh();
                window.location.href = "/jadwal"; // Redirect to jadwal page
            }, 2000);
        } catch (error) {
            setMessage("Terjadi kesalahan saat mereset data.");
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md"
        >
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Panel</h1>

            <div className="space-y-8">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-700 mb-3">Reset Data Jadwal & Nomor Antrian</h2>
                    <p className="text-gray-600 mb-4">
                        Tombol ini akan menghapus semua perubahan pada kuota jadwal dan mengembalikan ke nilai default,
                        serta mereset nomor antrian kembali ke awal (A001).
                        Gunakan dengan hati-hati, karena data tidak dapat dipulihkan setelah direset.
                    </p>

                    <div className="flex items-center">
                        <button
                            onClick={handleReset}
                            disabled={loading}
                            className={`px-4 py-2 rounded-md text-white font-medium ${loading ? 'bg-gray-400' : 'bg-red-600 hover:bg-red-700'}`}
                        >
                            {loading ? 'Sedang memproses...' : 'Reset Data Jadwal & Nomor Antrian'}
                        </button>

                        {message && (
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="ml-4 text-sm font-medium text-green-600"
                            >
                                {message}
                            </motion.p>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}