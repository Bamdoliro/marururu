import { maru } from '@/apis/instance/instance';

// 로그인
export interface Login {
    email: string;
    password: string;
}

export const loginUser = async ({ email, password }: Login) => {
    const { data } = await maru.post('/auth', { email, password });
    return data;
};

// 회원가입
export interface Join {
    email: string;
    code: string;
    password: string;
    password_confirm?: string;
}

export const joinUser = async ({ email, code, password }: Join) => {
    const { data } = await maru.post('/user', { email, code, password });
    return data;
};

export const requestEmail = async (email: string) => {
    const { data } = await maru.post(`/user/verification?email=${email}`);
    return data;
};
