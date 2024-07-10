import { Text, Row, Column } from '@maru/ui';
import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import {
  CameraLocation,
  DeviceType,
  FilmingDay,
  InformationLocation,
  ManagerTable,
  OpenRequestBox,
  ProcessingRestrictionsBox,
} from '@/components/privacy';
import { styled } from 'styled-components';

const 제11조 = () => {
  return (
    <>
      <Column gap={6}>
        <Row gap={3} alignItems="center">
          <IconTerms />
          <Text fontType="H4" color={color.gray900}>
            제11조 (영상정보처리기기 설치‧운영)
          </Text>
        </Row>
        <TextBlock fontType="p3">
          ① 영상정보처리기기 설치 목적
          <br />
          <Indent>
            ∙ 교사 내∙외부에 CCTV를 설치하여 학교 및 기숙사 내 보안 및 화재∙도난방지,
            생활지도 등에 효율적인 대처를 목적으로 함.
            <br />
            ∙ 사감실, 당직실에서 CCTV를 통하여 교사(校舍) 밖을 관찰하고 녹화할 수 있어
            숙직자 업무 경감은 물론 야간 순찰에서 오는 위험을 사전에 차단할 목적임.
            <br />
            ∙ 따라서 본교는 개인정보보호법 제 25조 제1항에 따라 다음과 같은 목적으로
            CCTV를 설치·운영함.
            <br />
            <DoubleIndent>
              a. 시설물 안전 및 화재 예방
              <br />
              b. 각종 안전사고 예방
              <br />
              c. 학교폭력 예방
              <br />
              d. 물품 도난 및 파손 방지
            </DoubleIndent>
          </Indent>
          ② 영상정보처리기기시설 설치‧운영 담당부서, 책임관, 연락처
          <br />
          <Indent>
            ∙ 담당부서: 학생자치부
            <br />
            ∙ 책임관: 신용 (051-970-1720)
            <br />
            ∙ 운영담당자: 김규봉 (051-970-1771)
            <br />∙ 실시간 모니터링 전담자 (복수가능)
          </Indent>
        </TextBlock>
        <ManagerTable />
        <TextBlock fontType="p3">
          ③ 설치‧운영되는 영상정보처리기기 카메라 대수, 위치, 성능 및 촬영범위
        </TextBlock>
        <CameraLocation />
        <TextBlock fontType="p3">
          ④ 제7조 제1항에 따라 설치되는 안내판의 규격 및 부착장소
          <br />
          <Indent>
            ∙ 안내판 규격: 가로 35cm X 세로 25cm
            <br />∙ 부착장소
          </Indent>
        </TextBlock>
        <InformationLocation />
        <TextBlock fontType="p3">
          ⑤ 정보주체의 권리행사 및 불복수단에 관한 내용, 절차 및 방법
          <br />
          <Indent>∙ 학교 내 영상정보처리기기 설치, 운영 매뉴얼 제17조 따름</Indent>
        </TextBlock>
        <OpenRequestBox />
        <TextBlock fontType="p3">
          ⑥ 영상정보처리기기 촬영시간, 영상정보의 보유기간, 영상정보의 보관∙관리∙삭제
          방법, 영상정보의 보관 장소
          <br />
          <Indent>
            ∙ 영상정보처리기기 촬영시간 24시간
            <br />
            ∙ 영상정보의 보유기간 촬영일로부터 30일
            <br />
            ∙ 영상정보의 보관‧관리‧삭제의 방법 시스템의 저장 용량에 따라 30일의 보유 기간
            후에는 순차적으로 자동 삭제됨
            <br />∙ 영상정보의 보관 장소 별도의 저장매체 없이 녹화기 자체에 보관
          </Indent>
        </TextBlock>
        <TextBlock fontType="p3">
          ⑦ 영상정보처리기기에 의하여 전송되는 영상정보가 실제로 열람‧재생되는 장소 및
          출입통제 현황
          <br />
          <Indent>
            ∙ 열람·재생되는 장소 융합관 층 전산실 학생지도실 본관 보안실 사감실 기숙사
            <br />∙ 기숙사 출입통제 현황
          </Indent>
        </TextBlock>
        <DeviceType />
        <TextBlock fontType="p3">
          ⑧ 영상정보처리기기 실시간 모니터링 관련 사항(시간대별 전담 인력 지정 및 운용,
          통합관제센터 연계 포함)
          <br />
          <Indent>∙ 시간대별 실시간 모니터링 담당자 지정 및 운용</Indent>
        </TextBlock>
        <FilmingDay />
        <TextBlock fontType="p3">
          ⑨ 녹화된 영상정보를 제3자에게 제공하거나 열람‧재생하도록 할 수 있는 사유 와 그
          절차 및 방법
          <br />
          <Indent>∙ 학교 내 영상정보처리기기 설치∙운영 매뉴얼 제15조에 따름</Indent>
        </TextBlock>
        <ProcessingRestrictionsBox />
      </Column>
    </>
  );
};

export default 제11조;

const TextBlock = styled(Text).attrs({ fontType: 'p3', color: color.gray900 })`
  line-height: 1.5;
`;

const Indent = styled.div`
  margin-left: 10px;
`;

const DoubleIndent = styled.div`
  margin-left: 20px;
`;
