'use client';

import { AppLayout } from '@/layouts';
import { color } from '@maru/design-token';
import { Column, Row, Text } from '@maru/ui';
import { styled } from 'styled-components';
import Purpose from './Purpose/Purpose';
import Mean from './Mean/Mean';
import Change from './Change/Change';
import Notification from './Notification/Notification';
import ContractEstablishment from './ContractEstablishment/ContractEstablishment';
import ApplicationOfUse from './ApplicationOfUse/ApplicationOfUse';
import ProtectionOfPersonalInformation from './ProtectionOfPersonalInformation/ProtectionOfPersonalInformation';
import ApprovalOfApplicationForUse from './ApprovalOfApplicationForUse/ApprovalOfApplicationForUse';
import ChangesToContractTerms from './ChangesToContractTerms/ChangesToContractTerms';
import SiteObligations from './SiteObligations/SiteObligations';
import MembershipObligations from './MembershipObligations/MembershipObligations';
import NoTransfer from './NoTransfer/NoTransfer';
import ScopeOfServiceUse from './ScopeOfServiceUse/ScopeOfServiceUse';
import ProvideInformation from './ProvideInformation/ProvideInformation';
import Fee from './Fee/Fee';
import MemberBoard from './MemberBoard/MemberBoard';
import PostCopyright from './PostCopyright/PostCopyright';
import HoursOfUse from './HoursOfUse/HoursOfUse';
import ResponsibilityForUse from './ResponsibilityForUse/ResponsibilityForUse';
import StopOffering from './StopOffering/StopOffering';
import TerminationOfContractAndRestrictionsOnUse from './TerminationOfContractAndRestrictionsOnUse/TerminationOfContractAndRestrictionsOnUse';
import CompensationForDamages from './CompensationForDamages/CompensationForDamages';
import Disclaimer from './Disclaimer/Disclaimer';
import CompetentCourt from './CompetentCourt/CompetentCourt';
import { IconTerms } from '@maru/icon';

const termUse = () => {
  return (
    <AppLayout header footer>
      <StyledTermUsePage>
        <Column gap={5}>
          <Text fontType="H1" color={color.gray900}>
            이용약관
          </Text>
          <Separator />
        </Column>
      </StyledTermUsePage>
      <Center>
        <Text fontType="H1" color={color.gray900}>
          부산소프트웨어마이스터고등학교 이용약관
        </Text>
      </Center>
      <StyledTermUsePage>
        <Column gap={32}>
          <Column gap={4}>
            <Text fontType="H3" color={color.gray900}>
              제1장 총 칙
            </Text>
            <Purpose />
          </Column>
          <Mean />
          <Change />
          <Notification />
          <Separator />
          <Column gap={4}>
            <Text fontType="H3" color={color.gray900}>
              제2장 서비스 이용계약
            </Text>
            <ContractEstablishment />
          </Column>
          <ApplicationOfUse />
          <ProtectionOfPersonalInformation />
          <ApprovalOfApplicationForUse />
          <ChangesToContractTerms />
          <Separator />
          <Column gap={4}>
            <Text fontType="H3" color={color.gray900}>
              제3장 계약 당사자의 의무
            </Text>
            <SiteObligations />
          </Column>
          <MembershipObligations />
          <NoTransfer />
          <Separator />
          <Column gap={4}>
            <Text fontType="H3" color={color.gray900}>
              제4장 서비스 이용
            </Text>
            <ScopeOfServiceUse />
          </Column>
          <ProvideInformation />
          <Fee />
          <MemberBoard />
          <PostCopyright />
          <HoursOfUse />
          <ResponsibilityForUse />
          <StopOffering />
          <Separator />
          <Column gap={4}>
            <Text fontType="H3" color={color.gray900}>
              제5장 계약 해지 및 이용 제한
            </Text>
            <TerminationOfContractAndRestrictionsOnUse />
          </Column>
          <CompensationForDamages />
          <Disclaimer />
          <CompetentCourt />
          <Separator />
          <Column gap={4}>
            <Text fontType="H3" color={color.gray900}>
              부 칙
            </Text>
            <Row gap={3} alignItems="center">
              <IconTerms />
              <Text fontType="H4" color={color.gray900}>
                (시행일) 이 약관은 공시한 날부터 시행합니다
              </Text>
            </Row>
          </Column>
        </Column>
        <Column height={233}> </Column>
      </StyledTermUsePage>
    </AppLayout>
  );
};

export default termUse;

const StyledTermUsePage = styled.div`
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
  margin: 1% 0;
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
