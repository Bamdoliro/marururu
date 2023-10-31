import { FormController } from '@/components/form';
import { FormLayout } from '@/layouts';
import { useFormValueStore } from '@/store';
import { color, font } from '@maru/theme';
import { Column, Textarea } from '@maru/ui';
import { useCTAButton, useInput } from './자기소개서.hooks';
import styled from 'styled-components';

const 자기소개서 = () => {
  const form = useFormValueStore();
  const { handle자기소개서Change } = useInput();
  const { handleMoveNextStep, handleMovePreviousStep } = useCTAButton();

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
            onChange={handle자기소개서Change}
          />
          <Textarea
            name="statementOfPurpose"
            limit={1000}
            label="학업계획서"
            value={form.document.statementOfPurpose}
            onChange={handle자기소개서Change}
          />
        </Column>
      </Column>
      <FormController
        onPrevious={handleMovePreviousStep}
        onNext={handleMoveNextStep}
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
