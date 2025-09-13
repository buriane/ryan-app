import { JadwalDokter, JadwalUpdate } from "../types";
import { getJadwalUpdate, setStorageData } from "./storage";

// Function to clear all jadwal updates from localStorage
export const resetJadwalUpdates = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jadwalUpdate');
    }
};

// Function to clear all pendaftaran data from localStorage
export const resetPendaftaranData = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('pendaftaran');
    }
};

// Function to ensure kuota values are consistent
export const sanitizeJadwalUpdates = (jadwalList: JadwalDokter[]): void => {
    if (typeof window !== 'undefined') {
        const updates = getJadwalUpdate();

        // Filter out any invalid updates and ensure kuotaTersisa is not greater than kuotaTotal
        const sanitizedUpdates = updates
            .map((update: JadwalUpdate) => {
                const jadwal = jadwalList.find(j => j.id === update.jadwalId);
                if (!jadwal) return null;

                // Ensure kuotaTersisa doesn't exceed kuotaTotal
                const validKuota = Math.min(update.kuotaTersisa, jadwal.kuotaTotal);
                return {
                    jadwalId: update.jadwalId,
                    kuotaTersisa: validKuota
                };
            })
            .filter((update: JadwalUpdate | null) => update !== null) as JadwalUpdate[];

        // Save the sanitized updates back to localStorage
        setStorageData('jadwalUpdate', sanitizedUpdates);
    }
};