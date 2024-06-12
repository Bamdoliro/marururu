import type { Fair } from './client';

export interface GetFairListRes {
  dataList: Fair[];
}

export interface PostFairReq {
  applicationUrl: string;
  start: string;
  capacity: number;
  place: string;
  type: string;
  applicationStartDate: string;
  applicationEndDate: string;
}
