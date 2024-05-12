import { Row, Td, Th } from '@maru/ui';
import styled from 'styled-components';

const FilmingCameraTime = () => {
  return (
    <StyledFilmingCameraTime>
      <Table>
        <Row alignItems="center">
          <Th borderTopLeftRadius={12} width="calc(100% / 8)" height={56}>
            촬영장소
          </Th>
          <Th width="calc(100% / 3)" height={56}>
            보관기간
          </Th>
          <Th borderTopRightRadius={12} width="calc(100% / 3)" height={56}>
            보관장소
          </Th>
        </Row>
        <Row alignItems="center">
          <Td borderBottomLeftRadius={12} width="calc(100% / 8)" height={56}>
            24시간
          </Td>
          <Td width="calc(100% / 3)" height={56}>
            촬영일로부터 30일
          </Td>
          <Td borderBottomRightRadius={12} width="calc(100% / 3)" height={56}>
            경비실, 전산실
          </Td>
        </Row>
      </Table>
    </StyledFilmingCameraTime>
  );
};

export default FilmingCameraTime;

const StyledFilmingCameraTime = styled.div`
  width: 100%;
`;

const Table = styled.div`
  width: 100%;
`;
