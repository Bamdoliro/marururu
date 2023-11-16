import { useFormListQuery } from '@/services/form/queries';
import { color } from '@maru/design-token';
import { Button, Column, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { useOverlay } from '@toss/use-overlay';
import styled from 'styled-components';
import FinalScoreConfirm from '../ChangeFinalScoreModal/ChangeFinalScoreModal';

interface Props {
  id: number;
}

const FormStatus = ({ id }: Props) => {
  const { data: formList } = useFormListQuery();

  const formDetailData = formList?.filter((form) => form.id === Number(id))[0];

  const getStatusColor = (status: boolean | null) => {
    return typeof status !== 'boolean'
      ? color.gray600
      : status
      ? color.maruDefault
      : color.red;
  };

  const getStatusString = (
    status: boolean | null,
    trueString: string,
    falseString: string
  ) => {
    return typeof status !== 'boolean' ? '미정' : status ? trueString : falseString;
  };

  const overlay = useOverlay();

  const openFinalScoreConfirm = () => {
    overlay.open(({ isOpen, close }) => (
      <FinalScoreConfirm id={id} isOpen={isOpen} onClose={close} />
    ));
  };

  return (
    <StyledFormStatus>
      <FormStatusBox>
        <Row gap={100} style={{ padding: '0 24px' }}>
          <Text fontType="p2" color={color.gray900} width={60}>
            제출 서류
          </Text>
          {formDetailData ? (
            <Text fontType="p2" color={getStatusColor(formDetailData.hasDocument)}>
              {getStatusString(formDetailData.hasDocument, '제출', '미제출')}
            </Text>
          ) : null}
        </Row>
        <Line />
        <Row gap={100} style={{ padding: '0 24px' }}>
          <Text fontType="p2" color={color.gray900} width={60}>
            1차 결과
          </Text>
          {formDetailData ? (
            <Text fontType="p2" color={getStatusColor(formDetailData.firstRoundPassed)}>
              {getStatusString(formDetailData.firstRoundPassed, '합격', '불합격')}
            </Text>
          ) : null}
        </Row>
        <Line />
        <Row gap={100} style={{ padding: '0 24px' }}>
          <Text fontType="p2" color={color.gray900} width={60}>
            최종 점수
          </Text>
          <Text
            fontType="p2"
            width={80}
            color={
              typeof formDetailData?.totalScore !== 'number'
                ? color.gray600
                : color.gray900
            }
          >
            {typeof formDetailData?.totalScore !== 'number'
              ? '미정'
              : formDetailData?.totalScore}
          </Text>
        </Row>
        <Line />
        <Row gap={100} style={{ padding: '0 24px' }}>
          <Text fontType="p2" color={color.gray900} width={60}>
            2차 결과
          </Text>
          {formDetailData ? (
            <Text fontType="p2" color={getStatusColor(formDetailData.secondRoundPassed)}>
              {getStatusString(formDetailData.secondRoundPassed, '합격', '불합격')}
            </Text>
          ) : null}
        </Row>
      </FormStatusBox>
      <Column gap={8}>
        <Button size="SMALL" onClick={openFinalScoreConfirm}>
          최종 접수 상태 변경하기
        </Button>
        <Button size="SMALL" styleType="SECONDARY">
          제출 서류 조회하기
        </Button>
      </Column>
    </StyledFormStatus>
  );
};

export default FormStatus;

const StyledFormStatus = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 16px;
  width: 280px;
`;

const FormStatusBox = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 12px;
  padding: 16px 0;
  border-radius: 12px;
  border: 1px solid ${color.gray200};
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${color.gray200};
`;
