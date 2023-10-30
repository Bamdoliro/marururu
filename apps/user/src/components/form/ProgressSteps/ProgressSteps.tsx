import { useFormStepValueStore } from '@/store';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import styled from 'styled-components';

const PROGRESS_BAR_DISPLAY_DATA = [
  '지원자 정보',
  '보호자 정보',
  '출신학교 및 학력',
  '전형 선택',
  '성적 입력',
  '자기소개서',
] as const;

const PROGRESS_BAR_DATA = [
  '지원자정보',
  '보호자정보',
  '출신학교및학력',
  '전형선택',
  '성적입력',
  '자기소개서',
] as const;

const ProgressSteps = () => {
  const formStep = useFormStepValueStore();

  return (
    <StyledProgressSteps>
      {PROGRESS_BAR_DISPLAY_DATA.map((item, index) => (
        <Circle
          key={`progress ${index}`}
          name={item}
          $active={formStep === PROGRESS_BAR_DATA[index]}
        >
          {index + 1}
        </Circle>
      ))}
    </StyledProgressSteps>
  );
};

export default ProgressSteps;

const StyledProgressSteps = styled.div`
  position: relative;
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 52px 100px 0;
  margin-bottom: 86px;
  &::before {
    position: absolute;
    content: '';
    width: calc(100% - 200px);
    height: 2px;
    background-color: ${color.gray300};
  }
`;

const Circle = styled.div<{ $active: boolean; name: string }>`
  z-index: 1;
  ${font.p1}
  color: ${(props) => (props.$active ? color.maruDefault : color.gray600)};
  background-color: ${(props) => (props.$active ? color.white : color.gray50)};
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  border-radius: 50%;
  width: 44px;
  height: 44px;
  border: 2px solid ${(props) => (props.$active ? color.maruDefault : color.gray300)};
  &::after {
    ${font.context}
    color: ${(props) => (props.$active ? color.maruDefault : color.gray600)};
    content: '${(props) => props.name}';
    position: absolute;
    top: calc(100% + 4px);
  }
`;
