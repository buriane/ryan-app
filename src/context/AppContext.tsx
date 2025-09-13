"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { JadwalDokter, Pendaftaran, FormInput } from '../types';
import { getPendaftaranList, getJadwalWithUpdates, savePendaftaran, updateJadwalKuota, generateNomorAntrian, getTanggalMingguIni } from '../utils/storage';

// Static doctor schedule data
const JADWAL_DOKTER_DATA: JadwalDokter[] = [
    // drg. Amaliya (Selasa–Minggu, 08–12)
    { id: 1, nama: "drg. Amaliya Solihatul Mut Mainah, M.HKes., Ph.D.", spesialisasi: "Dokter Gigi Umum", hari: "Selasa", tanggal: getTanggalMingguIni("Selasa"), jamMulai: "08:00", jamSelesai: "12:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile1.jpg" },
    { id: 2, nama: "drg. Amaliya Solihatul Mut Mainah, M.HKes., Ph.D.", spesialisasi: "Dokter Gigi Umum", hari: "Rabu", tanggal: getTanggalMingguIni("Rabu"), jamMulai: "08:00", jamSelesai: "12:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile1.jpg" },
    { id: 3, nama: "drg. Amaliya Solihatul Mut Mainah, M.HKes., Ph.D.", spesialisasi: "Dokter Gigi Umum", hari: "Kamis", tanggal: getTanggalMingguIni("Kamis"), jamMulai: "08:00", jamSelesai: "12:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile1.jpg" },
    { id: 4, nama: "drg. Amaliya Solihatul Mut Mainah, M.HKes., Ph.D.", spesialisasi: "Dokter Gigi Umum", hari: "Jumat", tanggal: getTanggalMingguIni("Jumat"), jamMulai: "08:00", jamSelesai: "12:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile1.jpg" },
    { id: 5, nama: "drg. Amaliya Solihatul Mut Mainah, M.HKes., Ph.D.", spesialisasi: "Dokter Gigi Umum", hari: "Sabtu", tanggal: getTanggalMingguIni("Sabtu"), jamMulai: "08:00", jamSelesai: "12:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile1.jpg" },
    { id: 6, nama: "drg. Amaliya Solihatul Mut Mainah, M.HKes., Ph.D.", spesialisasi: "Dokter Gigi Umum", hari: "Minggu", tanggal: getTanggalMingguIni("Minggu"), jamMulai: "08:00", jamSelesai: "12:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile1.jpg" },

    // drg. Ana (Selasa–Minggu, 08–12)
    { id: 7, nama: "drg. Ana Musyarofah, Sp.KGA., MDSc.", spesialisasi: "Spesialis Kedokteran Gigi Anak", hari: "Selasa", tanggal: getTanggalMingguIni("Selasa"), jamMulai: "08:00", jamSelesai: "12:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile2.jpg" },
    { id: 8, nama: "drg. Ana Musyarofah, Sp.KGA., MDSc.", spesialisasi: "Spesialis Kedokteran Gigi Anak", hari: "Rabu", tanggal: getTanggalMingguIni("Rabu"), jamMulai: "08:00", jamSelesai: "12:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile2.jpg" },
    { id: 9, nama: "drg. Ana Musyarofah, Sp.KGA., MDSc.", spesialisasi: "Spesialis Kedokteran Gigi Anak", hari: "Kamis", tanggal: getTanggalMingguIni("Kamis"), jamMulai: "08:00", jamSelesai: "12:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile2.jpg" },
    { id: 10, nama: "drg. Ana Musyarofah, Sp.KGA., MDSc.", spesialisasi: "Spesialis Kedokteran Gigi Anak", hari: "Jumat", tanggal: getTanggalMingguIni("Jumat"), jamMulai: "08:00", jamSelesai: "12:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile2.jpg" },
    { id: 11, nama: "drg. Ana Musyarofah, Sp.KGA., MDSc.", spesialisasi: "Spesialis Kedokteran Gigi Anak", hari: "Sabtu", tanggal: getTanggalMingguIni("Sabtu"), jamMulai: "08:00", jamSelesai: "12:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile2.jpg" },
    { id: 12, nama: "drg. Ana Musyarofah, Sp.KGA., MDSc.", spesialisasi: "Spesialis Kedokteran Gigi Anak", hari: "Minggu", tanggal: getTanggalMingguIni("Minggu"), jamMulai: "08:00", jamSelesai: "12:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile2.jpg" },

    // drg. Barto (Selasa, Kamis, Sabtu, 08–12)
    { id: 13, nama: "drg. Barto Lumeus Felix Tampubolon, Sp.Ort., M.PH., S.H.", spesialisasi: "Spesialis Ortodonti", hari: "Selasa", tanggal: getTanggalMingguIni("Selasa"), jamMulai: "08:00", jamSelesai: "12:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile3.jpg" },
    { id: 14, nama: "drg. Barto Lumeus Felix Tampubolon, Sp.Ort., M.PH., S.H.", spesialisasi: "Spesialis Ortodonti", hari: "Kamis", tanggal: getTanggalMingguIni("Kamis"), jamMulai: "08:00", jamSelesai: "12:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile3.jpg" },
    { id: 15, nama: "drg. Barto Lumeus Felix Tampubolon, Sp.Ort., M.PH., S.H.", spesialisasi: "Spesialis Ortodonti", hari: "Sabtu", tanggal: getTanggalMingguIni("Sabtu"), jamMulai: "08:00", jamSelesai: "12:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile3.jpg" },

    // drg. Dafina (Rabu & Minggu 08–12, Sabtu 16–20)
    { id: 16, nama: "drg. Dafina Alliyya Kharuninsa, Sp.KG.", spesialisasi: "Spesialis Konservasi Gigi", hari: "Rabu", tanggal: getTanggalMingguIni("Rabu"), jamMulai: "08:00", jamSelesai: "12:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile4.jpg" },
    { id: 17, nama: "drg. Dafina Alliyya Kharuninsa, Sp.KG.", spesialisasi: "Spesialis Konservasi Gigi", hari: "Minggu", tanggal: getTanggalMingguIni("Minggu"), jamMulai: "08:00", jamSelesai: "12:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile4.jpg" },
    { id: 18, nama: "drg. Dafina Alliyya Kharuninsa, Sp.KG.", spesialisasi: "Spesialis Konservasi Gigi", hari: "Sabtu", tanggal: getTanggalMingguIni("Sabtu"), jamMulai: "16:00", jamSelesai: "20:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile4.jpg" },

    // drg. Dewi (Rabu, Jumat, Minggu 16–20)
    { id: 19, nama: "drg. Dewi Setyowati, Sp.Ort., M.B.A.", spesialisasi: "Spesialis Ortodonti", hari: "Rabu", tanggal: getTanggalMingguIni("Rabu"), jamMulai: "16:00", jamSelesai: "20:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile5.jpg" },
    { id: 20, nama: "drg. Dewi Setyowati, Sp.Ort., M.B.A.", spesialisasi: "Spesialis Ortodonti", hari: "Jumat", tanggal: getTanggalMingguIni("Jumat"), jamMulai: "16:00", jamSelesai: "20:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile5.jpg" },
    { id: 21, nama: "drg. Dewi Setyowati, Sp.Ort., M.B.A.", spesialisasi: "Spesialis Ortodonti", hari: "Minggu", tanggal: getTanggalMingguIni("Minggu"), jamMulai: "16:00", jamSelesai: "20:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile5.jpg" },

    // drg. Ryan (Selasa-Minggu, tapi tidak ada jadwal praktik spesifik)
    { id: 22, nama: "drg. Ryan Ferdinand, Sp.RKG., MARS.", spesialisasi: "Spesialis Radiologi Kedokteran Gigi", hari: "Selasa", tanggal: getTanggalMingguIni("Selasa"), jamMulai: "-", jamSelesai: "-", kuotaTotal: 1, kuotaTersisa: 1, profileImg: "/profile6.jpg" },
    { id: 38, nama: "drg. Ryan Ferdinand, Sp.RKG., MARS.", spesialisasi: "Spesialis Radiologi Kedokteran Gigi", hari: "Rabu", tanggal: getTanggalMingguIni("Rabu"), jamMulai: "-", jamSelesai: "-", kuotaTotal: 1, kuotaTersisa: 1, profileImg: "/profile6.jpg" },
    { id: 39, nama: "drg. Ryan Ferdinand, Sp.RKG., MARS.", spesialisasi: "Spesialis Radiologi Kedokteran Gigi", hari: "Kamis", tanggal: getTanggalMingguIni("Kamis"), jamMulai: "-", jamSelesai: "-", kuotaTotal: 1, kuotaTersisa: 1, profileImg: "/profile6.jpg" },
    { id: 40, nama: "drg. Ryan Ferdinand, Sp.RKG., MARS.", spesialisasi: "Spesialis Radiologi Kedokteran Gigi", hari: "Jumat", tanggal: getTanggalMingguIni("Jumat"), jamMulai: "-", jamSelesai: "-", kuotaTotal: 1, kuotaTersisa: 1, profileImg: "/profile6.jpg" },
    { id: 41, nama: "drg. Ryan Ferdinand, Sp.RKG., MARS.", spesialisasi: "Spesialis Radiologi Kedokteran Gigi", hari: "Sabtu", tanggal: getTanggalMingguIni("Sabtu"), jamMulai: "-", jamSelesai: "-", kuotaTotal: 1, kuotaTersisa: 1, profileImg: "/profile6.jpg" },
    { id: 42, nama: "drg. Ryan Ferdinand, Sp.RKG., MARS.", spesialisasi: "Spesialis Radiologi Kedokteran Gigi", hari: "Minggu", tanggal: getTanggalMingguIni("Minggu"), jamMulai: "-", jamSelesai: "-", kuotaTotal: 1, kuotaTersisa: 1, profileImg: "/profile6.jpg" },

    // drg. Salma (Selasa–Minggu, 16–20)
    { id: 23, nama: "drg. Salma Alya Nabila, MDSc.", spesialisasi: "Dokter Gigi", hari: "Selasa", tanggal: getTanggalMingguIni("Selasa"), jamMulai: "16:00", jamSelesai: "20:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile7.jpg" },
    { id: 24, nama: "drg. Salma Alya Nabila, MDSc.", spesialisasi: "Dokter Gigi", hari: "Rabu", tanggal: getTanggalMingguIni("Rabu"), jamMulai: "16:00", jamSelesai: "20:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile7.jpg" },
    { id: 25, nama: "drg. Salma Alya Nabila, MDSc.", spesialisasi: "Dokter Gigi", hari: "Kamis", tanggal: getTanggalMingguIni("Kamis"), jamMulai: "16:00", jamSelesai: "20:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile7.jpg" },
    { id: 26, nama: "drg. Salma Alya Nabila, MDSc.", spesialisasi: "Dokter Gigi", hari: "Jumat", tanggal: getTanggalMingguIni("Jumat"), jamMulai: "16:00", jamSelesai: "20:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile7.jpg" },
    { id: 27, nama: "drg. Salma Alya Nabila, MDSc.", spesialisasi: "Dokter Gigi", hari: "Sabtu", tanggal: getTanggalMingguIni("Sabtu"), jamMulai: "16:00", jamSelesai: "20:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile7.jpg" },
    { id: 28, nama: "drg. Salma Alya Nabila, MDSc.", spesialisasi: "Dokter Gigi", hari: "Minggu", tanggal: getTanggalMingguIni("Minggu"), jamMulai: "16:00", jamSelesai: "20:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile7.jpg" },

    // drg. Shaffana (Selasa–Minggu, 16–20)
    { id: 29, nama: "drg. Shaffana Almadea, Sp.KGA.", spesialisasi: "Spesialis Kedokteran Gigi Anak", hari: "Selasa", tanggal: getTanggalMingguIni("Selasa"), jamMulai: "16:00", jamSelesai: "20:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile8.jpg" },
    { id: 30, nama: "drg. Shaffana Almadea, Sp.KGA.", spesialisasi: "Spesialis Kedokteran Gigi Anak", hari: "Rabu", tanggal: getTanggalMingguIni("Rabu"), jamMulai: "16:00", jamSelesai: "20:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile8.jpg" },
    { id: 31, nama: "drg. Shaffana Almadea, Sp.KGA.", spesialisasi: "Spesialis Kedokteran Gigi Anak", hari: "Kamis", tanggal: getTanggalMingguIni("Kamis"), jamMulai: "16:00", jamSelesai: "20:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile8.jpg" },
    { id: 32, nama: "drg. Shaffana Almadea, Sp.KGA.", spesialisasi: "Spesialis Kedokteran Gigi Anak", hari: "Jumat", tanggal: getTanggalMingguIni("Jumat"), jamMulai: "16:00", jamSelesai: "20:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile8.jpg" },
    { id: 33, nama: "drg. Shaffana Almadea, Sp.KGA.", spesialisasi: "Spesialis Kedokteran Gigi Anak", hari: "Sabtu", tanggal: getTanggalMingguIni("Sabtu"), jamMulai: "16:00", jamSelesai: "20:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile8.jpg" },
    { id: 34, nama: "drg. Shaffana Almadea, Sp.KGA.", spesialisasi: "Spesialis Kedokteran Gigi Anak", hari: "Minggu", tanggal: getTanggalMingguIni("Minggu"), jamMulai: "16:00", jamSelesai: "20:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile8.jpg" },

    // drg. Vicky (Selasa & Kamis 16–20, Jumat 08–12)
    { id: 35, nama: "drg. Vicky Nadia Setiawan, Sp.BM., M.Kes.", spesialisasi: "Spesialis Bedah Mulut", hari: "Selasa", tanggal: getTanggalMingguIni("Selasa"), jamMulai: "16:00", jamSelesai: "20:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile9.jpg" },
    { id: 36, nama: "drg. Vicky Nadia Setiawan, Sp.BM., M.Kes.", spesialisasi: "Spesialis Bedah Mulut", hari: "Kamis", tanggal: getTanggalMingguIni("Kamis"), jamMulai: "16:00", jamSelesai: "20:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile9.jpg" },
    { id: 37, nama: "drg. Vicky Nadia Setiawan, Sp.BM., M.Kes.", spesialisasi: "Spesialis Bedah Mulut", hari: "Jumat", tanggal: getTanggalMingguIni("Jumat"), jamMulai: "08:00", jamSelesai: "12:00", kuotaTotal: 5, kuotaTersisa: 5, profileImg: "/profile9.jpg" },
];



