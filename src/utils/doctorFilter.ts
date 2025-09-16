import { JadwalDokter } from "@/types";

/**
 * Filter the jadwal data to get only one schedule per doctor
 * @param jadwalList List of all doctor schedules
 * @returns Filtered list with only one schedule per doctor
 */
export const getOneSchedulePerDoctor = (jadwalList: JadwalDokter[]): JadwalDokter[] => {
    // Use a Map to store unique doctor names and their schedules
    const doctorMap = new Map<string, JadwalDokter>();

    // Loop through all schedules
    jadwalList.forEach(jadwal => {
        // Use doctor's name as the unique key
        const doctorName = jadwal.nama;

        // If we haven't seen this doctor yet, add them to the map
        if (!doctorMap.has(doctorName)) {
            doctorMap.set(doctorName, jadwal);
        }
    });

    // Convert the Map values back to an array
    return Array.from(doctorMap.values());
};