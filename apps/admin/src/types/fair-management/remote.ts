import type { Fair } from './client';

export interface GetFairListRes {
  dataList: Fair[];
}

export interface PostFairReq {
  start: string;
  capacity: number;
  place: string;
  applicationUrl: string;
  type: string;
  applicationStartDate: string;
  applicationEndDate: string;
}
