import { Dispatch, SetStateAction, useRef } from 'react';
import { SubjectDataType } from './GradeCalculator';

export const useAddNewSubject = (
    setNewSubjectListData: Dispatch<SetStateAction<SubjectDataType[]>>,
) => {
    const newSubjectIdRef = useRef(0);

    const handleAddNewSubjectButtonClick = () => {
        const newSubject = {
            id: newSubjectIdRef.current++,
            subjectName: '',
            grade2_1: 'A',
            grade2_2: 'A',
            grade3_1: 'A',
        };
        setNewSubjectListData((prev) => [...prev, newSubject]);
    };

    return { handleAddNewSubjectButtonClick };
};
