import { useUploadFormDocumentMutation } from '@/services/form/mutations';
import { ChangeEventHandler, useRef } from 'react';
import { useFormDocumentState } from './최종제출.state';
import { useExportFormQuery } from '@/services/form/queries';

export const useFileUploadButton = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUploadButtonClick = () => {
        fileInputRef.current?.click();
    };

    return { fileInputRef, handleFileUploadButtonClick };
};

export const useUploadFormDocumentAction = () => {
    const { formDocument } = useFormDocumentState();
    const { uploadFormDocumentMutate } = useUploadFormDocumentMutation(formDocument.file);

    const handleUploadFormDocumentButtonClick = () => {
        uploadFormDocumentMutate();
    };

    return { handleUploadFormDocumentButtonClick };
};

export const useExportFormAction = () => {
    const { data: exportFormData, refetch: exportFormDataRefetch } = useExportFormQuery();

    const handleExportFormButtonClick = () => {
        exportFormDataRefetch();
    };

    return { handleExportFormButtonClick };
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
