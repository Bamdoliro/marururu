import { Text, Row, Column } from '@maru/ui';
import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';

const 제12조 = () => {
  return (
    <>
      <Column gap={6}>
        <Row gap={3} alignItems="center">
          <IconTerms />
          <Text fontType="H4" color={color.gray900}>
            제12조 (개인정보처리방침 변경)
          </Text>
        </Row>
        <Text fontType="p3" color={color.gray900}>
          이 개인정보처리방침은
          <Text fontType="p3" color={color.maruDefault}>
            &nbsp;2023/03/01
          </Text>
          부터 적용됩니다. 이전의 개인정보처리방침은 아래에서 확인하실 수 있습니다.
          <br /> -
          <Text fontType="p3" color={color.maruDefault}>
            &nbsp;우리학교 홈페이지 {'>'} 정보공개 {'>'} 개인정보처리방침{'>'}
            「개인정보처리방침 이력」
            <br />
            &nbsp;&nbsp;(위 링크를 클릭 시, 이전 적용지침을 탑재한 게시판으로 이동할 수
            있도록 링크 적용)
          </Text>
        </Text>
      </Column>
    </>
  );
};

export default 제12조;
