import { Dispatch, SetStateAction, useRef } from 'react';
import { Subject } from '@/types/form';

export const useAddNewSubject = (setNewSubjectListData: Dispatch<SetStateAction<Subject[]>>) => {
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
