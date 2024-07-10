import { color } from '@maru/design-token';
import { Row, Td, Th, Text } from '@maru/ui';
import styled from 'styled-components';

const InformationLocation = () => {
  return (
    <StyleInformationLocation>
      <Table>
        <Row alignItems="center">
          <StyledTh borderTopLeftRadius={12} width="41%" height={56}>
            부착장소
          </StyledTh>
          <StyledTh borderTopRightRadius={12} width="41%" height={56}>
            안내판 수
          </StyledTh>
        </Row>
        <Row alignItems="center">
          <StyledTd width="41%" height={56}>
            <Text fontType="p2" color={color.maruDefault}>
              학교 정문
            </Text>
          </StyledTd>
          <StyledTd width="41%" height={56}>
            <Text fontType="p2" color={color.maruDefault}>
              1
            </Text>
          </StyledTd>
        </Row>
        <Row alignItems="center">
          <StyledTd width="41%" height={56}>
            <Text fontType="p2" color={color.maruDefault}>
              본관 중앙현관
            </Text>
          </StyledTd>
          <StyledTd width="41%" height={56}>
            <Text fontType="p2" color={color.maruDefault}>
              1
            </Text>
          </StyledTd>
        </Row>
        <Row alignItems="center">
          <StyledTd width="41%" height={56}>
            <Text fontType="p2" color={color.maruDefault}>
              창의관 왼쪽 출입구
            </Text>
          </StyledTd>
          <StyledTd width="41%" height={56}>
            <Text fontType="p2" color={color.maruDefault}>
              1
            </Text>
          </StyledTd>
        </Row>
        <Row alignItems="center">
          <StyledTd width="41%" height={56}>
            <Text fontType="p2" color={color.maruDefault}>
              SRC관 1층 중앙현관
            </Text>
          </StyledTd>
          <StyledTd width="41%" height={56}>
            <Text fontType="p2" color={color.maruDefault}>
              1
            </Text>
          </StyledTd>
        </Row>
        <Row alignItems="center">
          <StyledTd width="41%" height={56}>
            <Text fontType="p2" color={color.maruDefault}>
              기숙사A동 중앙현관
            </Text>
          </StyledTd>
          <StyledTd width="41%" height={56}>
            <Text fontType="p2" color={color.maruDefault}>
              1
            </Text>
          </StyledTd>
        </Row>
        <Row alignItems="center">
          <StyledTd width="41%" height={56} borderBottomLeftRadius={12}>
            <Text fontType="p2" color={color.maruDefault}>
              강당 중앙현관
            </Text>
          </StyledTd>
          <StyledTd width="41%" height={56} borderBottomRightRadius={12}>
            <Text fontType="p2" color={color.maruDefault}>
              1
            </Text>
          </StyledTd>
        </Row>
      </Table>
    </StyleInformationLocation>
  );
};

export default InformationLocation;

const StyleInformationLocation = styled.div`
  width: 100%;
`;

const Table = styled.div`
  width: 100%;
`;

const StyledTh = styled(Th)`
  width: 100%;
`;

const StyledTd = styled(Td)`
  width: 100%;
`;
