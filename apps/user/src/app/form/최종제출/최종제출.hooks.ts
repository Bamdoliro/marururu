import {
    useSubmitFinalFormMutation,
    useUploadFormDocumentMutation,
} from '@/services/form/mutations';
import { useExportFormQuery } from '@/services/form/queries';
import { useFormDocumentValueStore, useSetFormDocumentStore } from '@/store';
import { ChangeEventHandler, useRef } from 'react';

export const useUploadFileButton = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUploadFileButtonClick = () => {
        fileInputRef.current?.click();
    };

    return { fileInputRef, handleUploadFileButtonClick };
};

export const useSubmitFinalFormAction = () => {
    const formDocument = useFormDocumentValueStore();
    const { submitFinalFormMutate } = useSubmitFinalFormMutation(formDocument.formUrl);

    const handleSubmitFinalFormButtonClick = () => {
        submitFinalFormMutate();
    };

    return { handleSubmitFinalFormButtonClick };
};

export const useExportFormAction = () => {
    const { data: exportFormData } = useExportFormQuery();

    const pdfUrl = window.URL.createObjectURL(new Blob([exportFormData]));

    const handleExportFormButtonClick = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', '원서초안.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(pdfUrl);
    };

    return { handleExportFormButtonClick };
};

export const useInput = () => {
    const setFormDocument = useSetFormDocumentStore();
    const { uploadFormDocumentMutate } = useUploadFormDocumentMutation(setFormDocument);

    const handleFileDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { files } = e.target;
        if (!files || files.length === 0) return;
        const formData = new FormData();
        formData.append('file', files[0]);

        setFormDocument((prev) => ({ ...prev, fileName: files[0].name }));
        uploadFormDocumentMutate(formData);
    };

    return { handleFileDataChange };
};
