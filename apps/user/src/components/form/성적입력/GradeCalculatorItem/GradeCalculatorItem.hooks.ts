import { Dispatch, SetStateAction } from 'react';
import { Subject } from '@/types/form';

export const useCaculatorItemHandler = (
    id: number,
    setSubjectListData: Dispatch<SetStateAction<Subject[]>>,
) => {
    const handleCaculatorItemDataChange = (data: string, name: string) => {
        setSubjectListData((prev) => {
            const updatedData = [...prev];
            updatedData[id] = {
                ...updatedData[id],
                [name]: data,
            };
            return updatedData;
        });
    };

    return { handleCaculatorItemDataChange };
};
