import { color } from '@maru/design-token';
import { Row, Td, Th, Text } from '@maru/ui';
import { styled } from 'styled-components';

const DeviceType = () => {
  return (
    <StyleDeviceType>
      <Table>
        <Row alignItems="center">
          <Th height={56} width="25%" borderTopLeftRadius={12}>
            구분
          </Th>
          <Th height={56} width="57%" borderTopRightRadius={12}>
            영상정보의 안전성 확보조치
          </Th>
        </Row>
        <Row alignItems="center">
          <Td height={102} width="25%" borderBottomLeftRadius={12}>
            <Text fontType="p3" color={color.gray900}>
              녹화기 모니터
            </Text>
          </Td>
          <Td height={102} width="57%" borderBottomRightRadius={12}>
            <Text fontType="p3" color={color.gray900}>
              ∙ 책임관 운영담당자 실시간 모니터링 전담자로 접근권한 제한
              <br />∙ 영상정보 암호화 조치
              <br />∙ 별도 보관 시설 및 장비 잠금장치 설치
            </Text>
          </Td>
        </Row>
      </Table>
    </StyleDeviceType>
  );
};

export default DeviceType;

const StyleDeviceType = styled.div`
  width: 100%;
`;

const Table = styled.div`
  width: 100%;
`;
