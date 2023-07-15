import { color, font } from '@maru/theme';
import { Button, Column } from '@maru/ui';
import {
    useImageFileChange,
    useImageFileDragAndDrop,
    useOpenUploadImageFile,
    useUploadProfileImageFile,
} from './ProfileUpload.hooks';
import styled from 'styled-components';
import { useState } from 'react';

const ProfileUpload = () => {
    const [profileImage, setProfileImage] = useState('');

    const { uploadProfileImageFile } = useUploadProfileImageFile(setProfileImage);
    const { imageFileInputRef, handleImageUploadButtonClick } = useOpenUploadImageFile();
    const { isDragging, onDragEnter, onDragLeave, onDragOver, onDrop } =
        useImageFileDragAndDrop(uploadProfileImageFile);
    const { handleImageFileChange } = useImageFileChange(uploadProfileImageFile);

    return (
        <StyledProfileUpload>
            <Title>증명사진</Title>
            {profileImage ? (
                <ImagePreview src={profileImage} alt="profile-image" />
            ) : (
                <ImageUploadBox
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    isDragging={isDragging}>
                    <Column gap={12} alignItems="center">
                        <Button size="SMALL" onClick={handleImageUploadButtonClick}>
                            파일 선택
                        </Button>
                        <ImageUploadText>또는</ImageUploadText>
                        <ImageUploadText>여기로 사진을 끌어오세요</ImageUploadText>
                    </Column>
                </ImageUploadBox>
            )}
            {profileImage.length !== 0 && (
                <Button size="SMALL" onClick={handleImageUploadButtonClick}>
                    재 업로드
                </Button>
            )}
            <Desc>3x4 cm 증명사진</Desc>
            <input
                type="file"
                ref={imageFileInputRef}
                accept=".png, .jpg, .jpeg"
                onChange={handleImageFileChange}
                hidden
            />
        </StyledProfileUpload>
    );
};

export default ProfileUpload;

const StyledProfileUpload = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const ImageUploadBox = styled.div<{ isDragging: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 225px;
    height: 300px;
    border-radius: 6px;
    border: 1px dashed ${(props) => (props.isDragging ? color.maruDefault : color.gray400)};
    background-color: ${color.gray50};
`;

const ImageUploadText = styled.p`
    ${font.p2}
    color: ${color.gray500};
`;

const ImagePreview = styled.img`
    width: 225px;
    height: 300px;
    border-radius: 6px;
`;

const Title = styled.p`
    ${font.context}
    color: ${color.gray700};
`;

const Desc = styled.p`
    ${font.p2}
    color: ${color.gray500};
`;
