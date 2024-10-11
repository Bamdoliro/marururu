import { ROUTES } from '@/constants/common/constant';
import { color, font } from '@maru/design-token';
import { IconRoundBamdoliro, IconRoundInstagram } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterBox>
        <Column gap={40} width={489}>
          <Image src="/svg/logo_gray.svg" width={107} height={32} alt="logo_gray" />
          <Column gap={20}>
            <ContentBox>
              <Text fontType="p2" color={color.gray600}>
                주소: 부산광역시 강서구 가락대로 1393 봉림동 15 (46708)
              </Text>
              <Text fontType="p2" color={color.gray600}>
                교무실(입학처): 051-971-2153, Fax: 051-971-2061
              </Text>
              <Text fontType="p2" color={color.gray600}>
                입학담당자: 051-970-1725, Fax: 051-971-2061
              </Text>
              <Text fontType="p2" color={color.gray600}>
                행정실: 051-971-2152, Fax: 051-971-6325
              </Text>
            </ContentBox>
            <Text fontType="p3" color={color.gray600}>
              Copyright © 밤돌이로 all rights reserved.
            </Text>
          </Column>
        </Column>
        <Row gap={95} alignItems="flex-start">
          <Row gap={132} alignItems="flex-start">
            <Column gap={24}>
              <DirectLink href={ROUTES.FORM}>원서접수</DirectLink>
              <DirectLink href={ROUTES.NOTICE}>공지사항</DirectLink>
              <DirectLink href={ROUTES.FAQ}>자주묻는질문</DirectLink>
              <DirectLink href="http://bssm.hs.kr">학교 홈페이지</DirectLink>
            </Column>
            <Column gap={24}>
              <DirectLink href={ROUTES.TERMUSE}>이용약관</DirectLink>
              <DirectLink href={ROUTES.PRIVACY}>개인정보처리방침</DirectLink>
              <DirectLink href={ROUTES.PRIVACYCOLLECTION}>개인정보 수집</DirectLink>
            </Column>
          </Row>
          <Row gap={16} alignItems="center">
            <HoverRoundInstagram
              width={36}
              height={36}
              onClick={() => window.open('https://www.instagram.com/bamdoliro/')}
            />
            <HoverRoundBamdoliro
              width={36}
              height={36}
              onClick={() => window.open('https://github.com/Bamdoliro')}
            />
          </Row>
        </Row>
      </FooterBox>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: ${color.gray100};
  padding: 40px 96px 82px;
`;

const FooterBox = styled.div`
  ${flex({ justifyContent: 'space-between', alignItems: 'center' })}
  height: 350px;
  max-width: 1248px;
  width: 100%;
  margin: 0 auto;
`;

const ContentBox = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 8px;
  border-bottom: 1px solid ${color.gray300};
  padding-bottom: 20px;
`;

const DirectLink = styled(Link)`
  ${font.p3}
  color: ${color.gray600};
`;

const HoverRoundBamdoliro = styled(IconRoundBamdoliro)`
  :hover path:first-child {
    fill: ${color.bamdoliro};
  }

  cursor: pointer;
`;

const HoverRoundInstagram = styled(IconRoundInstagram)`
  :hover path:first-child {
    fill: ${color.bamdoliro};
  }

  cursor: pointer;
`;
