import { color } from '@maru/design-token';
import { IconSignUpCheckFalse, IconSignUpCheckTrue } from '@maru/icon';
import { Row, Text } from '@maru/ui';

const renderCheckItem = (condition: boolean, text: string) => (
  <Row alignItems="center">
    {condition ? <IconSignUpCheckTrue /> : <IconSignUpCheckFalse />}
    <Text fontType="caption" color={condition ? color.maruDefault : color.gray400}>
      {text}
    </Text>
  </Row>
);

const Validate = (password: string) => (
  <Row gap={4}>
    {renderCheckItem(password.length >= 8 && password.length <= 20, '8자 이상 20자 이하')}
    {renderCheckItem(/[a-zA-Z]/.test(password), '영어')}
    {renderCheckItem(/\d/.test(password), '숫자')}
    {renderCheckItem(/[!@#$%&*?]/.test(password), '특수문자(!@#$%&*? 중에서만 입력)')}
  </Row>
);

export default Validate;
