import { Form } from '@/types/form';
import { useMutation } from 'react-query';
import { submitDraftForm } from './api';

export const useSubmitDraftFormMutation = (formData: Form) => {
    const { mutate: submitDraftFormMutate, ...restMutation } = useMutation({
        mutationFn: () => submitDraftForm(formData),
        onSuccess: (res) => {
            console.log(res);
            alert('성공!');
        },
        onError: (err) => {
            console.log(err);
            alert('실패!');
        },
    });

    return { submitDraftFormMutate, restMutation };
};
