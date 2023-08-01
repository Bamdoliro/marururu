import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { Form } from '@/types/form';

export const submitDraftForm = async (formData: Form) => {
    const { data } = await maru.post('/form', formData, authorization());

    return { data };
};
