import { CertificateCalculator, FormController, GradePreview } from '@/components/form';
import { FormLayout } from '@/layouts';
import { color } from '@maru/design-token';
import { Column, Text, UnderlineButton } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import { useCTAButton } from './자격증.hooks';

const 자격증 = () => {
  const { handleMoveNextStep, handleMovePreviousStep } = useCTAButton();

  return (
    <FormLayout title="성적 입력">
      <Column gap={24}>
        <Text fontType="p3" color={color.red}>
          *교과성적이 없는 학기나 학년의 경우 모집요강을 반드시 확인 바랍니다.
          <br />
          *성취수준이 없고 원점수로 되어있는 학기나 학년은 아래표를 참고 바랍니다.
        </Text>
        <Column gap={12}>
          <Text fontType="H4" color={color.gray900}>
            성적 계산
          </Text>
          <GradePreview />
        </Column>
      </Column>
      <NavigationBar>
        <UnderlineButton active={true}>자격증</UnderlineButton>
      </NavigationBar>
      <CertificateCalculator />
      <FormController
        onPrevious={handleMovePreviousStep}
        onNext={handleMoveNextStep}
        step="성적입력"
      />
    </FormLayout>
  );
};

export default 자격증;

const NavigationBar = styled.div`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  margin: 64px 0 16px;
  background-color: ${color.white};
`;
