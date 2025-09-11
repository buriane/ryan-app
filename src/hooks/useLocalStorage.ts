"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";

export function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
    // State to store our value
    const [storedValue, setStoredValue] = useState<T>(initialValue);

    // Initialize stored value from localStorage on component mount
    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                const item = window.localStorage.getItem(key);
                setStoredValue(item ? JSON.parse(item) : initialValue);
            }
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            setStoredValue(initialValue);
        }
    }, [key, initialValue]);

    // Update localStorage when state changes
    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(storedValue));
            }
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}
