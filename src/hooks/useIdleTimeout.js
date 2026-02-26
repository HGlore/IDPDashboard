import {useEffect, useRef} from "react";

const useIdleTimeout = (onIdle, timeout, enabled = true) => {
    const timer = useRef(null);

    const resetTimer = () => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(onIdle, timeout);
    };

    useEffect(() => {
        if (!enabled) return;

        const events = ["mousemove", "keydown", "click", "scroll"];

        const handleActivity = () => resetTimer();

        events.forEach(event => window.addEventListener(event, handleActivity));

        resetTimer();

        return () => {
            if (timer.current) clearTimeout(timer.current);
            events.forEach(event => window.removeEventListener(event, handleActivity));
        };
    }, [enabled]);
};

export default useIdleTimeout;