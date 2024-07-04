import { useUser } from '@/hooks';
import {
  useSubmitFinalFormMutation,
  useUploadFormDocumentMutation,
} from '@/services/form/mutations';
import { useExportFormQuery } from '@/services/form/queries';
import { useFormDocumentValueStore, useSetFormDocumentStore } from '@/store';
import type { ChangeEventHandler } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

export const useSubmitFinalFormAction = () => {
  const formDocument = useFormDocumentValueStore();
  const { submitFinalFormMutate } = useSubmitFinalFormMutation(formDocument.formUrl);

  const handleSubmitFinalForm = () => {
    submitFinalFormMutate();
  };

  return { handleSubmitFinalForm };
};

export const useExportFormAction = (
  openPdfGeneratedLoader: () => void,
  closePdfGeneratedLoader: () => void
) => {
  const { userData } = useUser();
  const { data: exportFormData } = useExportFormQuery();
  const pdfBlobUrl = window.URL.createObjectURL(new Blob([exportFormData]));

  const downloadPdf = useCallback(() => {
    const link = document.createElement('a');
    link.href = pdfBlobUrl;
    link.setAttribute(
      'download',
      `${userData.name} 부산소프트웨어마이스터고등학교 원서접수.pdf`
    );
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(pdfBlobUrl);
  }, [pdfBlobUrl, userData.name]);

  useEffect(() => {
    if (exportFormData) {
      closePdfGeneratedLoader();
    } else {
      openPdfGeneratedLoader();
    }
  }, [closePdfGeneratedLoader, downloadPdf, exportFormData, openPdfGeneratedLoader]);

  const handleExportForm = useCallback(() => {
    if (exportFormData) {
      downloadPdf();
      closePdfGeneratedLoader();
    }
  }, [downloadPdf, closePdfGeneratedLoader, exportFormData]);

  return { handleExportForm };
};

export const useInput = () => {
  const setFormDocument = useSetFormDocumentStore();
  const { uploadFormDocumentMutate } = useUploadFormDocumentMutation(setFormDocument);

  const handleFormDocumentChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.target;
    if (!files || files.length === 0) return;
    const formData = new FormData();
    formData.append('file', files[0]);

    setFormDocument((prev) => ({ ...prev, fileName: files[0].name }));
    uploadFormDocumentMutate(formData);
  };

  return { handleFormDocumentChange };
};
