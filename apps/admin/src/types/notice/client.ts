export interface Notice {
  id: number;
  title: string;
  createdAt: string;
}

export interface NoticeDetail {
  title: string;
  content: string;
  fileUrl?: string;
  fileName?: string;
  createdAt: string;
}
