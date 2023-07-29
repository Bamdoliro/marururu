import { useUploadProfileImageMutation } from '@/services/form/지원자정보/mutations';
import { ChangeEventHandler, DragEvent, useRef, useState } from 'react';

export const useUploadProfileImageFile = () => {
    const [profileImage, setProfileImage] = useState('');

    // image file open
    const imageFileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUploadButtonClick = () => {
        imageFileInputRef.current?.click();
    };

    // api 통신
    const uploadProfileImageMutation = useUploadProfileImageMutation(setProfileImage);

    const uploadProfileImageFile = (image: FormData) => {
        uploadProfileImageMutation.mutate(image);
    };

    // data hanlding
    const handleImageFileDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { files } = e.target;
        if (!files || files.length === 0) return;
        const formData = new FormData();
        formData.append('image', files[0]);
        uploadProfileImageFile(formData);
    };

    return {
        profileImage,
        uploadProfileImageFile,
        imageFileInputRef,
        handleImageUploadButtonClick,
        handleImageFileDataChange,
    };
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
