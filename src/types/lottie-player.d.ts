declare namespace JSX {
    interface IntrinsicElements {
        'lottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
            src: string;
            background?: string;
            speed?: string;
            loop?: boolean;
            autoplay?: boolean;
            controls?: boolean;
            mode?: string;
            style?: React.CSSProperties;
        }, HTMLElement>;
    }
}
