import { ChangeEventHandler, useState } from 'react';

interface Voluteer {
    volunteerTime1: number;
    volunteerTime2: number;
    volunteerTime3: number;
}

const useInput = () => {
    const [volunteerInfo, setVolunteerInfo] = useState<Voluteer>({
        volunteerTime1: 0,
        volunteerTime2: 0,
        volunteerTime3: 0,
    });

    const handleVolunteerInfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setVolunteerInfo({ ...volunteerInfo, [name]: +value });
    };

    return { handleVolunteerInfoDataChange };
};

export default useInput;
