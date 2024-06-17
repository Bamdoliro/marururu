import { Column, Row, Td, Th } from '@maru/ui';

const SecondRoundPassedDetail = () => {
  return (
    <Column>
      <Row>
        <Th width={200} height={56} borderTopLeftRadius={12}>
          전형
        </Th>
        <Th width={240} height={56}>
          유형
        </Th>
        <Th width={240} height={56}>
          구분
        </Th>
        <Th width={80} height={56}>
          최고점
        </Th>
        <Th width={80} height={56} borderTopRightRadius={12}>
          최하점
        </Th>
      </Row>
      <Row>
        <Td width={200} height={56}>
          일반전형
        </Td>
        <Td width={240} height={56}>
          <div></div>
        </Td>
        <Td width={240} height={56}>
          <div></div>
        </Td>
        <Td width={80} height={56}>
          <div>숫자</div>
        </Td>
        <Td width={80} height={56}>
          <div>숫자</div>
        </Td>
      </Row>
      <Row>
        <Td width={200} height={560}>
          특별전형
        </Td>
        <Column>
          <Row>
            <Td width={240} height={56}>
              마이스터 인재 전형
            </Td>
            <Td width={240} height={56}>
              <div></div>
            </Td>
            <Td width={80} height={56}>
              <div></div>
            </Td>
            <Td width={80} height={56}>
              <div></div>
            </Td>
          </Row>
          <Row>
            <Td width={240} height={280}>
              기호균등 전형
            </Td>
            <Column>
              <Row>
                <Td width={240} height={56}>
                  국민기초생활수급자
                </Td>
                <Td width={80} height={56}>
                  <div></div>
                </Td>
                <Td width={80} height={56}>
                  <div></div>
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  차상위계층
                </Td>
                <Td width={80} height={56}>
                  <div></div>
                </Td>
                <Td width={80} height={56}>
                  <div></div>
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  국가보훈대상자 (국가유공자)
                </Td>
                <Td width={80} height={56}>
                  <div></div>
                </Td>
                <Td width={80} height={56}>
                  <div></div>
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  한부모가정보호대상자
                </Td>
                <Td width={80} height={56}>
                  <div></div>
                </Td>
                <Td width={80} height={56}>
                  <div></div>
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  북한이탈주민 또는 그 자녀
                </Td>
                <Td width={80} height={56}>
                  <div></div>
                </Td>
                <Td width={80} height={56}>
                  <div></div>
                </Td>
              </Row>
            </Column>
          </Row>
          <Row>
            <Td width={240} height={224}>
              사회다양성 전형
            </Td>
            <Column>
              <Row>
                <Td width={240} height={56}>
                  다문화가정 자녀
                </Td>
                <Td width={80} height={56}>
                  <div></div>
                </Td>
                <Td width={80} height={56}>
                  <div></div>
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  소년 · 소녀가장
                </Td>
                <Td width={80} height={56}>
                  <div></div>
                </Td>
                <Td width={80} height={56}>
                  <div></div>
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  다자녀 가정 자녀
                </Td>
                <Td width={80} height={56}>
                  <div></div>
                </Td>
                <Td width={80} height={56}>
                  <div></div>
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  농어촌지역출신자
                </Td>
                <Td width={80} height={56}>
                  <div></div>
                </Td>
                <Td width={80} height={56}>
                  <div></div>
                </Td>
              </Row>
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Td width={200} height={112} borderBottomLeftRadius={12}>
          정원 외 전형
        </Td>
        <Column>
          <Row>
            <Td width={240} height={56}>
              국가보훈대상자 중 교육지원대상자
            </Td>
            <Td width={240} height={56}>
              <div></div>
            </Td>
            <Td width={80} height={56}>
              <div></div>
            </Td>
            <Td width={80} height={56}>
              <div></div>
            </Td>
          </Row>
          <Row>
            <Td width={240} height={56}>
              특례입학 대상자
            </Td>
            <Td width={240} height={56}>
              <div></div>
            </Td>
            <Td width={80} height={56}>
              <div></div>
            </Td>
            <Td width={80} height={56} borderBottomRightRadius={12}>
              <div></div>
            </Td>
          </Row>
        </Column>
      </Row>
    </Column>
  );
};

export default SecondRoundPassedDetail;
