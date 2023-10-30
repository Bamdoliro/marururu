import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import type { CSSProperties } from 'react';
import styled from 'styled-components';

const FinalFormTable = () => {
  return (
    <StyledFinalFormTable>
      <Tr>
        <Th style={{ borderTopLeftRadius: '12px' }} width={120}>
          지원 구분
        </Th>
        <Th style={{ borderTopRightRadius: '12px' }} width={696}>
          제출 서류
        </Th>
      </Tr>
      <Tr>
        <Td width={120}>공동 제출</Td>
        <Td
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px 16px',
          }}
          width={696}
        >
          <div>
            <li>
              입학 원서 1부
              <br />
              (3개월 이내 증명사진 스캔 후 입력, 인터넷 접수 후 출력하여 출신 중학교장
              직인 날인 후 스캔본을 제출)
            </li>
            <li>자기소개서 및 학업계획서 1부 (인터넷 접수 후 출력하여 스캔본을 제출)</li>
            <li>
              학교생활기록부 사본 1부 (원본대조필, 학교장 직인 날인 후 스캔본을 제출)
            </li>
            <li>개인정보활용 및 금연 동의서 1부 (날인 후 스캔본을 제출)</li>
          </div>
        </Td>
      </Tr>
      <Tr>
        <Td style={{ borderBottomLeftRadius: '12px' }} width={120}>
          해당자
        </Td>
        <Td
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px 16px',
            borderBottomRightRadius: '12px',
          }}
          width={696}
        >
          <li>검정고시 합격증 사본 및 성적증명서 (점정고시 합격자에 한함)</li>
          <li>주민등록등본 1부 (검정고시 합격자, 사회통합전형에 한함)</li>
          <li>가족관계증명서 1부 (사회통합전형에 한함)</li>
          <li>
            학교장 추천서 (인터넷 접수 후 출력하여 작성자 담임 날인 후 스캔본을 제출)
          </li>
          <li>자격증 사본 1부 (원본대조필, 스캔본을 제출)</li>
        </Td>
      </Tr>
    </StyledFinalFormTable>
  );
};

export default FinalFormTable;

const StyledFinalFormTable = styled.table`
  width: 816px;
  border-radius: 12px;
`;

const Tr = styled.tr`
  ${flex({ alignItems: 'center' })}
`;

const Th = styled.th<{ width: CSSProperties['width'] }>`
  ${font.context}
  color: ${color.gray900};
  ${flex({ justifyContent: 'center', alignItems: 'center' })}
  width: ${(props) => props.width};
  height: 56px;
  background-color: ${color.gray50};
  border: 1px solid ${color.gray300};
`;

const Td = styled.td<{ width: CSSProperties['width'] }>`
  ${font.p2}
  color: ${color.gray900};
  ${flex({ justifyContent: 'center', alignItems: 'center' })}
  width: ${(props) => props.width};
  height: 200px;
  background-color: ${color.white};
  border: 1px solid ${color.gray300};
`;
