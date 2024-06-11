import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { color } from '@maru/design-token';
import { Column, Row, Text } from '@maru/ui';
import { IconArrowOutward } from '@maru/icon';
import { useDownloadForm } from './CheckForm.hooks';

const CheckForm = () => {
  const { handlleDownloadFormButtonClick } = useDownloadForm();

  return (
    <StyledApplicationBox onClick={handlleDownloadFormButtonClick}>
      <Column gap={9}>
        <Row gap={4} alignItems="center">
          <Text fontType="H3" color={color.gray900}>
            내 원서 확인하기
          </Text>
          <IconArrowOutward width={36} height={36} color={color.maruDefault} />
        </Row>
        <Text fontType="p2" color={color.gray600}>
          클릭해서 원서를 다운로드 받으세요.
        </Text>
      </Column>
    </StyledApplicationBox>
  );
};

export default CheckForm;

const StyledApplicationBox = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  width: 492px;
  height: 125px;
  padding: 24px 32px;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  border-radius: 12px;
  cursor: pointer;
`;
