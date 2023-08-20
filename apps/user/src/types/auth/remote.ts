export interface PostLoginAuthReq {
    email: string;
    password: string;
}

export interface PostJoinAuthReq {
    email: string;
    code: string;
    name: string;
    password: string;
    password_confirm?: string;
}
