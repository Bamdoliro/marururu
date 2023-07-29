import { useDebounceInput } from '@maru/hooks';

export const useInput = () => {
    const {
        value: introduce,
        onChange: handleIntroduceDataChange,
        debouncedValue: debouncedIntroduce,
    } = useDebounceInput({ initialValue: '' });
    const {
        value: studyPlan,
        onChange: handleStudyPlanDataChange,
        debouncedValue: debouncedStudyPlan,
    } = useDebounceInput({ initialValue: '' });

    return { introduce, handleIntroduceDataChange, studyPlan, handleStudyPlanDataChange };
};
