import { color } from '@maru/theme';
import { Column, Loader, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';

interface Props {
    isOpen: boolean;
}

const PdfGeneratedModal = ({ isOpen }: Props) => {
    return (
        <BlurBackground $isOpen={isOpen}>
            <StyledPdfGeneratedModal>
                <Column gap={8}>
                    <Text fontType="H2" color={color.gray900}>
                        원서 초안 pdf파일을 만드는 중입니다...
                    </Text>
                    <Text fontType="p3" color={color.gray600}>
                        여러분의 멋진 원서를 만드는 중입니다. 조금만 기다려주세요!
                    </Text>
                </Column>
                <Loader top="65%" />
            </StyledPdfGeneratedModal>
        </BlurBackground>
    );
};

export default PdfGeneratedModal;

const BlurBackground = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
`;

const StyledPdfGeneratedModal = styled.div`
    position: relative;
    ${flex({ flexDirection: 'column', alignItems: 'flex-start' })};
    gap: 48px;
    padding: 36px;
    height: 280px;
    background-color: ${color.white};
    border-radius: 16px;
`;
