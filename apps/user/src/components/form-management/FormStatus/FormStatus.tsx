import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { color } from '@maru/design-token';
import { Column, Row, Text } from '@maru/ui';
import { IconCancelCircle, IconCheckCircle } from '@maru/icon';
import { useUser } from '@/hooks';

interface Props {
  status?: string | undefined;
}

const FormStatus = ({ status }: Props) => {
  const { userData } = useUser();

  const getFormStatus = () => {
    switch (status) {
      case 'FINAL_SUBMITTED':
        return (
          <StyledApplicationBox>
            <Column gap={32}>
              <Row>
                <Column gap={4}>
                  <Text fontType="p1" color={color.gray600}>
                    원서 상태
                  </Text>
                  <Text fontType="H1" color={color.gray900}>
                    제출됨
                  </Text>
                </Column>
                <MoveIcon>
                  <IconCheckCircle width={120} height={120} />
                </MoveIcon>
              </Row>
              <Text fontType="p2" color={color.gray600}>
                원서가 최종제출되었습니다. <br />
                담당선생님의 원서 승인을 기다려주세요.
              </Text>
            </Column>
          </StyledApplicationBox>
        );
      case 'APPROVED':
        return (
          <StyledApplicationBox>
            <Column gap={32}>
              <Row>
                <Column gap={4}>
                  <Text fontType="p1" color={color.gray600}>
                    원서 상태
                  </Text>
                  <Text fontType="H1" color={color.gray900}>
                    승인됨
                  </Text>
                </Column>
                <MoveIcon>
                  <IconCheckCircle width={120} height={120} />
                </MoveIcon>
              </Row>
              <Text fontType="p2" color={color.gray600}>
                원서가 승인되었습니다. <br />
                {userData.name}님의 1차 합격을 기원합니다!
              </Text>
            </Column>
          </StyledApplicationBox>
        );
      case 'REJECTED':
        return (
          <StyledApplicationBox>
            <Column>
              <Row>
                <Column gap={4}>
                  <Text fontType="p1" color={color.gray600}>
                    원서 상태
                  </Text>
                  <Text fontType="H1" color={color.gray900}>
                    반려됨
                  </Text>
                </Column>
                <MoveIcon>
                  <IconCancelCircle width={120} height={120} />
                </MoveIcon>
              </Row>
              <Text fontType="p2" color={color.gray600}>
                원서가 반려되었습니다. <br />
                제출하신 원서를 다시 확인해주시기 바랍니다. <br />
                궁금하신 사항은 교무실에 문의해주시기 바랍니다.
              </Text>
            </Column>
          </StyledApplicationBox>
        );
      case 'RECEIVED':
        return (
          <StyledApplicationBox>
            <Column>
              <Column gap={4}>
                <Text fontType="p1" color={color.gray600}>
                  원서 상태
                </Text>
                <Text fontType="H1" color={color.gray900}>
                  접수됨
                </Text>
              </Column>
              <Text fontType="p2" color={color.gray600}>
                원서가 접수되었습니다. <br />
                원서 승인을 기다려주세요.
              </Text>
            </Column>
          </StyledApplicationBox>
        );
      case 'FIRST_FAILED':
        return (
          <StyledApplicationBox>
            <Column>
              <Column gap={4}>
                <Text fontType="p1" color={color.gray600}>
                  원서 상태
                </Text>
                <Text fontType="H1" color={color.gray900}>
                  1차 불합격
                </Text>
              </Column>
              <Text fontType="p2" color={color.gray600}>
                1차 전형에서 불합격하셨습니다. <br />
                관심을 가지고 지원해 주셔서 감사합니다.
              </Text>
            </Column>
          </StyledApplicationBox>
        );
      case 'FAILED':
        return (
          <StyledApplicationBox>
            <Column>
              <Column gap={4}>
                <Text fontType="p1" color={color.gray600}>
                  원서 상태
                </Text>
                <Text fontType="H1" color={color.gray900}>
                  최종 불합격
                </Text>
              </Column>
              <Text fontType="p2" color={color.gray600}>
                2차 전형에서 불합격하셨습니다. <br />
                관심을 가지고 지원해 주셔서 감사합니다.
              </Text>
            </Column>
          </StyledApplicationBox>
        );
      case 'SUBMITTED':
        return (
          <StyledApplicationBox>
            <Column gap={32}>
              <Row>
                <Column gap={4}>
                  <Text fontType="p1" color={color.gray600}>
                    원서 상태
                  </Text>
                  <Text fontType="H1" color={color.gray900}>
                    제출됨
                  </Text>
                </Column>
                <MoveIcon>
                  <IconCheckCircle width={120} height={120} />
                </MoveIcon>
              </Row>
              <Text fontType="p2" color={color.gray600}>
                원서가 초안제출되었습니다. <br />
                담당선생님의 원서 승인을 기다려주세요.
              </Text>
            </Column>
          </StyledApplicationBox>
        );
      case 'NO_SHOW':
        return (
          <StyledApplicationBox>
            <Column>
              <Column gap={4}>
                <Text fontType="p1" color={color.gray600}>
                  원서 상태
                </Text>
                <Text fontType="H1" color={color.gray900}>
                  불참
                </Text>
              </Column>
              <Text fontType="p2" color={color.gray600}>
                2차 전형에 참여하지 않으셨기에 <br />
                자동으로 불합격 처리되셨습니다.
              </Text>
            </Column>
          </StyledApplicationBox>
        );
      case 'FIRST_PASSED':
        return (
          <StyledApplicationBox>
            <Column>
              <Column gap={4}>
                <Text fontType="p1" color={color.gray600}>
                  원서 상태
                </Text>
                <Text fontType="H1" color={color.gray900}>
                  1차 합격
                </Text>
              </Column>
              <Text fontType="p2" color={color.gray600}>
                1차 합격하셨습니다. <br />
                남은 전형도 힘내시길 바랍니다.
              </Text>
            </Column>
          </StyledApplicationBox>
        );
      case 'PASSED':
        return (
          <StyledApplicationBox>
            <Column>
              <Column gap={4}>
                <Text fontType="p1" color={color.gray600}>
                  원서 상태
                </Text>
                <Text fontType="H1" color={color.gray900}>
                  최종 합격
                </Text>
              </Column>
              <Text fontType="p2" color={color.gray600}>
                최종 합격하셨습니다. <br />
                위대한 여정의 시작을 축하드립니다.
              </Text>
            </Column>
          </StyledApplicationBox>
        );
      default:
        return (
          <StyledApplicationBox>
            <Column>
              <Column gap={4}>
                <Text fontType="p1" color={color.gray600}>
                  원서 상태
                </Text>
                <Text fontType="H1" color={color.gray900}>
                  제출 전
                </Text>
              </Column>
              <Text fontType="p2" color={color.gray600}>
                아직 원서 제출전 입니다.
              </Text>
            </Column>
          </StyledApplicationBox>
        );
    }
  };

  return getFormStatus();
};

export default FormStatus;

const StyledApplicationBox = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  width: 492px;
  height: 260px;
  padding: 36px 32px;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  border-radius: 12px;
  cursor: pointer;
`;

const MoveIcon = styled.div`
  padding-left: 52%;
  top: 32px;
`;
