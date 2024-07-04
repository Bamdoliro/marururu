export interface Join {
  phoneNumber: string;
  code: string;
  name: string;
  password: string;
  password_confirm?: string;
  type: string;
}

export interface Update {
  phoneNumber: string;
  code: string;
  name: string;
  password: string;
  password_confirm?: string;
  type: string;
}

export interface CheckLoginType {
  phoneNumber: string;
  name: string;
  authority: string;
}
