import { useUploadProfileImageMutation } from '@/services/form/지원자정보/mutations';
import { ChangeEventHandler, Dispatch, DragEvent, SetStateAction, useRef, useState } from 'react';

export const useProfileImageState = () => {
    const [profileImage, setProfileImage] = useState('');

    return { profileImage, setProfileImage };
};

export const useUploadProfileImageFile = () => {
    const { setProfileImage } = useProfileImageState();
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

export const useImageFileDragAndDrop = () => {
    const { uploadProfileImageFile } = useUploadProfileImageFile();
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

export const useInput = () => {
    const { uploadProfileImageFile } = useUploadProfileImageFile();

    const handleImageFileDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { files } = e.target;
        if (!files || files.length === 0) return;
        const formData = new FormData();
        formData.append('image', files[0]);
        uploadProfileImageFile(formData);
    };

    return { handleImageFileDataChange };
};
