import type { ResultOption, ResultStep } from '@/types/result/client';
import { color } from '@maru/design-token';
import { Button, Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import type { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface Props {
  setResultStep: Dispatch<SetStateAction<ResultStep>>;
  option: ResultOption;
}

const ResultMain = ({ setResultStep, option }: Props) => {
  const resultInfoData =
    option === 'FIRST'
      ? {
          date: '2023년 10월 21일 (월) 15:00',
          capacity: '일반전형 및 특별전형 각각 모집정원의 130% 이내',
        }
      : {
          date: '2023년 10월 31일 (목) 15:00',
          capacity: '일반전형 36명, 특별전형 28명, 정원 외 전형 3명',
        };

  return (
    <StyledResultMain>
      <InfoBox>
        <Column>
          <Text fontType="p2" color={color.gray700}>
            일시: {resultInfoData.date}
          </Text>
          <Text fontType="p2" color={color.gray700}>
            모집 정원: {resultInfoData.capacity}
          </Text>
          <Text fontType="p2" color={color.gray700}>
            장소: 본교 입학전형 서비스 (마루)
          </Text>
        </Column>
      </InfoBox>
      <Button onClick={() => setResultStep('RESULT')} size="LARGE">
        결과 확인하기
      </Button>
    </StyledResultMain>
  );
};

export default ResultMain;

const StyledResultMain = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  gap: 48px;
`;

const InfoBox = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 12px;
  width: 600px;
  padding: 24px 36px;
  background-color: ${color.gray50};
`;
