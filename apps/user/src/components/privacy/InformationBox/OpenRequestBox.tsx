import { Box } from '@maru/ui';
import { Text } from '@maru/ui';
import { color } from '@maru/design-token';

const OpenRequestBox = () => {
  return (
    <Box>
      <Text fontType="p3" color={color.gray900}>
        제 17조(열람 등의 요청)
        <br />① 정보주체는 학교의 장에 대하여 영상정보의 존재확인 및 열람‧삭제를 요청할 수
        있다.
        <br />② 제1항의 요청과 관련한 정보주체의 권리행사 및 불복수단에 관한 내용‧절차 및
        방법은 ⌜공공 기관의 정보공개에 관한 법률⌟ 을 준용한다.
        <br />③ 제2항의 규정에도 불구하고 다음 각 호에 해당하는 경우에는 학교의 장은
        개인영상정보 열람 등 요구를 거부할 수 있다. 이 경우 학교의 장은 10일 이내에 서면
        등으로 <br />
        거부 사유 및 불복 방법을 정보주체에게 통지하여야 한다.
        <br />
        <Text fontType="p3" color={color.maruDefault}>
          1. 범죄수사‧공소유지‧재판수행에 중대한 지장을 초래하는 경우
          <br />
          2. 개인영상정보의 보관기간이 경과하여 파기한 경우
          <br />
          3. 기타 정보주체의 열람 등 요구를 거부할 만한 정당한 사유가 존재하는 경우.
        </Text>
      </Text>
    </Box>
  );
};

export default OpenRequestBox;
