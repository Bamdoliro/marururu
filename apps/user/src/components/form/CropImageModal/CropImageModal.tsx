import React, { useState, useCallback } from 'react';
import { color } from '@maru/design-token';
import { Button, Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import type { Area } from 'react-easy-crop';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '@/utils';

interface Props {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
  onCropComplete: (croppedImage: Blob) => void;
}

const CropImageModal = ({ isOpen, imageSrc, onClose, onCropComplete }: Props) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedArea, setCroppedArea] = useState<Area | null>(null);

  const onCropCompleteInternal = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedArea(croppedAreaPixels);
    },
    []
  );

  const applyCrop = useCallback(async () => {
    if (!croppedArea) return;
    const croppedImage = await getCroppedImg(imageSrc, croppedArea, 117, 156);

    const response = await fetch(croppedImage as string);
    const blob = await response.blob();

    onCropComplete(blob);
    onClose();
  }, [imageSrc, croppedArea, onCropComplete, onClose]);

  if (!isOpen) return null;

  return (
    <BlurBackground>
      <ModalContainer>
        <Column alignItems="center" gap={16}>
          <CropImageModalStyle>
            <Cropper
              image={imageSrc}
              crop={crop}
              aspect={117 / 156}
              onCropChange={setCrop}
              onCropComplete={onCropCompleteInternal}
              style={{
                containerStyle: { width: '100%', height: '100%', position: 'relative' },
              }}
            />
          </CropImageModalStyle>
          <Button onClick={applyCrop}>
            <Text fontType="btn1" color={color.white}>
              사진 자르기 적용
            </Text>
          </Button>
        </Column>
      </ModalContainer>
    </BlurBackground>
  );
};

export default CropImageModal;

const BlurBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  max-width: 466px;
  width: 100%;
  text-align: center;
  height: 357px;
`;

const CropImageModalStyle = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'center' })}
  width: 100%;
  height: 400px;
  border-radius: 6px;
  border: 3px solid ${color.gray300};
  position: relative;
  overflow: hidden;
`;
