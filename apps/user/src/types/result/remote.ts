import type { Result } from './client';

export interface GetResultRes {
  data: Result;
}

export interface GetTicketURLRes {
  dataList: {
    examinationNumber: number;
    name: string;
    ticketUrl: string;
  }[];
}
