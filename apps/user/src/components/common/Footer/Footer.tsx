import { ROUTES } from '@/constants/common/constant';
import { color, font } from '@maru/theme';
import { Column, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const Footer = () => {
    const router = useRouter();

    return (
        <StyledFooter>
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
                            행정실:051-971-2152, Fax: 051-971-6325
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
                        <DirectLink href={ROUTES.MAIN}>학교소개</DirectLink>
                    </Column>
                    <Column gap={24}>
                        <DirectLink href={ROUTES.MAIN}>이용약관</DirectLink>
                        <DirectLink href={ROUTES.MAIN}>개인정보처리방침</DirectLink>
                        <DirectLink href={ROUTES.MAIN}>학교 홈페이지</DirectLink>
                    </Column>
                </Row>
                <Row gap="16px" alignItems="center">
                    <Image
                        src="/svg/round_instagram.svg"
                        width={36}
                        height={36}
                        alt="round-instagram"
                    />
                    <Image
                        src="/svg/round_bamdoliro.svg"
                        width={36}
                        height={36}
                        alt="round-bamdoliro"
                    />
                </Row>
            </Row>
        </StyledFooter>
    );
};

export default Footer;

const StyledFooter = styled.div`
    ${flex({ justifyContent: 'space-between', alignItems: 'center' })}
    background-color: ${color.gray100};
    height: 350px;
    width: 100%;
    padding: 40px 100px;
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
