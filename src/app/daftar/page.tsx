"use client";

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';
import FormDaftar from '@/components/FormDaftar';
import ModalKonfirmasi from '@/components/ModalKonfirmasi';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DaftarPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { successMessage, setSuccessMessage, errorMessage, lastPendaftaran } = useAppContext();

    const [showModal, setShowModal] = useState(false);
    const jadwalId = searchParams.get('jadwalId') ? parseInt(searchParams.get('jadwalId') as string, 10) : undefined;

    useEffect(() => {
        // Show modal when registration is successful
        if (successMessage && lastPendaftaran) {
            setShowModal(true);
            // Clear success message
            setSuccessMessage(null);
        }
    }, [successMessage, lastPendaftaran, setSuccessMessage]);

    // Close modal and redirect to home
    const handleCloseModal = () => {
        setShowModal(false);
        router.push('/');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
        >
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-8"
            >
                <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }}>
                    <Link
                        href="/"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Kembali ke beranda
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6 mb-8"
            >
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl font-bold text-gray-800 mb-1"
                >
                    Pendaftaran Pasien
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-600 mb-6"
                >
                    Silakan isi data diri Anda untuk mendaftar konsultasi dokter
                </motion.p>

                {/* Error message */}
                {errorMessage && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-6"
                    >
                        <div className="flex">
                            <motion.svg
                                animate={{
                                    rotate: [0, 10, -10, 10, 0]
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                    times: [0, 0.25, 0.5, 0.75, 1]
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </motion.svg>
                            <p>{errorMessage}</p>
                        </div>
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <FormDaftar preselectedJadwalId={jadwalId} />
                </motion.div>
            </motion.div>

            {showModal && <ModalKonfirmasi isOpen={showModal} onClose={handleCloseModal} />}
        </motion.div>
    );
}
