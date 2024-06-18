import type { CheckLoginType } from './client';

export interface PostLoginAuthReq {
  phoneNumber: string;
  password: string;
}

export interface GetCheckLoginRes {
  data: CheckLoginType;
}
