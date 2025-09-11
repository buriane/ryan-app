"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { JadwalDokter, Pendaftaran, FormInput } from '../types';
import { getPendaftaranList, getJadwalWithUpdates, savePendaftaran, updateJadwalKuota, generateNomorAntrian } from '../utils/storage';

// Static doctor schedule data
const JADWAL_DOKTER_DATA: JadwalDokter[] = [
    {
        id: 1,
        nama: "Dr. Ahmad Santoso",
        spesialisasi: "Dokter Umum",
        hari: "Senin",
        tanggal: "2024-01-15",
        jamMulai: "08:00",
        jamSelesai: "12:00",
        kuotaTotal: 20,
        kuotaTersisa: 20
    },
    {
        id: 2,
        nama: "Dr. Sari Indrawati",
        spesialisasi: "Dokter Anak",
        hari: "Selasa",
        tanggal: "2024-01-16",
        jamMulai: "09:00",
        jamSelesai: "13:00",
        kuotaTotal: 15,
        kuotaTersisa: 15
    },
    {
        id: 3,
        nama: "Dr. Budi Prasetyo",
        spesialisasi: "Dokter Gigi",
        hari: "Rabu",
        tanggal: "2024-01-17",
        jamMulai: "13:00",
        jamSelesai: "17:00",
        kuotaTotal: 12,
        kuotaTersisa: 12
    },
    {
        id: 4,
        nama: "Dr. Maya Wijaya",
        spesialisasi: "Dokter Kulit",
        hari: "Kamis",
        tanggal: "2024-01-18",
        jamMulai: "10:00",
        jamSelesai: "14:00",
        kuotaTotal: 10,
        kuotaTersisa: 10
    },
    {
        id: 5,
        nama: "Dr. Rini Susanti",
        spesialisasi: "Dokter Mata",
        hari: "Jumat",
        tanggal: "2024-01-19",
        jamMulai: "08:00",
        jamSelesai: "12:00",
        kuotaTotal: 15,
        kuotaTersisa: 15
    }
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
            // Get updated jadwal with kuota from localStorage
            const updatedJadwal = getJadwalWithUpdates(JADWAL_DOKTER_DATA);
            setJadwalDokter(updatedJadwal);

            // Get pendaftaran list from localStorage
            const storedPendaftaran = getPendaftaranList();
            setPendaftaranList(storedPendaftaran);
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
        loading
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
