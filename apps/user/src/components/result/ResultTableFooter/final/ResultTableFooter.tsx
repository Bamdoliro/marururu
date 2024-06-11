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

  return isPassed === true && option === 'FINAL' ? (
    <Column gap={24} alignItems="center">
      <Text fontType="p2" color={color.gray900} textAlign="center">
        당신의 합격을 진심으로 축하드립니다!
        <br /> 당신의 밝은 미래를 응원하며,
        <br /> 앞으로 우리의 여정에 당신과 함께할 수 있어 영광입니다.
      </Text>
      <Row gap={16} alignItems="center" style={{ padding: '10%' }}>
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
