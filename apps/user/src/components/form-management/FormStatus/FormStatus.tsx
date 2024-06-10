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
      default:
        return <StyledApplicationBox></StyledApplicationBox>;
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
