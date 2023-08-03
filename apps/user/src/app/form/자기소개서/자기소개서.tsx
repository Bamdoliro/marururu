import { FormController } from '@/components/form';
import { FormLayout } from '@/layouts';
import { color, font } from '@maru/theme';
import { Column, Textarea } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import { useCTAButton, useFormSubmitAction, useInput } from './자기소개서.hooks';
import useDocumentInfoState from './자기소개서.state';

const 자기소개서 = () => {
    const { documentInfo } = useDocumentInfoState();
    const { handleDocumentInfoDataChange } = useInput();
    const { handlePreviousButtonClick } = useCTAButton();
    const { handleFormSubmitButtonClick } = useFormSubmitAction(
        documentInfo.coverLetter,
        documentInfo.statementOfPurpose,
    );

    return (
        <FormLayout title="자기소개서">
            <Styled자기소개서>
                <Desc>*자기소개서와 학업계획서는 자동저장됩니다.</Desc>
                <Column gap={64}>
                    <Textarea
                        name="coverLetter"
                        limit={1500}
                        label="자기소개서"
                        value={documentInfo.coverLetter}
                        onChange={handleDocumentInfoDataChange}
                    />
                    <Textarea
                        name="statementOfPurpose"
                        limit={1500}
                        label="학업계획서"
                        value={documentInfo.statementOfPurpose}
                        onChange={handleDocumentInfoDataChange}
                    />
                </Column>
            </Styled자기소개서>
            <FormController
                onPrevious={handlePreviousButtonClick}
                onNext={handleFormSubmitButtonClick}
                step="자기소개서"
            />
        </FormLayout>
    );
};

export default 자기소개서;

const Styled자기소개서 = styled.div`
    ${flex({ flexDirection: 'column' })}
    width: 100%;
    height: 100%;
`;

const Desc = styled.p`
    ${font.p3}
    color: ${color.red};
    margin-bottom: 24px;
`;
