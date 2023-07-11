import { color, font } from '@maru/theme';
import { Button, Column } from '@maru/ui';
import styled from 'styled-components';

const ProfileUpload = () => {
    return (
        <StyledProfileUpload>
            <Title>증명사진</Title>
            <ImgUpload>
                <Column gap={12} alignItems="center">
                    <Button size="SMALL">파일 선택</Button>
                    <ImgUploadText>또는</ImgUploadText>
                    <ImgUploadText>여기로 사진을 끌어오세요</ImgUploadText>
                </Column>
            </ImgUpload>
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

const ImgUpload = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    border: 1px dashed ${color.gray400};
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
