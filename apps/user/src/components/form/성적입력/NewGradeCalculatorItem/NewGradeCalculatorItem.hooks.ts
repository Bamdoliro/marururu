import { Dispatch, SetStateAction } from 'react';
import { Subject } from '@/types/form';

export const useNewSubjectItemHandler = (
    setNewSubjectListData: Dispatch<SetStateAction<Subject[]>>,
    newSubjectIndex: number,
) => {
    const handleDeleteNewSubjectItemButtonClick = (id: number) => {
        setNewSubjectListData((prev) => prev.filter((item) => item.id !== id));
    };

    const handleNewCaculatorItemDataChange = (data: string, name: string) => {
        setNewSubjectListData((prev) => {
            const updatedData = [...prev];
            updatedData[newSubjectIndex] = {
                ...updatedData[newSubjectIndex],
                [name]: data,
            };
            return updatedData;
        });
    };

    return { handleDeleteNewSubjectItemButtonClick, handleNewCaculatorItemDataChange };
};
