export const handleFileDownload = async (fileUrl: string) => {
  const response = await fetch(fileUrl);
  const blob = await response.blob();

  const url = window.URL.createObjectURL(blob);
  const fileName = fileUrl.split('/').pop()?.split('?')[0] || 'download';

  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;

  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
};

export const handleViewNow = async (fileUrl: string) => {
  const response = await fetch(fileUrl);
  const blob = await response.blob();
  const blobUrl = window.URL.createObjectURL(blob);

  window.open(blobUrl);
  window.URL.revokeObjectURL(blobUrl);
};
