import { ChangeEventHandler, useRef } from 'react';
import { useFormDocumentState } from './최종제출.state';

export const useFileUploadButton = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUploadButtonClick = () => {
        fileInputRef.current?.click();
    };

    return { fileInputRef, handleFileUploadButtonClick };
};

export const useInput = () => {
    const { setFormDocument } = useFormDocumentState();

    const handleFileDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { files } = e.target;
        if (files && files[0]) {
            setFormDocument((prev) => ({ ...prev, file: files[0] }));
            console.log(files[0]);
        }
    };

    return { handleFileDataChange };
};
