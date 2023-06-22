import { Dispatch, SetStateAction, useEffect } from 'react';

const useTimer = (time: number, setTime: Dispatch<SetStateAction<number>>) => {
    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);

        if (time === 0) {
            setTime(0);
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [time, setTime]);
};

export default useTimer;
