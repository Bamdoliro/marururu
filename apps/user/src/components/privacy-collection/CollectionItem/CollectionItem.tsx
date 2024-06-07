import { styled } from 'styled-components';
import { Row, Th, Td } from '@maru/ui';

interface ColumnProps {
  width?: string;
}

const CollectionItem = () => {
  return (
    <StyledCollectionItem>
      <Table>
        <Row alignItems="center">
          <Th borderTopLeftRadius={12} width="calc(100% / 4.9)" height={56}>
            구분
          </Th>
          <Th borderTopRightRadius={12} width="calc(100% / 1.64)" height={56}>
            수집항목
          </Th>
        </Row>
        <Row alignItems="center">
          <Td width="calc(100% / 4.9)" height={112}>
            14세 미만
          </Td>
          <Column width="calc(100% / 1.64)">
            <Td width="100%" height={56}>
              필수 : 보호자이름, 가입자이름, 생년월일, 소속기관, 학년, 반, 14세미만
              법정대리인 인증정보
            </Td>
            <Td width="100%" height={56}>
              선택 : 이메일, 학생반 번호
            </Td>
          </Column>
        </Row>
        <Row alignItems="center">
          <Td width="calc(100% / 4.9)" height={112}>
            14세 이상
          </Td>
          <Column width="calc(100% / 1.64)">
            <Td width="100%" height={56}>
              필수 : 가입자이름, 생년월일, 소속기관, 학년, 반
            </Td>
            <Td width="100%" height={56}>
              선택 : 이메일, 학생반 번호
            </Td>
          </Column>
        </Row>
        <Row alignItems="center">
          <Td width="calc(100% / 4.9)" height={112}>
            교직원
          </Td>
          <Column width="calc(100% / 1.64)">
            <Td width="100%" height={56}>
              필수 : 가입자이름, 생년월일, 소속기관
            </Td>
            <Td width="100%" height={56}>
              선택 : 이메일, 학년, 반
            </Td>
          </Column>
        </Row>
        <Row alignItems="center">
          <Td width="calc(100% / 4.9)" height={112}>
            학부모
          </Td>
          <Column width="calc(100% / 1.64)">
            <Td width="100%" height={56}>
              필수 : 가입자이름, 생년월일, 소속기관
            </Td>
            <Td width="100%" height={56}>
              선택 : 이메일, 자녀정보(자녀명, 학년, 반, 생년월일)
            </Td>
          </Column>
        </Row>
        <Row alignItems="center">
          <Td width="calc(100% / 4.9)" height={112} borderBottomLeftRadius={12}>
            일반
          </Td>
          <Column width="calc(100% / 1.64)">
            <Td width="100%" height={56}>
              필수 : 가입자이름, 생년월일, 소속기관
            </Td>
            <Td width="100%" height={56} borderBottomRightRadius={12}>
              선택 : 이메일
            </Td>
          </Column>
        </Row>
      </Table>
    </StyledCollectionItem>
  );
};

export default CollectionItem;

const StyledCollectionItem = styled.div`
  width: 100%;
`;

const Table = styled.div`
  width: 100%;
`;

const Column = styled.div<ColumnProps>`
  width: ${(props) => props.width || '100%'};
`;
