"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LottiePlayer from "@/components/LottiePlayer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-sky-800 to-teal-700 text-white overflow-hidden rounded-2xl">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-sky-300/15 rounded-full blur-2xl animate-bounce delay-500"></div>
        </div>

        {/* Floating Medical Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-1/4 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center"
          >
            ⚕️
          </motion.div>
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 right-10 w-10 h-10 bg-sky-300/25 rounded-full flex items-center justify-center"
          >
            🦷
          </motion.div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 py-16 md:py-24 min-h-screen flex flex-col md:flex-row items-center justify-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8"
          >
            {/* Logo and Brand Name with Glass Effect */}
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.3 }}
              className="flex items-center gap-4 mb-8 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl w-fit"
            >
              <motion.div
                whileHover={{
                  rotate: [0, -10, 10, 0],
                  scale: 1.1
                }}
                transition={{ type: "spring", bounce: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-white via-blue-50 to-sky-100 rounded-2xl shadow-xl flex items-center justify-center transition-all duration-300 border-2 border-white/30"
              >
                <Image src="/logo.png" alt="Dentiland Logo" width={40} height={40} className="drop-shadow-sm" />
              </motion.div>
              <div className="flex flex-col">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg md:text-xl font-bold text-white tracking-wide"
                >
                  Dentiland
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-sm text-sky-100 font-medium"
                >
                  Healthcare Excellence
                </motion.span>
              </div>
            </motion.div>

            {/* Main Heading with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-sky-100 to-teal-200 bg-clip-text text-transparent">
                Layanan
              </span>
              <br />
              <span className="text-white">
                Pendaftaran
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-200 via-sky-100 to-white bg-clip-text text-transparent">
                Dokter Online
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-10"
            >
              <p className="text-md md:text-lg text-sky-100 font-light leading-relaxed mb-4">
                Daftar konsultasi dengan dokter secara mudah, cepat dan efisien tanpa perlu antri lama
              </p>
              <div className="flex items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">24/7 Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <span className="text-sm font-medium">Certified Doctors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                  <span className="text-sm font-medium">Secure Platform</span>
                </div>
              </div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Link href="/jadwal" className="relative block bg-white text-sky-900 px-8 py-4 rounded-2xl font-bold text-md transition-all duration-300 text-center shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-teal-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    <span>Lihat Jadwal Dokter</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Link href="/daftar" className="relative block bg-gradient-to-r from-teal-500 to-sky-600 text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-bold text-md transition-all duration-300 text-center shadow-2xl overflow-hidden backdrop-blur-sm">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    <span>Daftar Sekarang</span>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    ></motion.div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Animation */}
          <motion.div
            initial={{ x: 100, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="w-full md:w-1/2 flex justify-center relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-white/10 to-teal-300/20 rounded-3xl blur-2xl"></div>
            <div className="absolute inset-8 border border-white/20 rounded-3xl"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 1,
                delay: 0.8,
                type: "spring",
                bounce: 0.4
              }}
              className="relative w-full h-80 sm:h-96 md:h-[500px] max-w-lg"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full bg-white/5 backdrop-blur-md rounded-3xl p-4 shadow-2xl border border-white/10"
              >
                <LottiePlayer
                  src="https://assets3.lottiefiles.com/packages/lf20_QU0V6MuXdA.json"
                  style={{ width: '100%', height: '100%', minHeight: '300px' }}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                />
              </motion.div>
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
            <Link href="/jadwal" className="block bg-sky-800 hover:bg-sky-900 text-white px-6 py-3 rounded-md font-semibold transition-colors">
              Lihat Jadwal Dokter
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
