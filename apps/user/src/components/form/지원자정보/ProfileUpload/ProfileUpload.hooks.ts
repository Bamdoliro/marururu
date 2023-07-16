import { useUploadProfileImageMutation } from '@/services/form/지원자정보/mutations';
import { ChangeEvent, Dispatch, DragEvent, SetStateAction, useRef, useState } from 'react';

export const useUploadProfileImageFile = (setProfileImage: Dispatch<SetStateAction<string>>) => {
    const uploadProfileImageMutation = useUploadProfileImageMutation(setProfileImage);

    const uploadProfileImageFile = (image: FormData) => {
        uploadProfileImageMutation.mutate(image);
    };

    return { uploadProfileImageFile };
};

export const useOpenUploadImageFile = () => {
    const imageFileInputRef = useRef<HTMLInputElement>(null);
    const handleImageUploadButtonClick = () => {
        imageFileInputRef.current?.click();
    };
    return { imageFileInputRef, handleImageUploadButtonClick };
};

export const useImageFileChange = (uploadProfileImageFile: (image: FormData) => void) => {
    const handleImageFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (!files || files.length === 0) return;
        const formData = new FormData();
        formData.append('image', files[0]);
        uploadProfileImageFile(formData);
    };

    return { handleImageFileChange };
};

export const useImageFileDragAndDrop = (uploadProfileImageFile: (image: FormData) => void) => {
    const [isDragging, setIsDragging] = useState(false);

    const onDragEnter = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };
    const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };
    const onDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files) {
            setIsDragging(true);
        }
    };
    const onDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const formData = new FormData();
        formData.append('image', e.dataTransfer.files[0]);
        uploadProfileImageFile(formData);
        setIsDragging(false);
    };

    return { isDragging, onDragEnter, onDragLeave, onDragOver, onDrop };
};
