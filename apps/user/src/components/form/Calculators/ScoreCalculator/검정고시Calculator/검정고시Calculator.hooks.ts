import { useNew검정고시SubjectListStore } from '@/store';
import { Subject } from '@/types/form/client';
import { useRef } from 'react';

export const useAddNew검정고시Subject = () => {
    const [new검정고시SubjectList, setNew검정고시SubjectList] = useNew검정고시SubjectListStore();

    const new검정고시SubjectIdRef = useRef(new검정고시SubjectList.length);
    const handleAddNew검정고시SubjectButtonClick = () => {
        if (new검정고시SubjectList.length >= 1) {
            alert('선택과목은 하나만 추가할 수 있습니다.');
            return;
        }
        const newSubject: Subject = {
            id: new검정고시SubjectIdRef.current++,
            subjectName: '',
            achievementLevel21: null,
            achievementLevel22: null,
            achievementLevel31: null,
            score: 0,
        };
        setNew검정고시SubjectList((prev) => [...prev, newSubject]);
    };

    return { handleAddNew검정고시SubjectButtonClick };
};
