# Aplikasi Jadwal Dokter Simple

Aplikasi web sederhana untuk jadwal dokter dan pendaftaran pasien menggunakan Next.js dengan Tailwind CSS, dengan localStorage untuk persistensi data.

## Fitur

- Menampilkan jadwal dokter dengan informasi lengkap
- Sistem pendaftaran pasien
- Manajemen kuota otomatis
- Nomor antrian otomatis
- Tampilan responsif

## Teknologi

- Next.js (App Router)
- Tailwind CSS
- TypeScript
- localStorage untuk penyimpanan data

## Cara Menjalankan

1. Install dependencies:

   ```
   npm install
   ```

2. Jalankan aplikasi:

   ```
   npm run dev
   ```

3. Buka browser dan akses:
   ```
   http://localhost:3000
   ```

## Struktur Aplikasi

- **Components**: Komponen UI yang dapat digunakan kembali
- **Context**: State management aplikasi dengan React Context
- **Types**: TypeScript type definitions
- **Utils**: Fungsi utility untuk localStorage dan format data
- **Hooks**: Custom hooks untuk localStorage

## Data

Data jadwal dokter disimpan secara statis di aplikasi, sementara data pendaftaran dan pembaruan kuota disimpan di localStorage.
