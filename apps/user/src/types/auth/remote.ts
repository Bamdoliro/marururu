export interface PostLoginAuthReq {
    phoneNumber: string;
    password: string;
}

export interface PostJoinAuthReq {
    phoneNumber: string;
    code: string;
    name: string;
    password: string;
    password_confirm?: string;
}
