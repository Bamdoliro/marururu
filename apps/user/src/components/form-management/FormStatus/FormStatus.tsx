import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { color } from '@maru/design-token';
import { Column, Row, Text } from '@maru/ui';
import { IconCancelCircle, IconCheckCircle, IconGrayCircle } from '@maru/icon';
import { useUser } from '@/hooks';
import dayjs from 'dayjs';
import { 일차_합격_발표, 최종_합격_발표 } from '@/constants/form/constant';
import NotAlreadyResult from '../NotAlreadyResult/NotAlreadyResult';

interface Props {
  status?: string | undefined;
}

const FormStatus = ({ status }: Props) => {
  const { userData } = useUser();
  const now = dayjs();

  const getFormStatus = () => {
    switch (status) {
      case 'RECEIVED':
        return (
          <StyledApplicationBox>
            <Row alignItems="top" gap={169}>
              <Column gap={8}>
                <Text fontType="p1" color={color.gray600}>
                  원서 상태
                </Text>
                <Text fontType="H1" color={color.gray900}>
                  승인됨
                </Text>
              </Column>
              <IconCheckCircle width={120} height={120} />
            </Row>
            <Column height={64}> </Column>
            <Text fontType="p2" color={color.gray600}>
              원서가 승인되었습니다.
              <br />
              {userData.name}님의 1차 합격을 기원합니다!
            </Text>
          </StyledApplicationBox>
        );
      case 'FIRST_FAILED':
        if (now.isAfter(일차_합격_발표)) {
          return (
            <StyledApplicationBox>
              <Row alignItems="top" gap={112}>
                <Column gap={8}>
                  <Text fontType="p1" color={color.gray600}>
                    원서 상태
                  </Text>
                  <Text fontType="H1" color={color.gray900}>
                    1차 불합격
                  </Text>
                </Column>
                <IconCancelCircle width={120} height={120} />
              </Row>
              <Column height={64}> </Column>
              <Text fontType="p2" color={color.gray600}>
                1차 전형에서 불합격하셨습니다.
                <br />
                관심을 가지고 지원해 주셔서 감사합니다.
              </Text>
            </StyledApplicationBox>
          );
        }
        return <NotAlreadyResult result="1차" />;
      case 'FAILED':
        if (now.isAfter(최종_합격_발표)) {
          return (
            <StyledApplicationBox>
              <Row alignItems="top" gap={112}>
                <Column gap={8}>
                  <Text fontType="p1" color={color.gray600}>
                    원서 상태
                  </Text>
                  <Text fontType="H1" color={color.gray900}>
                    최종 불합격
                  </Text>
                </Column>
                <IconCancelCircle width={120} height={120} />
              </Row>
              <Column height={64}> </Column>
              <Text fontType="p2" color={color.gray600}>
                최종 전형에서 불합격하셨습니다.
                <br />
                관심을 가지고 지원해 주셔서 감사합니다.
              </Text>
            </StyledApplicationBox>
          );
        }
        return <NotAlreadyResult result="최종" />;
      case 'FINAL_SUBMITTED':
        return (
          <StyledApplicationBox>
            <Row alignItems="top" gap={102}>
              <Column gap={8}>
                <Text fontType="p1" color={color.gray600}>
                  원서 상태
                </Text>
                <Text fontType="H1" color={color.gray900}>
                  최종 제출됨
                </Text>
              </Column>
              <IconCheckCircle width={120} height={120} />
            </Row>
            <Column height={64}> </Column>
            <Text fontType="p2" color={color.gray600}>
              원서가 최종제출되었습니다.
              <br />
              담당 선생님의 원서 승인을 기다려주세요.
            </Text>
          </StyledApplicationBox>
        );
      case 'SUBMITTED':
        return (
          <StyledApplicationBox>
            <Row alignItems="top" gap={102}>
              <Column gap={8}>
                <Text fontType="p1" color={color.gray600}>
                  원서 상태
                </Text>
                <Text fontType="H1" color={color.gray900}>
                  초안 제출됨
                </Text>
              </Column>
              <IconCheckCircle width={120} height={120} />
            </Row>
            <Column height={64}> </Column>
            <Text fontType="p2" color={color.gray600}>
              원서가 초안제출되었습니다.
              <br />
              최종제출까지 해주시길 바랍니다.
            </Text>
          </StyledApplicationBox>
        );
      case 'APPROVED':
        return (
          <StyledApplicationBox>
            <Row alignItems="top" gap={169}>
              <Column gap={8}>
                <Text fontType="p1" color={color.gray600}>
                  원서 상태
                </Text>
                <Text fontType="H1" color={color.gray900}>
                  확인중
                </Text>
              </Column>
              <IconCheckCircle width={120} height={120} />
            </Row>
            <Column height={64}> </Column>
            <Text fontType="p2" color={color.gray600}>
              원서가 확인 중입니다.
              <br />
              담당 선생님의 원서 승인을 기다려주세요.
            </Text>
          </StyledApplicationBox>
        );
      case 'NO_SHOW':
        if (now.isAfter(최종_합격_발표)) {
          return (
            <StyledApplicationBox>
              <Row alignItems="top" gap={200}>
                <Column gap={8}>
                  <Text fontType="p1" color={color.gray600}>
                    원서 상태
                  </Text>
                  <Text fontType="H1" color={color.gray900}>
                    불참
                  </Text>
                </Column>
                <IconCancelCircle width={120} height={120} />
              </Row>
              <Column height={64}> </Column>
              <Text fontType="p2" color={color.gray600}>
                2차 전형에 참여하지 않으셨기에
                <br />
                자동 불합격 처리되셨습니다.
              </Text>
            </StyledApplicationBox>
          );
        }
        return <NotAlreadyResult result="최종" />;
      case 'FIRST_PASSED':
        if (now.isAfter(일차_합격_발표)) {
          return (
            <StyledApplicationBox>
              <Row alignItems="top" gap={150}>
                <Column gap={8}>
                  <Text fontType="p1" color={color.gray600}>
                    원서 상태
                  </Text>
                  <Text fontType="H1" color={color.gray900}>
                    1차 합격
                  </Text>
                </Column>
                <IconCheckCircle width={120} height={120} />
              </Row>
              <Text fontType="p2" color={color.gray600}>
                1차 합격하셨습니댜.
                <br />
                남은 전형도 힘내시길 바랍니다.
              </Text>
            </StyledApplicationBox>
          );
        }
        return <NotAlreadyResult result="1차" />;
      case 'PASSED':
        if (now.isAfter(최종_합격_발표)) {
          return (
            <StyledApplicationBox>
              <Row alignItems="top" gap={140}>
                <Column gap={8}>
                  <Text fontType="p1" color={color.gray600}>
                    원서 상태
                  </Text>
                  <Text fontType="H1" color={color.gray900}>
                    최종합격
                  </Text>
                </Column>
                <IconCheckCircle width={120} height={120} />
              </Row>
              <Text fontType="p2" color={color.gray600}>
                최종 합격하셨습니댜.
                <br />
                위대한 여정의 시작을 축하드립니다.
              </Text>
            </StyledApplicationBox>
          );
        }
        return <NotAlreadyResult result="최종" />;
      case 'REJECTED':
        return (
          <StyledApplicationBox>
            <Row alignItems="top" gap={169}>
              <Column gap={8}>
                <Text fontType="p1" color={color.gray600}>
                  원서 상태
                </Text>
                <Text fontType="H1" color={color.gray900}>
                  반려됨
                </Text>
              </Column>
              <IconCancelCircle width={120} height={120} />
            </Row>
            <Text fontType="p3" color={color.gray600}>
              원서가 반려되었습니다.
              <br />
              제출하신 원서를 다시 확인해주시기 바랍니다.
              <br />
              궁금하신 사항은 교무실에 문의해주시기 바랍니다.
            </Text>
          </StyledApplicationBox>
        );
      default:
        return (
          <StyledApplicationBox>
            <Row alignItems="top" gap={169}>
              <Column gap={8}>
                <Text fontType="p1" color={color.gray600}>
                  원서 상태
                </Text>
                <Text fontType="H1" color={color.gray900}>
                  제출전
                </Text>
              </Column>
              <IconGrayCircle width={120} height={120} />
            </Row>
          </StyledApplicationBox>
        );
    }
  };

  return getFormStatus();
};

export default FormStatus;

const StyledApplicationBox = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  width: 450px;
  height: 260px;
  padding: 36px 32px;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  border-radius: 12px;
  cursor: pointer;
`;
