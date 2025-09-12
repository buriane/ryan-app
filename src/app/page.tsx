"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LottiePlayer from "@/components/LottiePlayer";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-sky-400 text-white rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-sky-900 opacity-90"></div>
        <div className="relative container mx-auto px-4 sm:px-6 py-12 md:py-16 flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Layanan Pendaftaran Dokter Online
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg mb-8"
            >
              Daftar konsultasi dengan dokter secara mudah, cepat dan efisien tanpa perlu antri lama
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/jadwal" className="block bg-white text-sky-800 px-6 py-3 rounded-md font-semibold transition-colors text-center">
                  Lihat Jadwal Dokter
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/daftar" className="block bg-teal-600 text-white border border-white px-6 py-3 rounded-md font-semibold transition-colors text-center">
                  Daftar Sekarang
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-64 sm:h-72 md:h-80 relative mx-4 sm:mx-0 sm:max-w-md"
            >
              <LottiePlayer
                src="https://assets3.lottiefiles.com/packages/lf20_QU0V6MuXdA.json"
                style={{ width: '100%', height: '100%', minHeight: '250px' }}
                background="transparent"
                speed="1"
                loop
                autoplay
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-gray-800 mb-2"
          >
            Fitur Aplikasi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Nikmati berbagai kemudahan yang ditawarkan oleh aplikasi pendaftaran dokter kami
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-12 h-12 bg-sky-100 text-teal-500 rounded-full flex items-center justify-center mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Jadwal Real-time</h3>
            <p className="text-gray-600">
              Lihat ketersediaan jadwal dokter secara real-time dan pilih waktu yang paling sesuai dengan kebutuhan Anda
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-12 h-12 bg-sky-100 text-teal-500 rounded-full flex items-center justify-center mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Nomor Antrian</h3>
            <p className="text-gray-600">
              Dapatkan nomor antrian secara otomatis dan hindari menunggu lama di rumah sakit atau klinik
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-12 h-12 bg-sky-100 text-teal-500 rounded-full flex items-center justify-center mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Pendaftaran Mudah</h3>
            <p className="text-gray-600">
              Proses pendaftaran yang sederhana dan cepat, cukup isi data diri dan pilih jadwal yang diinginkan
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-gray-100 rounded-xl p-8 text-center"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold text-gray-800 mb-4"
        >
          Siap untuk mendaftar?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-600 max-w-2xl mx-auto mb-8"
        >
          Lihat jadwal dokter yang tersedia dan daftar konsultasi sekarang juga
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/jadwal" className="block bg-teal-600 text-white px-6 py-3 rounded-md font-semibold transition-colors">
              Lihat Jadwal Dokter
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
