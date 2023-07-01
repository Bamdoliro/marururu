import { delay } from 'lodash';
import { useRef, useEffect } from 'react';

const useTimer = (callback: () => void, dealy = 0) => {
    const savedCallback = useRef<() => void>();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        const handleTimeout = () => {
            if (savedCallback.current) {
                savedCallback.current();
            }
        };

        const id = window.setTimeout(handleTimeout, dealy);

        return () => {
            window.clearTimeout(id);
        };
    }, [delay]);
};

export default useTimer;
