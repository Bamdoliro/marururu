import { color, font } from '@maru/theme';
import { Button, Column } from '@maru/ui';
import {
    useImageFileChange,
    useImageFileDragAndDrop,
    useOpenUploadImageFile,
} from './ProfileUpload.hooks';
import styled from 'styled-components';

const ProfileUpload = () => {
    const { imageFileInputRef, handleImageUploadButtonClick } = useOpenUploadImageFile();
    const { isDragging, onDragEnter, onDragLeave, onDragOver, onDrop } = useImageFileDragAndDrop();
    const { handleImageFileChange } = useImageFileChange();

    return (
        <StyledProfileUpload>
            <Title>증명사진</Title>
            <ImgUploadBox
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDragOver={onDragOver}
                onDrop={onDrop}
                isDragging={isDragging}>
                <Column gap={12} alignItems="center">
                    <input
                        type="file"
                        ref={imageFileInputRef}
                        accept=".png, .jpg, .jpeg"
                        onChange={handleImageFileChange}
                        hidden
                    />
                    <Button size="SMALL" onClick={handleImageUploadButtonClick}>
                        파일 선택
                    </Button>
                    <ImgUploadText>또는</ImgUploadText>
                    <ImgUploadText>여기로 사진을 끌어오세요</ImgUploadText>
                </Column>
            </ImgUploadBox>
            <Desc>3x4 cm 증명사진</Desc>
        </StyledProfileUpload>
    );
};

export default ProfileUpload;

const StyledProfileUpload = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 225px;
    height: 363px;
`;

const ImgUploadBox = styled.div<{ isDragging: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    border: 1px dashed ${(props) => (props.isDragging ? color.maruDefault : color.gray400)};
    background-color: ${color.gray50};
`;

const ImgUploadText = styled.p`
    ${font.p2}
    color: ${color.gray500};
`;

const Title = styled.p`
    ${font.context}
    color: ${color.gray700};
`;

const Desc = styled.p`
    ${font.p2}
    color: ${color.gray500};
`;
