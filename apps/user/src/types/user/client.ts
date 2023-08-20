export interface User {
    email: string;
    name: string;
    authority: 'USER' | 'ADMIN';
}
