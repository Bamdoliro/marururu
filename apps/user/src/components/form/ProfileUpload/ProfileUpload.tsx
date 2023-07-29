import { color, font } from '@maru/theme';
import { Button, Column } from '@maru/ui';
import { useImageFileDragAndDrop, useUploadProfileImageFile } from './ProfileUpload.hooks';
import styled from 'styled-components';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { UserInfo } from '../../../app/form/지원자정보/지원자정보.hooks';

interface PropsType {
    setUserInfo: Dispatch<SetStateAction<UserInfo>>;
}

const ProfileUpload = ({ setUserInfo }: PropsType) => {
    const {
        profileImage,
        uploadProfileImageFile,
        imageFileInputRef,
        handleImageUploadButtonClick,
        handleImageFileDataChange,
    } = useUploadProfileImageFile();
    const { isDragging, onDragEnter, onDragLeave, onDragOver, onDrop } =
        useImageFileDragAndDrop(uploadProfileImageFile);

    useEffect(() => {
        setUserInfo((prev) => ({ ...prev, identificationPictureUri: profileImage }));
    }, [profileImage]);

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
            {profileImage && (
                <Button size="SMALL" onClick={handleImageUploadButtonClick}>
                    재업로드
                </Button>
            )}
            <Desc>20MB 이하, 3x4 cm 증명사진</Desc>
            <input
                type="file"
                ref={imageFileInputRef}
                accept=".png, .jpg, .jpeg"
                onChange={handleImageFileDataChange}
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
