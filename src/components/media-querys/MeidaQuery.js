import { useState, useEffect } from "react";

const getDeviceByWidth = (width) => {
    if (width < 768) {
        return 'mobile';
    } else{
        return 'desktop';
    }
};

export const useBreakpoint = () => {
    const [breackpoint, setBreakpoint] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setBreakpoint(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
    }, []);

    return getDeviceByWidth(breackpoint);
}