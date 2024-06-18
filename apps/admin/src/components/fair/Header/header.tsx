import { color } from '@maru/design-token';
import { Row, UnderlineButton } from '@maru/ui';
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
      </Row>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  background-color: ${color.white};
  padding-bottom: 36px;
  padding-top: 36px;
`;
