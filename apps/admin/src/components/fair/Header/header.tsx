import { ROUTES } from '@/constants/common/constant';
import { color } from '@maru/design-token';
import { Button, Row, UnderlineButton } from '@maru/ui';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

const NAVIGATION_LIST = [
  {
    name: '진행 중인 신청',
  },
  {
    name: '마감된 신청',
  },
];

interface Props {
  selectedTab: string;
  handleTabClick: (name: string) => void;
}

const Header: React.FC<Props> = ({ selectedTab, handleTabClick }) => {
  const router = useRouter();

  return (
    <StyledHeader>
      <Row alignItems="center" justifyContent="space-between">
        <Row>
          {NAVIGATION_LIST.map(({ name }, index) => (
            <UnderlineButton
              key={`navigation ${index}`}
              active={name === selectedTab}
              onClick={() => handleTabClick(name)}
            >
              {name}
            </UnderlineButton>
          ))}
        </Row>
        <Button onClick={() => router.push(ROUTES.FAIR_POST)} icon="ADD_ICON">
          입학 설명회 생성
        </Button>
      </Row>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  background-color: ${color.white};
  padding-top: 36px;
`;
