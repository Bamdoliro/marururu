import { subjectListInitialData } from '@/constants/form';
import { Subject } from '@/types/form';
import { useEffect, useRef, useState } from 'react';

export const useSubjectListState = () => {
    const [subjectList, setSubjectList] = useState<Subject[]>(subjectListInitialData);
    const [newSubjectList, setNewSubjectList] = useState<Subject[]>([]);

    return { subjectList, setSubjectList, newSubjectList, setNewSubjectList };
};

// hook으로 뺄까
export const useScrollIntoView = () => {
    const { newSubjectList } = useSubjectListState();
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (newSubjectList.length) footerRef.current?.scrollIntoView();
    }, [newSubjectList]);

    return { footerRef };
};

export const useAddNewSubjectButton = () => {
    const { setNewSubjectList } = useSubjectListState();

    const newSubjectIdRef = useRef(0);
    const handleAddNewSubjectButtonClick = () => {
        const newSubject = {
            id: newSubjectIdRef.current++,
            subjectName: '',
            grade2_1: 'A',
            grade2_2: 'A',
            grade3_1: 'A',
        };
        setNewSubjectList((prev) => [...prev, newSubject]);
    };

    return { handleAddNewSubjectButtonClick };
};
