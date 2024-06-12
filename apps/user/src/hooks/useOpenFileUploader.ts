import { useRef } from 'react';

const useOpenFileUploader = () => {
  const ref = useRef<HTMLInputElement>(null);

  const openFileUploader = () => {
    ref.current?.click();
  };

  return { openFileUploader, ref };
};

export default useOpenFileUploader;
