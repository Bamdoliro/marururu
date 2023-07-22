import { Dispatch, SetStateAction } from 'react';
import { SubjectDataType } from '../GradeCalculator';

export const useNewSubjectItemHandler = (
    setNewSubjectListData: Dispatch<SetStateAction<SubjectDataType[]>>,
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
