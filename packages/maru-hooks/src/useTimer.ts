import { useState } from 'react';

const useTimer = () => {
    const [timerTime, setTimerTime] = useState(0);

    /**
     * true면 인증 요청을 보낸 상태
     * false면 인증 요청을 아직 보내지 않은 상태
     */
    const requestEmailEnabled = timerTime !== 0;

    /**
     * @param time timer의 시간을 지정해줍니다
     */
    const startTimer = (time: number) => {
        setTimerTime(time);
    };

    return { requestEmailEnabled, startTimer, timerTime, setTimerTime };
};

export default useTimer;
