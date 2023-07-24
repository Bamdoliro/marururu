import { maru } from '@/apis/instance/instance';

// 로그인
export interface LoginType {
    email: string;
    password: string;
}

export const loginUser = async ({ email, password }: LoginType) => {
    const { data } = await maru.post('/auth', { email, password });
    return data;
};

// 회원가입
export interface JoinType {
    email: string;
    code: string;
    password: string;
    password_confirm?: string;
}

export const joinUser = async ({ email, code, password }: JoinType) => {
    const { data } = await maru.post('/user', { email, code, password });
    return data;
};

export const requestEmail = async (email: string) => {
    const { data } = await maru.post(`/user/verification?email=${email}`);
    return data;
};
