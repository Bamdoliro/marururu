export interface GetUserInfoRes {
    data: {
        email: string;
        name: string;
        authority: 'USER' | 'ADMIN';
    };
}