interface AppContextType {
    jadwalDokter: JadwalDokter[];
    pendaftaranList: Pendaftaran[];
    selectedJadwal: JadwalDokter | null;
    setSelectedJadwal: (jadwal: JadwalDokter | null) => void;
    daftarPasien: (formData: FormInput) => Promise<Pendaftaran>;
    successMessage: string | null;
    setSuccessMessage: (message: string | null) => void;
    errorMessage: string | null;
    setErrorMessage: (message: string | null) => void;
    lastPendaftaran: Pendaftaran | null;
    loading: boolean;
    resetKuota: () => Promise<boolean>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [jadwalDokter, setJadwalDokter] = useState<JadwalDokter[]>([]);
    const [pendaftaranList, setPendaftaranList] = useState<Pendaftaran[]>([]);
    const [selectedJadwal, setSelectedJadwal] = useState<JadwalDokter | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [lastPendaftaran, setLastPendaftaran] = useState<Pendaftaran | null>(null);
    const [loading, setLoading] = useState(false);

    // Initialize data on component mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Import sanitizeJadwalUpdates dynamically to avoid circular imports
            import('../utils/resetStorage').then(({ sanitizeJadwalUpdates }) => {
                // First, sanitize any localStorage data to ensure kuotaTersisa <= kuotaTotal
                sanitizeJadwalUpdates(JADWAL_DOKTER_DATA);

                // Get updated jadwal with kuota from localStorage
                const updatedJadwal = getJadwalWithUpdates(JADWAL_DOKTER_DATA);
                setJadwalDokter(updatedJadwal);

                // Get pendaftaran list from localStorage
                const storedPendaftaran = getPendaftaranList();
                setPendaftaranList(storedPendaftaran);
            });
        }
    }, []);

    // Function to register a patient
    const daftarPasien = async (formData: FormInput): Promise<Pendaftaran> => {
        setLoading(true);
        try {
            // Find the selected jadwal
            const jadwal = jadwalDokter.find(j => j.id === formData.jadwalId);

            if (!jadwal) {
                throw new Error("Jadwal tidak ditemukan");
            }

            if (jadwal.kuotaTersisa <= 0) {
                throw new Error("Kuota jadwal sudah penuh");
            }

            // Generate unique ID
            const id = `reg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

            // Generate nomor antrian
            const nomorAntrian = generateNomorAntrian(jadwal.id);

            // Create new pendaftaran
            const newPendaftaran: Pendaftaran = {
                id,
                nomorAntrian,
                namaPasien: formData.namaPasien,
                telepon: formData.telepon,
                jadwalId: jadwal.id,
                tanggalDaftar: new Date().toISOString()
            };

            // Save to localStorage
            savePendaftaran(newPendaftaran);

            // Update kuota
            const newKuotaTersisa = jadwal.kuotaTersisa - 1;
            updateJadwalKuota(jadwal.id, newKuotaTersisa);

            // Update state
            setPendaftaranList(prev => [...prev, newPendaftaran]);

            // Update jadwal with new kuota
            setJadwalDokter(prev =>
                prev.map(j => j.id === jadwal.id ? { ...j, kuotaTersisa: newKuotaTersisa } : j)
            );

            setLastPendaftaran(newPendaftaran);
            setSuccessMessage("Pendaftaran berhasil!");

            return newPendaftaran;
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("Terjadi kesalahan saat mendaftarkan pasien");
            }
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Function to reset all kuota values and queue numbers to their defaults
    const resetKuota = async (): Promise<boolean> => {
        try {
            setLoading(true);

            // Import reset functions dynamically
            const { resetJadwalUpdates, resetPendaftaranData } = await import('../utils/resetStorage');

            // Reset localStorage data for jadwal updates
            resetJadwalUpdates();

            // Reset pendaftaran data to reset queue numbers
            resetPendaftaranData();

            // Update jadwal state with default kuota values from JADWAL_DOKTER_DATA
            setJadwalDokter([...JADWAL_DOKTER_DATA]);

            // Clear pendaftaran list in state
            setPendaftaranList([]);

            setSuccessMessage("Semua kuota dan nomor antrian berhasil direset!");
            setTimeout(() => setSuccessMessage(null), 1000);

            setLoading(false);
            return true;
        } catch (error) {
            setErrorMessage("Gagal mereset kuota");
            setTimeout(() => setErrorMessage(null), 1000);

            setLoading(false);
            return false;
        }
    };

    const value = {
        jadwalDokter,
        pendaftaranList,
        selectedJadwal,
        setSelectedJadwal,
        daftarPasien,
        successMessage,
        setSuccessMessage,
        errorMessage,
        setErrorMessage,
        lastPendaftaran,
        loading,
        resetKuota
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
