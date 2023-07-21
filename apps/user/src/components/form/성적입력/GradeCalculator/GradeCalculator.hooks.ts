import { Dispatch, SetStateAction } from 'react';
import { SubjectDataType } from './GradeCalculator';

export const useAddNewSubject = (
    newSubjectId: number,
    setNewSubjectListData: Dispatch<SetStateAction<SubjectDataType[]>>,
) => {
    const handleAddNewSubjectButtonClick = () => {
        const newSubject = {
            id: newSubjectId,
            subjectName: '',
            grade2_1: 'A',
            grade2_2: 'A',
            grade3_1: 'A',
        };
        newSubjectId++;
        setNewSubjectListData((prev) => [...prev, newSubject]);
    };

    return { handleAddNewSubjectButtonClick };
};
