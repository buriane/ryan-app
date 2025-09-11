import { JadwalDokter, Pendaftaran, JadwalUpdate } from "../types";

// Fungsi untuk mendapatkan data dari localStorage
export const getStorageData = (key: string) => {
    if (typeof window !== 'undefined') {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
    return null;
};

// Fungsi untuk menyimpan data ke localStorage
export const setStorageData = <T>(key: string, data: T) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(data));
    }
};

// Mendapatkan daftar pendaftaran
export const getPendaftaranList = (): Pendaftaran[] => {
    return getStorageData('pendaftaran') || [];
};

// Menyimpan pendaftaran baru
export const savePendaftaran = (pendaftaran: Pendaftaran) => {
    const pendaftaranList = getPendaftaranList();
    pendaftaranList.push(pendaftaran);
    setStorageData('pendaftaran', pendaftaranList);
};

// Mendapatkan update jadwal
export const getJadwalUpdate = (): JadwalUpdate[] => {
    return getStorageData('jadwalUpdate') || [];
};

// Memperbarui kuota jadwal
export const updateJadwalKuota = (jadwalId: number, kuotaTersisa: number) => {
    const jadwalUpdates = getJadwalUpdate();
    const existingUpdate = jadwalUpdates.find(update => update.jadwalId === jadwalId);

    if (existingUpdate) {
        existingUpdate.kuotaTersisa = kuotaTersisa;
    } else {
        jadwalUpdates.push({ jadwalId, kuotaTersisa });
    }

    setStorageData('jadwalUpdate', jadwalUpdates);
};

// Mendapatkan jumlah pendaftaran untuk jadwal tertentu
export const getPendaftaranCountByJadwal = (jadwalId: number): number => {
    const pendaftaranList = getPendaftaranList();
    return pendaftaranList.filter(p => p.jadwalId === jadwalId).length;
};

// Generate nomor antrian
export const generateNomorAntrian = (jadwalId: number): string => {
    const count = getPendaftaranCountByJadwal(jadwalId);
    return `A${String(count + 1).padStart(3, '0')}`;
};

// Mendapatkan jadwal dokter dengan update kuota dari localStorage
export const getJadwalWithUpdates = (jadwalList: JadwalDokter[]): JadwalDokter[] => {
    const updates = getJadwalUpdate();

    return jadwalList.map(jadwal => {
        const update = updates.find(u => u.jadwalId === jadwal.id);
        return update
            ? { ...jadwal, kuotaTersisa: update.kuotaTersisa }
            : jadwal;
    });
};
