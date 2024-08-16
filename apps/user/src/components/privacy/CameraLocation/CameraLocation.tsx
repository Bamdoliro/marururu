import { Column, Row, Td, Th } from '@maru/ui';
import styled from 'styled-components';

const CameraLocation = () => {
  return (
    <StyleCameraLocation>
      <Table>
        <Row alignItems="center">
          <StyledTh borderTopLeftRadius={12} width="14.28%" height={56}>
            시설물 명
          </StyledTh>
          <StyledTh width="20%" height={56}>
            위치
          </StyledTh>
          <StyledTh width="14.28%" height={56}>
            카메라 대수
          </StyledTh>
          <StyledTh width="13.16%" height={56}>
            성능
          </StyledTh>
          <StyledTh borderTopRightRadius={12} width="20%" height={56}>
            촬영범위
          </StyledTh>
        </Row>
        <Row alignItems="center">
          <StyledTd width="14.28%" height={280} borderBottomLeftRadius={12}>
            <CenteredContent>
              부산소프트웨어
              <br />
              마이스터고
              <br />
              (85대)
            </CenteredContent>
          </StyledTd>
          <StyledColumn width="20%">
            <StyledTd width="100%" height={56}>
              본관
            </StyledTd>
            <StyledTd width="100%" height={56}>
              융합관
            </StyledTd>
            <StyledTd width="100%" height={56}>
              SRC관 기숙사 B동
            </StyledTd>
            <StyledTd width="100%" height={56}>
              기숙사 A동
            </StyledTd>
            <StyledTd width="100%" height={56}>
              외부
            </StyledTd>
          </StyledColumn>
          <StyledColumn width="14.28%">
            <StyledTd width="100%" height={56}>
              13대
            </StyledTd>
            <StyledTd width="100%" height={56}>
              16대
            </StyledTd>
            <StyledTd width="100%" height={56}>
              21대
            </StyledTd>
            <StyledTd width="100%" height={56}>
              13대
            </StyledTd>
            <StyledTd width="100%" height={56}>
              20대
            </StyledTd>
          </StyledColumn>
          <StyledTd width="13.16%" height={280}>
            <CenteredContent>
              1080p
              <br />
              화소
            </CenteredContent>
          </StyledTd>
          <StyledTd width="20%" height={280} borderBottomRightRadius={12}>
            <CenteredContent>
              *CCTV 상세 현황
              <br />
              별도 첨부
            </CenteredContent>
          </StyledTd>
        </Row>
      </Table>
    </StyleCameraLocation>
  );
};

export default CameraLocation;

const StyleCameraLocation = styled.div`
  width: 100%;
`;

const Table = styled.div`
  width: 100%;
  border-collapse: collapse;
`;

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

const StyledColumn = styled(Column)`
  width: ${(props) => props.width || '100%'};
`;

const StyledTh = styled(Th)<{
  width: string;
  height?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
}>`
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
  border-top-left-radius: ${(props) =>
    props.borderTopLeftRadius ? `${props.borderTopLeftRadius}px` : '0'};
  border-top-right-radius: ${(props) =>
    props.borderTopRightRadius ? `${props.borderTopRightRadius}px` : '0'};
  background-color: #0066cc;
  color: #fff;
  text-align: center;
  border: 1px solid #ddd;
`;

const StyledTd = styled(Td)<{
  width: string;
  height?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
}>`
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
  border-bottom-left-radius: ${(props) =>
    props.borderBottomLeftRadius ? `${props.borderBottomLeftRadius}px` : '0'};
  border-bottom-right-radius: ${(props) =>
    props.borderBottomRightRadius ? `${props.borderBottomRightRadius}px` : '0'};
  border: 1px solid #ddd;
  text-align: center;
  vertical-align: middle;
  padding: 0;
`;
