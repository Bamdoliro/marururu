export interface Notice {
  id: number;
  title: string;
  updatedAt: string;
}

export interface NoticeDetail {
  title: string;
  content: string;
  fileList?: Array<{
    downloadUrl: string;
    fileName: string;
  }>;
  createdAt: string;
  updatedAt: string;
}
