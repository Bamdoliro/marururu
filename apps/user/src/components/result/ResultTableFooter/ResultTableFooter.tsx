import { useUser } from '@/hooks';
import type { ResultOption } from '@/types/result/client';
import { color } from '@maru/theme';
import { Button, Column, Row, Text } from '@maru/ui';
import { useCTAButton } from './ResultTableFooter.hooks';

interface Props {
  option: ResultOption;
  isPassed: boolean;
}

const ResultTableFooter = ({ option, isPassed }: Props) => {
  const { handleMoveMainPage } = useCTAButton();
  const { userData } = useUser();

  return isPassed ? (
    <Column gap={64} alignItems="center">
      <Column gap={24}>
        {option === 'FIRST' ? (
          <Text fontType="p2" color={color.gray900} textAlign="center">
            {userData.name} 님, 1차 합격을 축하드립니다!
            <br /> 2단계 전형 응시를 위해 수험표를 출력하고 10월 27일에 본교에
            방문해주시기 바랍니다.
            <br /> 자세한 내용은 입학 요강에서 확인해주시기 바랍니다.
          </Text>
        ) : (
          <Text fontType="p2" color={color.gray900} textAlign="center">
            {userData.name} 님, 최종 합격을 축하드립니다!
            <br /> 예비소집일에 대해서는 추후 별도 안내될 예정입니다.
            <br /> 자세한 내용은 입학 요강에서 확인해주시기 바랍니다.
          </Text>
        )}
        <Text fontType="btn2" color={color.gray500}>
          입학 요강 다운로드
        </Text>
      </Column>
      {option === 'FIRST' ? (
        <Row gap={16} alignItems="center">
          <Button size="LARGE">수험표 출력하기</Button>
          <Button onClick={handleMoveMainPage} option="SECONDARY" size="LARGE">
            홈으로 돌아가기
          </Button>
        </Row>
      ) : (
        <Button onClick={handleMoveMainPage} size="LARGE">
          홈으로 돌아가기
        </Button>
      )}
    </Column>
  ) : (
    <Button onClick={handleMoveMainPage} size="LARGE">
      홈으로 돌아가기
    </Button>
  );
};

export default ResultTableFooter;
