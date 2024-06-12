import { ROUTES } from '@/constants/common/constant';
import { IconArrowRight } from '@maru/icon';
import { color } from '@maru/design-token';
import { Text } from '@maru/ui';
import { flex } from '@maru/utils';
import Link from 'next/link';
import { Suspense } from '@suspensive/react';
import styled from 'styled-components';
import NoticeBoxList from './NoticeBoxList/NoticeBoxList';

const NoticeBox = () => {
  return (
    <StyledNoticeBox>
      <DirectLink href={ROUTES.NOTICE}>
        <Text fontType="H3" color={color.gray900}>
          공지사항
        </Text>
        <IconArrowRight color={color.gray900} width={24} height={24} />
      </DirectLink>
      <Suspense.CSROnly>
        <NoticeBoxList />
      </Suspense.CSROnly>
    </StyledNoticeBox>
  );
};

export default NoticeBox;

const StyledNoticeBox = styled.div`
  position: relative;
  ${flex({ flexDirection: 'column' })}
  gap: 16px;
  width: 596px;
  height: 100%;
`;

const DirectLink = styled(Link)`
  ${flex({ alignItems: 'center' })};
  gap: 8px;
`;
