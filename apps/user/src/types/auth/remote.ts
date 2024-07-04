import type { CheckLoginType } from './client';
export interface PostLoginAuthReq {
  phoneNumber: string;
  password: string;
}

export interface PostJoinAuthReq {
  phoneNumber: string;
  name: string;
  password: string;
}

export interface PatchUpdateAuthReq {
  phoneNumber: string;
  password: string;
}

export interface PatchVerificationReq {
  phoneNumber: string;
  code: string;
  type: string;
}

export interface GetCheckLoginRes {
  data: CheckLoginType;
}
