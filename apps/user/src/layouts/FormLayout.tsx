import { Header } from '@/components/common/';
import { ProgressSteps } from '@/components/form';
import { color } from '@maru/design-token';
import { Text } from '@maru/ui';
import type { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  title: string;
}

const FormLayout = ({ children, title }: Props) => {
  return (
    <>
      <Header />
      <StyledFormLayout>
        <ProgressSteps />
        <FormBox>
          <Text fontType="H3" color={color.gray900}>
            {title}
          </Text>
          <ContentBox>{children}</ContentBox>
        </FormBox>
      </StyledFormLayout>
    </>
  );
};

export default FormLayout;

const StyledFormLayout = styled.section`
  width: 100%;
  margin-bottom: 240px;
  background-color: ${color.white};
`;

const FormBox = styled.div`
  margin: 0 auto;
  width: 816px;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 40px;
`;
