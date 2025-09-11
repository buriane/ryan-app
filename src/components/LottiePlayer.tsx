"use client";

import { useEffect, useRef } from 'react';

interface LottiePlayerProps {
    src: string;
    className?: string;
    style?: React.CSSProperties;
    loop?: boolean;
    autoplay?: boolean;
    speed?: string | number;
    background?: string;
}

const LottiePlayer = ({
    src,
    className,
    style,
    loop = true,
    autoplay = true,
    speed = "1",
    background = "transparent"
}: LottiePlayerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Only run on client-side
        if (typeof document === 'undefined' || !containerRef.current) return;

        // Save the ref value to a variable for cleanup
        const container = containerRef.current;

        // Create the player element without TypeScript type checking
        const player = document.createElement('lottie-player') as unknown as HTMLElement;

        // Set attributes
        player.setAttribute('src', src);
        if (loop) player.setAttribute('loop', '');
        if (autoplay) player.setAttribute('autoplay', '');
        player.setAttribute('speed', speed.toString());
        player.setAttribute('background', background);

        // Set inline styles
        player.style.width = '100%';
        player.style.height = '100%';
        player.style.minHeight = '250px';
        player.style.display = 'block';
        
        // Apply any custom styles passed as props
        if (style) {
            Object.entries(style).forEach(([key, value]) => {
                if (value) {
                    // Use the CSSStyleDeclaration properly
                    player.style.setProperty(
                        key.replace(/([A-Z])/g, '-$1').toLowerCase(),
                        value.toString()
                    );
                }
            });
        }

        // Clear container and append player
        container.innerHTML = '';
        container.appendChild(player);

        // Cleanup function
        return () => {
            if (player.parentNode === container) {
                container.removeChild(player);
            }
        };
    }, [src, loop, autoplay, speed, background, style]);

    return <div ref={containerRef} className={className} style={style} />;
};

export default LottiePlayer;
