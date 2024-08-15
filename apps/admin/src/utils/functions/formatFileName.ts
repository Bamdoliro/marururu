const formatFileName = (fileName: string): string => {
  return fileName.length > 36 ? fileName.slice(37) : fileName;
};

export default formatFileName;
