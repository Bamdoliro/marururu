import { useUser } from '@/hooks';
import {
    useSubmitFinalFormMutation,
    useUploadFormDocumentMutation,
} from '@/services/form/mutations';
import { useExportFormQuery } from '@/services/form/queries';
import { useFormDocumentValueStore, useSetFormDocumentStore } from '@/store';
import { ChangeEventHandler, Dispatch, SetStateAction, useEffect, useRef } from 'react';

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

export const useExportFormAction = (
    setIsLoadingPdfGenerated: Dispatch<SetStateAction<boolean>>,
) => {
    const { userData } = useUser();
    const { data: exportFormData } = useExportFormQuery();
    const pdfUrl = window.URL.createObjectURL(new Blob([exportFormData]));

    const downloadPdf = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute(
            'download',
            `${userData.name} 부산소프트웨어마이스터고등학교 원서접수.pdf`,
        );
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(pdfUrl);
    };

    useEffect(() => {
        if (exportFormData) {
            downloadPdf();
            setIsLoadingPdfGenerated(false);
        } else {
            setIsLoadingPdfGenerated(true);
        }
    }, [exportFormData]);

    const handleExportFormButtonClick = () => {
        downloadPdf();
        setIsLoadingPdfGenerated(false);
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
