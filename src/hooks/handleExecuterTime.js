import { useEffect, useRef } from "react";

const useExecuterTime = (handle, interval, enabled = true) => {
    const intervalRef = useRef(null);

    useEffect(() => {
        if (!enabled) return;

        intervalRef.current = setInterval(() => {
            handle();
        }, interval);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [handle, interval, enabled]);
};

export default useExecuterTime;