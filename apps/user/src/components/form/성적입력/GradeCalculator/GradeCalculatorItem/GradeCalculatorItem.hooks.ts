import { Dispatch, SetStateAction } from 'react';
import { SubjectDataType } from '../GradeCalculator';

export const useCaculatorItemHandler = (
    id: number,
    setSubjectListData: Dispatch<SetStateAction<SubjectDataType[]>>,
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
