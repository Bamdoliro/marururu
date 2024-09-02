import { useOpenFileUploader } from '@/hooks';
import { useUploadProfileImageMutation } from '@/services/form/mutations';
import { color, font } from '@maru/design-token';
import { Button, Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import type { ChangeEventHandler, DragEvent } from 'react';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import CropImageModal from '../CropImageModal/CropImageModal';
import ProfileUploadLoader from '../ProfileUpoloadLoader/ProfileUploadLoader';
import { getUploadProfile, postUploadProfileImage } from '@/services/form/api';

type ProfileUploaderProps = {
  onPhotoUpload: (success: boolean, url?: string) => void;
  isError: boolean;
};

const ProfileUploader = ({ onPhotoUpload, isError }: ProfileUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const { openFileUploader: openImageFileUploader, ref: imageUploaderRef } =
    useOpenFileUploader();
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const fetchDownloadUrl = async () => {
      const presignedData = await postUploadProfileImage();
      const newDownloadUrl = await getUploadProfile(presignedData.downloadUrl);
      setImageSrc(newDownloadUrl);
    };

    fetchDownloadUrl();
  }, []);

  const { mutate: uploadProfileImageMutate } = useUploadProfileImageMutation();

  const handleUploadSuccess = (downloadUrl: string) => {
    onPhotoUpload(true, downloadUrl);
    setIsUploading(false);
    setImageSrc(downloadUrl);
  };

  const handleImageFileChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const { files } = e.target;
    if (!files || files.length === 0) return;

    const file = files[0];
    processImageFile(file);
  };

  const processImageFile = (file: File) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      if (img.width < 117 || img.height < 156) {
        alert('사진 크기가 너무 작습니다.');
        return;
      }

      if (img.width > 117 || img.height > 156) {
        setImageSrc(URL.createObjectURL(file));
        setIsModalOpen(true);
      } else {
        setIsUploading(true);
        uploadProfileImageMutate(file, {
          onSuccess: handleUploadSuccess,
        });
      }
    };
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    processImageFile(file);
    setIsDragging(false);
  };

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
              onDragEnter={(e: DragEvent<HTMLDivElement>) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={(e: DragEvent<HTMLDivElement>) => {
                e.preventDefault();
                setIsDragging(false);
              }}
              onDragOver={(e: DragEvent<HTMLDivElement>) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onDrop={onDrop}
              $isDragging={isDragging}
              $isError={isError}
            >
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
          {imageSrc && (
            <Button size="SMALL" onClick={openImageFileUploader}>
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
      {imageSrc && (
        <CropImageModal
          isOpen={isModalOpen}
          imageSrc={imageSrc}
          onClose={() => setIsModalOpen(false)}
          onCropComplete={(croppedImage) => {
            setIsUploading(true);
            const croppedFile = new File([croppedImage], 'image.jpg', {
              type: 'image/jpeg',
            });
            uploadProfileImageMutate(croppedFile, {
              onSuccess: handleUploadSuccess,
            });
          }}
          zoom={1}
        />
      )}
    </StyledProfileUploader>
  );
};

export default ProfileUploader;

const StyledProfileUploader = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 8px;
`;

const UploadImageBox = styled.div<{ $isDragging: boolean; $isError: boolean }>`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
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
  ${font.p2}
  color: ${color.gray500};
  margin: 0 auto;
  text-align: center;
`;
