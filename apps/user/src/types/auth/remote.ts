export interface PostLoginAuthReq {
    phoneNumber: string;
    password: string;
}

export interface PostJoinAuthReq {
    phoneNumber: string;
    name: string;
    password: string;
}

export interface PatchVerificationReq {
    code: string;
    phoneNumber: string;
}
