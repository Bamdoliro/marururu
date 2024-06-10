import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { color } from '@maru/design-token';
import { Column, Row, Text } from '@maru/ui';
import { IconCheckCircle } from '@maru/icon';

const FormStatus = () => {
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
          신준서님의 1차 합격을 기원합니다!
        </Text>
      </Column>
    </StyledApplicationBox>
  );
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
