import { IconClose } from '@maru/icon';
import { color } from '@maru/theme';
import { Button, Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { ChangeEventHandler, useRef, useState } from 'react';
import styled from 'styled-components';

const SecondScoreUploader = () => {
    const [fileData, setFileData] = useState<File | null>(null);
    const imageFileInputRef = useRef<HTMLInputElement>(null);

    const handleUploadFileButtonClick = () => {
        imageFileInputRef.current?.click();
    };

    const handleUploadCancelButtonClick = () => {
        imageFileInputRef.current!.value = '';
        setFileData(null);
    };

    const handleFileDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { files } = e.target;
        console.log(files?.[0]);
        if (!files || files.length === 0) return;
        setFileData(files[0]);
    };

    return (
        <StyledSecondScoreUploader>
            <Column gap={12} alignItems="center">
                {fileData ? (
                    <FileNameBox>
                        <Text fontType="p2" color={color.gray900}>
                            {fileData.name}
                        </Text>
                        <IconClose
                            width={18}
                            height={18}
                            cursor="pointer"
                            onClick={handleUploadCancelButtonClick}
                        />
                    </FileNameBox>
                ) : (
                    <>
                        <Button size="SMALL" onClick={handleUploadFileButtonClick}>
                            파일 선택
                        </Button>
                        <Text fontType="p2" color={color.gray500}>
                            또는
                        </Text>
                        <Text fontType="p2" color={color.gray500}>
                            여기로 파일을 끌어오세요
                        </Text>
                    </>
                )}
            </Column>
            <input
                type="file"
                ref={imageFileInputRef}
                accept=".xlsx"
                onChange={handleFileDataChange}
                hidden
            />
        </StyledSecondScoreUploader>
    );
};

export default SecondScoreUploader;

const StyledSecondScoreUploader = styled.div`
    ${flex({ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' })}
    height: 240px;
    border: 1px dashed ${color.gray400};
    border-radius: 6px;
    background: ${color.gray50};
`;

const FileNameBox = styled.div`
    ${flex({ justifyContent: 'space-between', alignItems: 'center' })}
    gap: 12px;
    height: 36px;
    padding: 0 8px 0 12px;
    border-radius: 6px;
    background: ${color.gray200};
`;
