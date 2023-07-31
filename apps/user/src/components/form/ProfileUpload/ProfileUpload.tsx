import { color, font } from '@maru/theme';
import { Button, Column } from '@maru/ui';
import {
    ChangeEventHandler,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
    useRef,
    DragEvent,
} from 'react';
import { UserInfo } from '../../../app/form/지원자정보/hooks/지원자정보.hooks';
import { useUploadProfileImageMutation } from '@/services/form/지원자정보/mutations';
import styled from 'styled-components';

interface PropsType {
    userInfo: UserInfo;
    setUserInfo: Dispatch<SetStateAction<UserInfo>>;
}

const ProfileUpload = ({ userInfo, setUserInfo }: PropsType) => {
    const [isDragging, setIsDragging] = useState(false);
    const imageFileInputRef = useRef<HTMLInputElement>(null);

    // 클릭시 이미지 업로드 파일 열기
    const handleImageUploadButtonClick = () => {
        imageFileInputRef.current?.click();
    };

    // Mutation
    const uploadProfileImageMutation = useUploadProfileImageMutation(setUserInfo);
    const uploadProfileImageFile = (image: FormData) => {
        uploadProfileImageMutation.mutate(image);
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
        <StyledProfileUpload>
            <Title>증명사진</Title>
            {userInfo.identificationPictureUri ? (
                <ImagePreview src={userInfo.identificationPictureUri} alt="profile-image" />
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
            {userInfo.identificationPictureUri && (
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
