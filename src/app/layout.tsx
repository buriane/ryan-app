import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dentiland - Jadwal Dokter & Pendaftaran Pasien",
  description: "Dentiland - Sistem informasi jadwal dokter dan pendaftaran pasien yang mudah dan terpercaya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Adding the script in the head element */}
        <Script
          src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-gray-50 text-gray-900`}
        style={{ fontFamily: 'var(--font-geist-sans)' }}
      >
        <AppProvider>
          <Navbar />
          <div className="container mx-auto px-4 py-8 pt-24">
            {children}
          </div>
        </AppProvider>
        <Footer />
      </body>
    </html>
  );
}
