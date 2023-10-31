import { useFormValueStore } from '@/store';
import { color } from '@maru/theme';
import { CheckBox, Column, Row, Td, Text, Th } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';
import { useInput } from './CertificateCaculator.hooks';

const CertificateCalculator = () => {
  const form = useFormValueStore();
  const { handleCertificateListChange } = useInput();

  return (
    <StyledCertificateCalculator>
      <Text fontType="p3" color={color.red}>
        *자격증을 중복 소지하고 있을 경우, 최고 수준의 자격증 1개만 인정함
      </Text>
      <Column>
        <Row>
          <Th borderTopLeftRadius={12} width={416} height={56}>
            자격증명
          </Th>
          <Th width={200} height={56}>
            시행기관
          </Th>
          <Th width={120} height={56}>
            반영점수
          </Th>
          <Th borderTopRightRadius={12} width={80} height={56}>
            선택
          </Th>
        </Row>
        <Column>
          <Row>
            <Td width={416} height={56}>
              정보처리기능사
            </Td>
            <Td width={200} height={56}>
              한국산업인력공단
            </Td>
            <Td width={120} height={56}>
              4점
            </Td>
            <Td width={80} height={56}>
              <CheckBox
                checked={form.grade.certificateList?.includes(
                  'CRAFTSMAN_INFORMATION_PROCESSING'
                )}
                value="CRAFTSMAN_INFORMATION_PROCESSING"
                onChange={handleCertificateListChange}
              />
            </Td>
          </Row>
          <Row>
            <Td width={416} height={56}>
              정보기기운용기능사
            </Td>
            <Td width={200} height={56}>
              한국산업인력공단
            </Td>
            <Td width={120} height={56}>
              4점
            </Td>
            <Td width={80} height={56}>
              <CheckBox
                checked={form.grade.certificateList?.includes(
                  'CRAFTSMAN_INFORMATION_EQUIPMENT_OPERATION'
                )}
                value="CRAFTSMAN_INFORMATION_EQUIPMENT_OPERATION"
                onChange={handleCertificateListChange}
              />
            </Td>
          </Row>
          <Row>
            <Td width={416} height={56}>
              전자계산기기능사
            </Td>
            <Td width={200} height={56}>
              한국산업인력공단
            </Td>
            <Td width={120} height={56}>
              4점
            </Td>
            <Td width={80} height={56}>
              <CheckBox
                checked={form.grade.certificateList?.includes('CRAFTSMAN_COMPUTER')}
                value="CRAFTSMAN_COMPUTER"
                onChange={handleCertificateListChange}
              />
            </Td>
          </Row>
          <Row>
            <Td borderBottomLeftRadius={12} width={416} height={168}>
              컴퓨터활용능력
            </Td>
            <Td width={200} height={168}>
              한국산업인력공단
            </Td>
            <Column>
              <Row>
                <Td width={120} height={56}>
                  1급(3점)
                </Td>
                <Td width={80} height={56}>
                  <CheckBox
                    checked={form.grade.certificateList?.includes(
                      'COMPUTER_SPECIALIST_LEVEL_1'
                    )}
                    value="COMPUTER_SPECIALIST_LEVEL_1"
                    onChange={handleCertificateListChange}
                  />
                </Td>
              </Row>
              <Row>
                <Td width={120} height={56}>
                  2급(2점)
                </Td>
                <Td width={80} height={56}>
                  <CheckBox
                    checked={form.grade.certificateList?.includes(
                      'COMPUTER_SPECIALIST_LEVEL_2'
                    )}
                    value="COMPUTER_SPECIALIST_LEVEL_2"
                    onChange={handleCertificateListChange}
                  />
                </Td>
              </Row>
              <Row>
                <Td width={120} height={56}>
                  3급(1점)
                </Td>
                <Td borderBottomRightRadius={12} width={80} height={56}>
                  <CheckBox
                    checked={form.grade.certificateList?.includes(
                      'COMPUTER_SPECIALIST_LEVEL_3'
                    )}
                    value="COMPUTER_SPECIALIST_LEVEL_3"
                    onChange={handleCertificateListChange}
                  />
                </Td>
              </Row>
            </Column>
          </Row>
        </Column>
      </Column>
    </StyledCertificateCalculator>
  );
};

export default CertificateCalculator;

const StyledCertificateCalculator = styled.div`
  ${flex({ flexDirection: 'column' })};
  gap: 16px;
  width: 100%;
`;
