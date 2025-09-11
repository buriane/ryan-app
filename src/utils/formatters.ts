// Format date to Indonesian format (DD-MM-YYYY)
export const formatDateIndonesian = (dateString: string) => {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).replace(/\//g, '-');
    } catch (error) {
        console.error('Error formatting date:', error);
        return dateString;
    }
};

// Format time (HH:MM)
export const formatTime = (timeString: string) => {
    try {
        // If timeString is already in HH:MM format, return as is
        if (/^\d{1,2}:\d{2}$/.test(timeString)) {
            return timeString;
        }

        const time = new Date(`1970-01-01T${timeString}`);
        return time.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    } catch (error) {
        console.error('Error formatting time:', error);
        return timeString;
    }
};

// Format phone number to Indonesia format
export const formatPhoneNumber = (phoneNumber: string) => {
    if (!phoneNumber) return '';

    // Remove all non-digit characters
    const cleaned = phoneNumber.replace(/\D/g, '');

    // Check if it starts with 0
    if (cleaned.startsWith('0')) {
        return cleaned;
    }
    // If it starts with 62, replace with 0
    else if (cleaned.startsWith('62')) {
        return '0' + cleaned.substring(2);
    }

    // If it doesn't start with 0 or 62, add 0 at the beginning
    return '0' + cleaned;
};
