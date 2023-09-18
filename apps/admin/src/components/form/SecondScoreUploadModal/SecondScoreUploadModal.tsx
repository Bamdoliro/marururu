import { useSecondScoreFileStore } from '@/store/form/secondScore';
import { IconClose } from '@maru/icon';
import { color } from '@maru/theme';
import { Button, Column, Row, Text, TextButton } from '@maru/ui';
import { flex } from '@maru/utils';
import { useState } from 'react';
import styled from 'styled-components';
import SecondScoreUploader from '../SecondScoreUploader/SecondScoreUploader';
import {
    useSecondScoreFormatAction,
    useUploadSecondScoreFormatAction,
} from './SecondScoreUploadModal.hooks';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const SecondScoreUploadModal = ({ isOpen, onClose }: Props) => {
    const { handleDownloadSecondScoreFormatButtonClick } = useSecondScoreFormatAction();
    const [fileData, setFileData] = useSecondScoreFileStore();
    /* TODO :: 이거 좀 별론데... 요청 성공했을 때 input value도 지워야 됨... */
    const [inputFileValue, setInputFileValue] = useState('');

    const removeFileAndCloseModal = () => {
        setFileData(null);
        setInputFileValue('');
        onClose();
    };

    const { handleUploadSecondScoreFormatButtonClick } = useUploadSecondScoreFormatAction(
        fileData,
        removeFileAndCloseModal,
    );

    return (
        <BlurBackground $isOpen={isOpen}>
            <StyledSecondScoreUploadModal>
                <Row justifyContent="space-between">
                    <Column gap={8}>
                        <Text fontType="H2" color={color.gray900}>
                            2차 전형 점수 입력
                        </Text>
                        <Text fontType="p3" color={color.gray600}>
                            .xlsx 형식의 파일을 업로드해주세요.
                        </Text>
                    </Column>
                    <IconClose
                        width={36}
                        height={36}
                        color={color.gray600}
                        cursor="pointer"
                        onClick={onClose}
                    />
                </Row>
                <Column gap={16}>
                    <SecondScoreUploader
                        inputFileValue={inputFileValue}
                        setInputFileValue={setInputFileValue}
                    />
                    <TextButton
                        fontType="btn2"
                        color={color.gray600}
                        onClick={handleDownloadSecondScoreFormatButtonClick}>
                        [ 엑셀 포맷 다운로드 ]
                    </TextButton>
                </Column>
                <Row gap={16} style={{ alignSelf: 'flex-end' }}>
                    <Button size="SMALL" option="SECONDARY" onClick={onClose}>
                        취소
                    </Button>
                    <Button
                        size="SMALL"
                        option={fileData ? 'PRIMARY' : 'DISABLED'}
                        onClick={handleUploadSecondScoreFormatButtonClick}>
                        입력하기
                    </Button>
                </Row>
            </StyledSecondScoreUploadModal>
        </BlurBackground>
    );
};

export default SecondScoreUploadModal;

const BlurBackground = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
`;

const StyledSecondScoreUploadModal = styled.div`
    ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
    width: 720px;
    height: 540px;
    padding: 36px;
    border-radius: 16px;
    background: ${color.white};
`;

const UploadFileBox = styled.div`
    ${flex({ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' })}
    height: 240px;
    border: 1px dashed ${color.gray400};
    border-radius: 6px;
    background: ${color.gray50};
`;
