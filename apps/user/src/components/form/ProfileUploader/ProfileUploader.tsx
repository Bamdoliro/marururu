import { useOpenFileUploader } from '@/hooks';
import { useUploadProfileImageMutation } from '@/services/form/mutations';
import { useFormValueStore } from '@/store';
import { color, font } from '@maru/theme';
import { Button, Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { ChangeEventHandler, DragEvent, useState } from 'react';
import styled from 'styled-components';

const ProfileUploader = () => {
    const form = useFormValueStore();
    const [isDragging, setIsDragging] = useState(false);
    const { openFileUploader: openImageFileUploader, ref: imageUploaderRef } =
        useOpenFileUploader();
    // Mutation
    const { uploadProfileImageMutate } = useUploadProfileImageMutation();
    const uploadProfileImageFile = (image: FormData) => {
        uploadProfileImageMutate(image);
    };

    // 이미지 데이터 핸들링
    const handleImageFileDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { files } = e.target;
        if (!files || files.length === 0) return;
        const formData = new FormData();
        formData.append('image', files[0]);
        uploadProfileImageFile(formData);
    };

    // 드래그 앤 드랍
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

    return (
        <StyledProfileUploader>
            <Text fontType="context" color={color.gray700}>
                증명사진
            </Text>
            {form.applicant.identificationPictureUri ? (
                <ImagePreview src={form.applicant.identificationPictureUri} alt="profile-image" />
            ) : (
                <UploadImageBox
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    $isDragging={isDragging}>
                    <Column gap={12} alignItems="center">
                        <Button size="SMALL" onClick={openImageFileUploader}>
                            파일 선택
                        </Button>
                        <Text fontType="p2" color={color.gray500}>
                            또는
                        </Text>
                        <Text fontType="p2" color={color.gray500}>
                            여기로 사진을 끌어오세요
                        </Text>
                    </Column>
                </UploadImageBox>
            )}
            {form.applicant.identificationPictureUri && (
                <Button size="SMALL" onClick={openImageFileUploader}>
                    재업로드
                </Button>
            )}
            <Desc>
                10MB 이하, 3개월 이내의
                <br />
                3x4 cm 증명사진
            </Desc>
            <input
                type="file"
                ref={imageUploaderRef}
                accept=".png, .jpg, .jpeg"
                onChange={handleImageFileDataChange}
                hidden
            />
        </StyledProfileUploader>
    );
};

export default ProfileUploader;

const StyledProfileUploader = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 8px;
`;

const UploadImageBox = styled.div<{ $isDragging: boolean }>`
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    width: 225px;
    height: 300px;
    border-radius: 6px;
    border: 1px dashed ${(props) => (props.$isDragging ? color.maruDefault : color.gray400)};
    background-color: ${color.gray50};
`;

const ImagePreview = styled.img`
    width: 225px;
    height: 300px;
    border-radius: 6px;
`;

const Desc = styled.p`
    ${font.p2}
    color: ${color.gray500};
    margin: 0 auto;
    text-align: center;
`;
