import React, { useState, useCallback, useEffect } from 'react';
import { color } from '@maru/design-token';
import { Button, Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import type { Area } from 'react-easy-crop';
import Cropper from 'react-easy-crop';
import { getCropImg } from '@/utils';
import ProfileUploadLoader from '../ProfileUpoloadLoader/ProfileUploadLoader';

interface Props {
  zoom: number;
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
  onCropComplete: (croppedImage: Blob) => void;
}

const CropImageModal = ({ zoom, isOpen, imageSrc, onClose, onCropComplete }: Props) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [cropArea, setCropArea] = useState<Area | null>(null);
  const [currentZoom, setCurrentZoom] = useState(zoom);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const onCropCompleteInternal = useCallback(
    (cropArea: Area, croppedAreaPixels: Area) => {
      setCropArea(croppedAreaPixels);
    },
    []
  );

  const handleApplyCrop = useCallback(async () => {
    if (!cropArea) return;

    setIsUploading(true);

    try {
      const croppedImage = await getCropImg(imageSrc, cropArea, 117, 156);

      const response = await fetch(croppedImage as string);
      const blob = await response.blob();

      onCropComplete(blob);
    } catch (error) {
      return;
    } finally {
      setTimeout(() => {
        setIsUploading(false);
        onClose();
      }, 2000);
    }
  }, [imageSrc, cropArea, onCropComplete, onClose]);

  const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentZoom(Number(e.target.value));
  };

  if (!isOpen) return null;

  return (
    <BlurBackground>
      <ModalContainer>
        <Column alignItems="center" gap={16}>
          {isUploading ? (
            <ProfileUploadLoader isOpen={true} />
          ) : (
            <>
              <CropImageModalStyle>
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  zoom={currentZoom}
                  aspect={117 / 156}
                  onCropChange={setCrop}
                  onCropComplete={onCropCompleteInternal}
                  onZoomChange={setCurrentZoom}
                  style={{
                    containerStyle: {
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                    },
                  }}
                />
              </CropImageModalStyle>
              <ZoomBoxStyle>
                <InputStyle
                  type="range"
                  min="1"
                  max="3"
                  step="0.1"
                  value={currentZoom}
                  onChange={handleZoomChange}
                />
              </ZoomBoxStyle>
              <Button onClick={handleApplyCrop}>
                <Text fontType="btn1" color={color.white}>
                  사진 자르기 적용
                </Text>
              </Button>
            </>
          )}
        </Column>
      </ModalContainer>
    </BlurBackground>
  );
};

export default CropImageModal;

const BlurBackground = styled.div`
  display: flex;
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
  margin-top: 10%;
  padding: 20px;
  border-radius: 10px;
  max-width: 468px;
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

const ZoomBoxStyle = styled.div`
  background-color: ${color.white};
  width: 80%;
  height: 60px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const InputStyle = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  background: ${color.gray300};
  border-radius: 999px;
  height: 8px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: ${color.white};
    border: 1px solid ${color.maruDefault};
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    box-shadow: 0 0 0 2px ${color.maruLightBlue};
  }
`;
