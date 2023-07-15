import { useUploadProfileImageMutation } from '@/services/form/지원자정보/mutations';
import { ChangeEvent, DragEvent, useRef, useState, useEffect } from 'react';

export const useOpenUploadImageFile = () => {
    const imageFileInputRef = useRef<HTMLInputElement>(null);
    const handleImageUploadButtonClick = () => {
        imageFileInputRef.current?.click();
    };
    return { imageFileInputRef, handleImageUploadButtonClick };
};

/**
 * @TODO header에 contentType forData 넣어야함
 * @EXAMPLE https://github.com/soolung/simblue-client/blob/develop/src/utils/api/banner.js#L26-L35
 */
export const useUploadImageFile = () => {
    const uploadProfileImage = (file: File) => {
        const formData = new FormData();
        formData.append('image', file);
        const uploadProfileImageMutate = useUploadProfileImageMutation(formData);
        uploadProfileImageMutate.mutate();
    };

    return { uploadProfileImage };
};

export const useImageFileChange = () => {
    const handleImageFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { uploadProfileImage } = useUploadImageFile();
        const { files } = e.target;
        if (!files || files.length === 0) return;
        uploadProfileImage(files[0]);
    };

    return { handleImageFileChange };
};

export const useImageFileDragAndDrop = () => {
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
        const { uploadProfileImage } = useUploadImageFile();
        uploadProfileImage(e.dataTransfer.files[0]);
        setIsDragging(false);
    };

    return { isDragging, onDragEnter, onDragLeave, onDragOver, onDrop };
};
