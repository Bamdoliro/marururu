import { color } from '@maru/design-token';
import { Column, Row, Td, Text } from '@maru/ui';
import styled from 'styled-components';

const FilmingDay = () => {
  return (
    <StyleFilmingDay>
      <Table>
        <Row alignItems="top">
          <Column width="42%">
            <Td width="100%" height={56} borderTopLeftRadius={12}>
              <Text fontType="p3" color={color.gray900}>
                평일
              </Text>
            </Td>
            <Row alignItems="center">
              <Td width="50%" height={56}>
                <Text fontType="p3" color={color.gray900}>
                  주간 (08:30~16:30)
                </Text>
              </Td>
              <Td width="50%" height={56}>
                <Text fontType="p3" color={color.gray900}>
                  야간
                </Text>
              </Td>
            </Row>
          </Column>
          <Td width="20%" height={112}>
            <Text fontType="p3" color={color.gray900}>
              입소일
            </Text>
          </Td>
          <Td width="20%" height={112} borderTopRightRadius={12}>
            <Text fontType="p3" color={color.gray900}>
              토∙일, 공휴일, 휴무일
            </Text>
          </Td>
        </Row>
        <Row alignItems="center">
          <Td width="21%" height={56} borderBottomLeftRadius={12}>
            <Text fontType="p3" color={color.gray900}>
              교감, 학생자치부장
            </Text>
          </Td>
          <Td width="21%" height={56}>
            <Text fontType="p3" color={color.gray900}>
              사감, 경비원
            </Text>
          </Td>
          <Td width="20%" height={56}>
            <Text fontType="p3" color={color.gray900}>
              사감
            </Text>
          </Td>
          <Td width="20%" height={56} borderBottomRightRadius={12}>
            <Text fontType="p3" color={color.gray900}>
              경비원
            </Text>
          </Td>
        </Row>
      </Table>
    </StyleFilmingDay>
  );
};

export default FilmingDay;

const StyleFilmingDay = styled.div`
  width: 100%;
`;

const Table = styled.div`
  width: 100%;
`;
