// Types for doctor schedules
export interface JadwalDokter {
    id: number;
    nama: string;
    spesialisasi: string;
    hari: string;
    tanggal: string;
    jamMulai: string;
    jamSelesai: string;
    kuotaTotal: number;
    kuotaTersisa: number;
    profileImg?: string; // Optional field for profile image path
}

// Types for patient registration
export interface Pendaftaran {
    id: string;
    nomorAntrian: string;
    namaPasien: string;
    telepon: string;
    jadwalId: number;
    tanggalDaftar: string;
}

// Types for schedule updates
export interface JadwalUpdate {
    jadwalId: number;
    kuotaTersisa: number;
}

// Types for form inputs
export interface FormInput {
    namaPasien: string;
    telepon: string;
    jadwalId: number;
}

// Types for form errors
export interface FormError {
    namaPasien?: string;
    telepon?: string;
    jadwalId?: string;
}
