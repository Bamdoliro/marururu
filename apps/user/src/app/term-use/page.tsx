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
import ApprovalOfApplicationForUse from './ApprovalOfApplicationForUse/ApprovalOfApplicationForUse';
import SiteObligations from './SiteObligations/SiteObligations';
import { IconTerms } from '@maru/icon';
import 통지및고지 from './통지및고지/통지및고지';
import 승낙과제한 from './승낙과제한/승낙과제한';
import 서비스요금 from './서비스요금/서비스요금';
import 이용시간 from './이용시간/이용시간';
import 학교의의무 from './학교의의무/학교의의무';
import 회원의의무 from './회원의의무/회원의의무';
import 정보제공 from './정보제공/정보제공';
import 게시물저작권 from './게시물저작권/게시물저작권';
import 서비스중지 from './서비스중지/서비스중지';
import 손해배상 from './손해배상/손해배상';
import 회원개인정보보호 from './회원개인정보보호/회원개인정보보호';
import 쿠키 from './쿠키/쿠키';
import 불만처리 from './불만처리/불만처리';

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
          <통지및고지 />
          <Column gap={4}>
            <Text fontType="H3" color={color.gray900}>
              제2장 회원가입
            </Text>
            <ContractEstablishment />
          </Column>
          <승낙과제한 />
          <ApprovalOfApplicationForUse />
          <Column gap={4}>
            <Text fontType="H3" color={color.gray900}>
              제3장 서비스의 이용
            </Text>
            <SiteObligations />
          </Column>
          <서비스요금 />
          <이용시간 />
          <학교의의무 />
          <회원의의무 />
          <정보제공 />
          <게시물저작권 />
          <서비스중지 />
          <Column gap={4}>
            <Text fontType="H3" color={color.gray900}>
              제4장 기타
            </Text>
            <손해배상 />
          </Column>
          <회원개인정보보호 />
          <쿠키 />
          <불만처리 />
          <Column gap={4}>
            <Text fontType="H3" color={color.gray900}>
              부 칙
            </Text>
            <Row gap={3} alignItems="center">
              <IconTerms />
              <Text fontType="H4" color={color.gray900}>
                (240711) 이 약관은 공시한 날부터 시행합니다.
              </Text>
            </Row>
            <Text fontType="p3" color={color.maruDefault}>
              공고 일자 : [240711]
              <br />
              시행 일자 : [240711]
            </Text>
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
