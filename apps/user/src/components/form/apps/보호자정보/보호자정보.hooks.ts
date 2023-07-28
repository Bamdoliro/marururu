import { ChangeEventHandler, useEffect, useState } from 'react';

export interface ParentInfo {
    name: string;
    phoneNumber: string;
    zoneCode: string;
    address: string;
    detailAddress: string;
}

const useInput = () => {
    const [parentInfo, setParentInfo] = useState<ParentInfo>({
        name: '',
        phoneNumber: '',
        zoneCode: '',
        address: '',
        detailAddress: '',
    });

    const handleParentInfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setParentInfo({ ...parentInfo, [name]: value });
    };

    useEffect(() => console.log(parentInfo), [parentInfo]);

    return { parentInfo, setParentInfo, handleParentInfoDataChange };
};

export default useInput;
