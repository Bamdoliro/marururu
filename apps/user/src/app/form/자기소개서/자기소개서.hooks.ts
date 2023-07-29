import { useInput } from '@maru/hooks';

export const use자기소개서State = () => {
    const {
        value: introduce,
        onChange: handleIntroduceDataChange,
        debouncedValue: debouncedIntroduce,
    } = useInput({
        initialValue: '',
        useDebounce: true,
    });
    const {
        value: studyPlan,
        onChange: handleStudyPlanDataChange,
        debouncedValue: debouncedStudyPlan,
    } = useInput({
        initialValue: '',
        useDebounce: true,
    });

    return { introduce, handleIntroduceDataChange, studyPlan, handleStudyPlanDataChange };
};
