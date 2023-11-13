import { ROUTES } from '@/constants/common/constant';
import { color, font } from '@maru/design-token';
import { flex } from '@maru/utils';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

interface Props {
  id: number;
  title: string;
}

const NoticeBoxItem = ({ id, title }: Props) => {
  const router = useRouter();

  return (
    <StyledNoticeBoxItem onClick={() => router.push(`${ROUTES.NOTICE}/${id}`)}>
      <Title>{title}</Title>
    </StyledNoticeBoxItem>
  );
};

export default NoticeBoxItem;

const StyledNoticeBoxItem = styled.div`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 64px;
  padding: 0px 16px;
  border-bottom: 1px solid ${color.gray300};
  cursor: pointer;
`;

const Title = styled.a`
  ${font.p1}
  color: ${color.gray750};
  // 일정 길이 넘어가면 ... 처리
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
