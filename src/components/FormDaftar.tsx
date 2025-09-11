"use client";

import React, { useState, useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';
import { FormError, FormInput } from '@/types';
import { formatDateIndonesian } from '@/utils/formatters';

interface FormDaftarProps {
    preselectedJadwalId?: number;
    onSuccess?: () => void;
}

const FormDaftar = ({ preselectedJadwalId, onSuccess }: FormDaftarProps) => {
    const { jadwalDokter, daftarPasien, loading } = useAppContext();

    const [formData, setFormData] = useState<FormInput>({
        namaPasien: '',
        telepon: '',
        jadwalId: preselectedJadwalId || 0
    });

    const [errors, setErrors] = useState<FormError>({});

    // Update jadwalId when preselectedJadwalId changes
    useEffect(() => {
        if (preselectedJadwalId) {
            setFormData(prev => ({ ...prev, jadwalId: preselectedJadwalId }));
        }
    }, [preselectedJadwalId]);

    // Available jadwal for dropdown (only show jadwal with remaining kuota)
    const availableJadwal = jadwalDokter.filter(jadwal => jadwal.kuotaTersisa > 0);

    const validateForm = (): boolean => {
        const newErrors: FormError = {};

        // Validate name
        if (!formData.namaPasien.trim()) {
            newErrors.namaPasien = 'Nama pasien tidak boleh kosong';
        }

        // Validate phone
        if (!formData.telepon.trim()) {
            newErrors.telepon = 'Nomor telepon tidak boleh kosong';
        } else if (!/^08\d{8,11}$/.test(formData.telepon)) {
            newErrors.telepon = 'Format nomor telepon tidak valid (harus diawali 08 dan 10-13 digit)';
        }

        // Validate jadwalId
        if (!formData.jadwalId) {
            newErrors.jadwalId = 'Pilih jadwal dokter terlebih dahulu';
        }

        // Check if selected jadwal has available slots
        if (formData.jadwalId) {
            const selectedJadwal = jadwalDokter.find(jadwal => jadwal.id === formData.jadwalId);
            if (selectedJadwal && selectedJadwal.kuotaTersisa <= 0) {
                newErrors.jadwalId = 'Jadwal ini sudah penuh, silakan pilih jadwal lain';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // For jadwalId, convert string value to number
        const newValue = name === 'jadwalId' ? parseInt(value, 10) : value;

        setFormData(prev => ({ ...prev, [name]: newValue }));

        // Clear error for this field
        if (errors[name as keyof FormError]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            await daftarPasien(formData);

            // Reset form after successful submission
            setFormData({
                namaPasien: '',
                telepon: '',
                jadwalId: 0
            });

            if (onSuccess) {
                onSuccess();
            }

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Formulir Pendaftaran Pasien</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="namaPasien" className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Lengkap
                    </label>
                    <input
                        type="text"
                        id="namaPasien"
                        name="namaPasien"
                        value={formData.namaPasien}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.namaPasien ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Masukkan nama lengkap pasien"
                    />
                    {errors.namaPasien && (
                        <p className="mt-1 text-sm text-red-600">{errors.namaPasien}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="telepon" className="block text-sm font-medium text-gray-700 mb-1">
                        Nomor Telepon
                    </label>
                    <input
                        type="tel"
                        id="telepon"
                        name="telepon"
                        value={formData.telepon}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.telepon ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Contoh: 08123456789"
                    />
                    {errors.telepon && (
                        <p className="mt-1 text-sm text-red-600">{errors.telepon}</p>
                    )}
                </div>

                <div className="mb-6">
                    <label htmlFor="jadwalId" className="block text-sm font-medium text-gray-700 mb-1">
                        Pilih Jadwal Dokter
                    </label>
                    <select
                        id="jadwalId"
                        name="jadwalId"
                        value={formData.jadwalId}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.jadwalId ? 'border-red-500' : 'border-gray-300'}`}
                    >
                        <option value="0">-- Pilih Jadwal Dokter --</option>
                        {availableJadwal.map(jadwal => (
                            <option key={jadwal.id} value={jadwal.id}>
                                {jadwal.nama} - {jadwal.spesialisasi} ({jadwal.hari}, {formatDateIndonesian(jadwal.tanggal)}, {jadwal.jamMulai}-{jadwal.jamSelesai})
                            </option>
                        ))}
                    </select>
                    {errors.jadwalId && (
                        <p className="mt-1 text-sm text-red-600">{errors.jadwalId}</p>
                    )}
                    {availableJadwal.length === 0 && (
                        <p className="mt-1 text-sm text-amber-600">Tidak ada jadwal dokter yang tersedia saat ini.</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading || availableJadwal.length === 0}
                    className={`w-full py-2 px-4 rounded-md text-white font-medium 
            ${loading || availableJadwal.length === 0
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                    {loading ? 'Memproses...' : 'Daftar Sekarang'}
                </button>
            </form>
        </div>
    );
};

export default FormDaftar;
