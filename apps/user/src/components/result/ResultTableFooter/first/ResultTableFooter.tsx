import type { ResultOption } from '@/types/result/client';
import { color } from '@maru/design-token';
import { Button, Column, Row, Text } from '@maru/ui';
import { useCTAButton } from '../ResultTableFooter.hooks';

interface Props {
  option: ResultOption;
  isPassed: boolean;
}

const ResultTableFooter = ({ option, isPassed }: Props) => {
  const { handleMoveMainPage } = useCTAButton();

  const handleAdmissionsGuidelinesDownload = () =>
    window.open(
      'https://school.busanedu.net/viewer/doc.html?fn=f9ccabacf50aba9dbe108bdbccf244f34b1a4bf9118f8c63e034e9af8c30afc1&rs=/upload/temp/convertToHtml/202308/bssm-h/'
    );

  return isPassed === true && option === 'FIRST' ? (
    <Column gap={24} alignItems="center">
      <Text fontType="p2" color={color.gray900} textAlign="center">
        2단계 전형 응시를 위해 수험표를 출력하고 10월 27일에 본교에 방문해주시기 바랍니다.
        <br /> 자세한 내용은 입학 요강에서 확인해주시기 바랍니다.
      </Text>
      <Text fontType="btn2" color={color.gray500} textAlign="center">
        <a onClick={handleAdmissionsGuidelinesDownload}>입학 요강 다운로드</a>
      </Text>
      <Row gap={16} alignItems="center" style={{ padding: '10%' }}>
        <Button
          size="LARGE"
          style={{ backgroundColor: color.maruDefault, color: color.white }}
        >
          수험표 출력하기
        </Button>
        <Button onClick={handleMoveMainPage} styleType="SECONDARY" size="LARGE">
          홈으로 돌아가기
        </Button>
      </Row>
    </Column>
  ) : (
    <Column gap={50} alignItems="center">
      <Text fontType="p2" color={color.gray900} textAlign="center">
        학교에 지원해주신 당신의 열정과 노력에 진심으로 감사드립니다.
        <br /> 불합격이라는 결과는 멈추라는 것이 아닌 시작일 뿐입니다.
        <br /> 앞으로의 여정에서도 여러분의 도전과 성장을 응원하며, 더 나은 내일을 향해
        함께 걷도록 하겠습니다.
      </Text>
      <Row gap={10} alignItems="center" style={{ padding: '10%' }}>
        <Button
          onClick={handleMoveMainPage}
          styleType="SECONDARY"
          size="LARGE"
          style={{ backgroundColor: color.maruDefault, color: color.white }}
        >
          홈으로 돌아가기
        </Button>
      </Row>
    </Column>
  );
};

export default ResultTableFooter;
