"use client";

import { ReactNode, useState } from "react";
import SplashScreen from "./SplashScreen";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface AppWrapperProps {
    children: ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
    // Always start with splash screen visible
    const [showSplash, setShowSplash] = useState(true);

    // We'll store the last time splash was shown
    const [_, setLastShownTimestamp] = useLocalStorage("splashShownTimestamp", 0);

    const handleLoadingComplete = () => {
        setShowSplash(false);
        setLastShownTimestamp(Date.now()); // Store the current timestamp when splash completes
    };

    // If splash screen should be shown, render it
    if (showSplash) {
        return <SplashScreen onLoadingComplete={handleLoadingComplete} />;
    }

    // Otherwise render children (the main app)
    return <>{children}</>;
}
