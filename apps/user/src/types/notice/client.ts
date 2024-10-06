export interface Notice {
  id: number;
  title: string;
  createdAt: string;
}

export interface NoticeDetail {
  title: string;
  content: string;
  fileList?: Array<{
    downloadUrl: string;
    fileName: string;
  }>;
  createdAt: string;
}
