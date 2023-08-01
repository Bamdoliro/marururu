import { maru } from '@/apis/instance/instance';

const submitDraftForm = async () => {
    const { data } = await maru.post('/form');
    return { data };
};
