// Animation variants for framer motion
export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6 }
    }
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export const slideFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
};

export const slideFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
};

export const cardHover = {
    rest: { scale: 1 },
    hover: {
        scale: 1.03,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    }
};

export const buttonTap = {
    tap: { scale: 0.97 }
};

export const staggerItems = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: delay,
            duration: 0.5
        }
    }
});
