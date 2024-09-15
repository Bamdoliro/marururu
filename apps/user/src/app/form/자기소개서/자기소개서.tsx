import { FormController } from '@/components/form';
import { FormLayout } from '@/layouts';
import { useFormValueStore } from '@/store';
import { color, font } from '@maru/design-token';
import { Column, Textarea } from '@maru/ui';
import { useCTAButton, useInput } from './자기소개서.hooks';
import styled from 'styled-components';
import { useState } from 'react';

const 자기소개서 = () => {
  const form = useFormValueStore();
  const { handle자기소개서Change } = useInput();
  const { handleMoveNextStep, handleMovePreviousStep } = useCTAButton();

  const [isNextClicked, setIsNextClicked] = useState(false);
  const [isCoverLetterError, setIsCoverLetterError] = useState(false);
  const [isStatementOfPurposeError, setIsStatementOfPurposeError] = useState(false);

  const validateForm = () => {
    const coverLetterValid =
      form.document.coverLetter.trim().length > 0 &&
      form.document.coverLetter.trim().length <= 1000;
    const statementOfPurposeValid =
      form.document.statementOfPurpose.trim().length > 0 &&
      form.document.statementOfPurpose.trim().length <= 1000;

    return coverLetterValid && statementOfPurposeValid;
  };

  const handleNextClick = () => {
    setIsNextClicked(true);

    const coverLetterValid =
      form.document.coverLetter.trim().length > 0 &&
      form.document.coverLetter.trim().length <= 1000;
    const statementOfPurposeValid =
      form.document.statementOfPurpose.trim().length > 0 &&
      form.document.statementOfPurpose.trim().length <= 1000;

    setIsCoverLetterError(!coverLetterValid);
    setIsStatementOfPurposeError(!statementOfPurposeValid);

    if (validateForm()) {
      handleMoveNextStep();
    }
  };

  const handle자기소개서ErrorChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handle자기소개서Change(e);
    if (isNextClicked) {
      const { name, value } = e.target;
      const trimmedValue = value.trim();
      if (name === 'coverLetter') {
        setIsCoverLetterError(!(trimmedValue.length > 0 && trimmedValue.length <= 1000));
      } else if (name === 'statementOfPurpose') {
        setIsStatementOfPurposeError(
          !(trimmedValue.length > 0 && trimmedValue.length <= 1000)
        );
      }
    }
  };

  return (
    <FormLayout title="자기소개서">
      <Column>
        <Desc>*자기소개서와 학업계획서는 자동저장됩니다.</Desc>
        <Column gap={64}>
          <Textarea
            name="coverLetter"
            limit={1000}
            label="자기소개서"
            value={form.document.coverLetter}
            onChange={handle자기소개서ErrorChange}
            isError={isCoverLetterError}
            errorMessage={isCoverLetterError ? '자기소개서를 입력해주세요.' : ''}
          />
          <Textarea
            name="statementOfPurpose"
            limit={1000}
            label="학업계획서"
            value={form.document.statementOfPurpose}
            onChange={handle자기소개서ErrorChange}
            isError={isStatementOfPurposeError}
            errorMessage={isStatementOfPurposeError ? '학업계획서를 입력해주세요.' : ''}
          />
        </Column>
      </Column>
      <FormController
        onPrevious={handleMovePreviousStep}
        onNext={handleNextClick}
        step="자기소개서"
      />
    </FormLayout>
  );
};

export default 자기소개서;

const Desc = styled.p`
  ${font.p3}
  color: ${color.red};
  margin-bottom: 24px;
`;
