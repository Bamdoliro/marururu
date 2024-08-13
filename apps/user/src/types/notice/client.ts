export interface Notice {
  id: number;
  title: string;
  createdAt: string;
}

export interface NoticeDetail {
  title: string;
  content: string;
  fileUrl?: string;
  createdAt: string;
}
