import {
    useSubmitFinalFormMutation,
    useUploadFormDocumentMutation,
} from '@/services/form/mutations';
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

export const useSubmitFinalFormAction = () => {
    const { formDocument } = useFormDocumentState();
    const { submitFinalFormMutate } = useSubmitFinalFormMutation(formDocument.url);

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
    };

    return { handleExportFormButtonClick };
};

export const useInput = () => {
    const { setFormDocument } = useFormDocumentState();
    const { uploadFormDocumentMutate } = useUploadFormDocumentMutation(setFormDocument);

    const handleFileDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { files } = e.target;
        if (files && files[0]) {
            setFormDocument((prev) => ({ ...prev, file: files[0] }));
            uploadFormDocumentMutate(files[0]);
        }
    };

    return { handleFileDataChange };
};
