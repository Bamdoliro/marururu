import { FormController, GradePreview, ScoreCalculator } from '@/components/form';
import { FormLayout } from '@/layouts';
import { color } from '@maru/design-token';
import { Column, Text, UnderlineButton } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import { useCTAButton } from './교과성적.hooks';

const 교과성적 = () => {
  const { handleMoveNextStep, handleMovePreviousStep } = useCTAButton();

  return (
    <FormLayout title="성적 입력">
      <Column gap={12}>
        <Text fontType="H4" color={color.gray900}>
          성적 계산 배점
        </Text>
        <GradePreview />
      </Column>
      <NavigationBar>
        <UnderlineButton active={true}>교과성적</UnderlineButton>
      </NavigationBar>
      <ScoreCalculator option="FORM" />
      <FormController
        onPrevious={handleMovePreviousStep}
        onNext={handleMoveNextStep}
        step="성적입력"
      />
    </FormLayout>
  );
};

export default 교과성적;

const NavigationBar = styled.div`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  margin: 64px 0 16px;
  background-color: ${color.white};
`;
