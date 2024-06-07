'use client';

import { AppLayout } from '@/layouts';
import { color } from '@maru/design-token';
import { Column, Text } from '@maru/ui';
import { styled } from 'styled-components';
import PrivacyCollectionItem from './PrivacyCollectionItem/PrivacyCollectionItem';
import PrivacyCollectionOrPurpose from './PrivacyCollectionOrPurpose/PrivacyCollectionOrPurpose';
import RetentionPeriod from './RetentionPeriod/RetentionPeriod';
import RefuseConstent from './RefuseConsent/RefuseConsent';

const privacyCollection = () => {
  return (
    <AppLayout header footer>
      <StyledPrivacyCollectionPage>
        <Column gap={5}>
          <Text fontType="H1" color={color.gray900}>
            이용약관
          </Text>
          <Separator />
        </Column>
      </StyledPrivacyCollectionPage>
      <Center>
        <Text fontType="H1" color={color.gray900}>
          개인정보 선택 항목 수집 및 이용에 대한 동의
        </Text>
      </Center>
      <StyledPrivacyCollectionPage>
        <Column gap={40}>
          <PrivacyCollectionOrPurpose />
          <PrivacyCollectionItem />
          <RetentionPeriod />
          <RefuseConstent />
        </Column>
      </StyledPrivacyCollectionPage>
      <Column height={80}> </Column>
    </AppLayout>
  );
};

export default privacyCollection;

const StyledPrivacyCollectionPage = styled.div`
  width: 100%;
  padding-left: 205px;
  padding-top: 25px;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-top: 20px;
  }
`;

const Separator = styled.hr`
  border: 1px solid ${color.gray400};
  margin: 2% 0;
  width: 82%;

  @media (max-width: 768px) {
    width: 82%;
  }
`;

const Center = styled.div`
  align-items: center;
  display: inline-block;
  text-align: center;
  width: 100%;
`;
