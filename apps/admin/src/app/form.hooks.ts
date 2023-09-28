import { useEditSecondRoundResultMutation } from '@/services/form/mutations';
import { useSecondRoundResultValueStore } from '@/store/form/secondRoundResult';

export const useSecondRoundResultEditAction = () => {
    const secondRoundResult = useSecondRoundResultValueStore();
    const secondRoundResultData = {
        formList: Object.entries(secondRoundResult).map(([formId, passStatus]) => {
            return {
                formId: Number(formId),
                pass: passStatus === '미정' ? null : passStatus === '합격',
            };
        }),
    };
    const { editSecondRoundResult } = useEditSecondRoundResultMutation(secondRoundResultData);

    const handleSecondRoundResultEditCompleteButtonClick = () => {
        editSecondRoundResult();
    };

    return { handleSecondRoundResultEditCompleteButtonClick };
};
