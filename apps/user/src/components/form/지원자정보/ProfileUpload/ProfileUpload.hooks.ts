import { useRef } from 'react';

export const useOpenUploadImgFile = () => {
    const imgFileInputRef = useRef<HTMLInputElement>(null);

    const handleImgUploadButtonClick = () => {
        imgFileInputRef.current?.click();
    };

    return { imgFileInputRef, handleImgUploadButtonClick };
};
