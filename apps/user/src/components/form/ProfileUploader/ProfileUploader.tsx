import { useOpenFileUploader } from '@/hooks';
import {
  useRefreshProfileImageMutation,
  useUploadProfileImageMutation,
} from '@/services/form/mutations';
import { color, font } from '@maru/design-token';
import { Button, Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import type { ChangeEventHandler } from 'react';
import { useState, useEffect, useMemo, useCallback } from 'react';
import styled, { css } from 'styled-components';
import CropImageModal from '../CropImageModal/CropImageModal';
import ProfileUploadLoader from '../ProfileUpoloadLoader/ProfileUploadLoader';
import { Storage } from '@/apis/storage/storage';

type ProfileUploaderProps = {
  onPhotoUpload: (success: boolean, url?: string) => void;
  isError: boolean;
};

const ProfileUploader = ({ onPhotoUpload, isError }: ProfileUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [tempImageSrc, setTempImageSrc] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const { openFileUploader, ref: imageUploaderRef } = useOpenFileUploader();

  const { mutate: uploadProfileImage } = useUploadProfileImageMutation();
  const { mutate: refreshProfileImage } = useRefreshProfileImageMutation();

  const isUploadPictureStored = useMemo(
    () => Storage.getItem('isUploadPicture') === 'true',
    []
  );

  const handleUploadSuccess = useCallback(
    (downloadUrl: string | null) => {
      if (!downloadUrl) {
        setIsUploading(false);
        return;
      }

      onPhotoUpload(true, downloadUrl);
      setImageSrc(downloadUrl);
      Storage.setItem('downloadUrl', downloadUrl);
      Storage.setItem('isUploadPicture', 'true');
      setIsUploading(false);
    },
    [onPhotoUpload]
  );

  const startUploading = useCallback(
    (file: File) => {
      setIsUploading(true);
      uploadProfileImage(file, {
        onSuccess: (data: unknown) => {
          const downloadUrl = typeof data === 'string' ? data : null;
          handleUploadSuccess(downloadUrl);
        },
        onError: () => {
          setIsUploading(false);
          onPhotoUpload(false);
        },
      });
    },
    [uploadProfileImage, handleUploadSuccess, onPhotoUpload]
  );

  const onCropComplete = useCallback(
    (croppedImage: Blob) => {
      const croppedFile = new File([croppedImage], 'image.jpg', {
        type: 'image/jpeg',
      });
      startUploading(croppedFile);
    },
    [startUploading]
  );

  const processImageFile = useCallback(
    (file: File) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        if (img.width < 117 || img.height < 156) {
          alert('사진 크기가 너무 작습니다.');
        } else if (img.width > 117 || img.height > 156) {
          setTempImageSrc(URL.createObjectURL(file));
          setIsModalOpen(true);
        } else {
          startUploading(file);
        }
      };
    },
    [startUploading]
  );

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) processImageFile(file);
      setIsDragging(false);
    },
    [processImageFile]
  );

  useEffect(() => {
    if (!isUploadPictureStored && !isUploading) {
      refreshProfileImage(undefined, {
        onSuccess: (newDownloadUrl) => handleUploadSuccess(newDownloadUrl),
        onError: () => onPhotoUpload(false),
      });
    } else {
      const storedImageUrl = Storage.getItem('downloadUrl');
      if (storedImageUrl) setImageSrc(storedImageUrl);
    }
  }, [
    isUploadPictureStored,
    refreshProfileImage,
    handleUploadSuccess,
    onPhotoUpload,
    isUploading,
  ]);

  const handleImageFileChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const file = e.target.files?.[0];
      if (file) processImageFile(file);
    },
    [processImageFile]
  );

  return (
    <StyledProfileUploader>
      <Text fontType="context" color={color.gray700}>
        증명사진
      </Text>
      {isUploading ? (
        <ProfileUploadLoader isOpen={true} />
      ) : (
        <>
          {imageSrc ? (
            <ImagePreview src={imageSrc} alt="profile-image" />
          ) : (
            <UploadImageBox
              onDragEnter={(e: React.DragEvent<HTMLDivElement>) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={(e: React.DragEvent<HTMLDivElement>) => {
                e.preventDefault();
                setIsDragging(false);
              }}
              onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onDrop={onDrop}
              $isDragging={isDragging}
              $isError={isError}
            >
              <Column gap={12} alignItems="center">
                <Button size="SMALL" onClick={openFileUploader}>
                  파일 선택
                </Button>
                <Text fontType="p2" color={color.gray500}>
                  또는 여기로 사진을 끌어오세요
                </Text>
              </Column>
            </UploadImageBox>
          )}
          {imageSrc && (
            <Button size="SMALL" onClick={openFileUploader}>
              재업로드
            </Button>
          )}
          <Desc>
            10MB 이하, 3개월 이내의
            <br />
            3x4 cm 증명사진
          </Desc>
        </>
      )}
      <input
        type="file"
        ref={imageUploaderRef}
        accept=".png, .jpg, .jpeg"
        onChange={handleImageFileChange}
        hidden
      />
      {tempImageSrc && (
        <CropImageModal
          isOpen={isModalOpen}
          imageSrc={tempImageSrc}
          onClose={() => setIsModalOpen(false)}
          onCropComplete={onCropComplete}
          zoom={1}
        />
      )}
    </StyledProfileUploader>
  );
};

export default ProfileUploader;

const StyledProfileUploader = styled.div`
  ${flex({ flexDirection: 'column' })};
  gap: 8px;
`;

const UploadImageBox = styled.div<{ $isDragging: boolean; $isError: boolean }>`
  ${flex({ alignItems: 'center', justifyContent: 'center' })};
  width: 225px;
  height: 300px;
  border-radius: 6px;
  border: 1px dashed
    ${(props) =>
      props.$isDragging ? color.maruDefault : props.$isError ? color.red : color.gray400};
  background-color: ${color.gray50};
  ${(props) =>
    props.$isError &&
    css`
      outline: 3px solid rgba(244, 67, 54, 0.25);
    `}
`;

const ImagePreview = styled.img`
  width: 225px;
  height: 300px;
  border-radius: 6px;
`;

const Desc = styled.p`
  ${font.p2};
  color: ${color.gray500};
  margin: 0 auto;
  text-align: center;
`;
