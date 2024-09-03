import { color, font } from '@maru/design-token';
import { flex } from '@maru/utils';
import { Text } from '@maru/ui';
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
            padding: '0px 40px',
          }}
          width={696}
        >
          <ul>
            <li>입학 원서(원서 초안) 1부</li>
          </ul>
          <li>3개월 이내 증명사진 스캔 후 입력</li>
          <li>
            <Text fontType="form" color={color.red}>
              인터넷 접수(maru.bamdoliro.com) 후 출력하여 출신 중학교장 직인 날인 후 제출
            </Text>
          </li>
          <ul>
            <li>자기소개서 및 학업계획서 1부 ([서식2])</li>
          </ul>
          <li>인터넷 접수(마루도메인) 후 출력</li>
          <ul>
            <li>학교생활기록부 || 사본 1부 </li>
          </ul>
          <li>
            <Text fontType="form" color={color.red}>
              원조대조필
            </Text>
          </li>{' '}
          <li>
            <Text fontType="form" color={color.red}>
              학교장 직인 날인
            </Text>
          </li>
          <li>중졸 검정고시 합격자도 제출</li>
          <ul>
            <li>서약서 1부 ([서식3])</li>
          </ul>
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
            padding: '0px 40px',
            borderBottomRightRadius: '12px',
          }}
          width={696}
        >
          <ul>
            <li>
              검정고시 합격증명서 1부 및 검정고시 성적증명서 1부 (검정고시 합격자에 한함)
            </li>
          </ul>
          <li>정부24 홈페이지, 해당 교육청 및 교육지원청, 행정구청 발급</li>
          <ul>
            <li>주민등록등본 1부 (검정고시 합격자, 사회통합전형 대상자 등)</li>
            <li>자격증 사본 1부</li>
          </ul>
          <li>
            <Text fontType="form" color={color.red}>
              원본대조필
            </Text>
          </li>
          <li>인터넷 출력 시 자격증번호와 발급기관의 직인 필수</li>
          <ul>
            <li>학교장 추천서 ([서식4])</li>
          </ul>
          <li>인터넷 접수 후 출력</li>
          <li>특별전형에 한함</li>
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
  ${font.form}
  color: ${color.gray900};
  ${flex({ justifyContent: 'center', alignItems: 'center' })}
  width: ${(props) => props.width};
  height: 328px;
  background-color: ${color.white};
  border: 1px solid ${color.gray300};
`;
