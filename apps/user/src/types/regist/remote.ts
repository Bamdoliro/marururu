export interface RegistFormPresignedUrlData {
  uploadUrl: string;
  downloadUrl: string;
  fields: {
    [key: string]: string | Blob;
  };
}
