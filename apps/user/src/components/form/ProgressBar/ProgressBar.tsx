import { useFormPage } from '@/hooks';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import styled from 'styled-components';

const PROGRESS_BAR_DATA = [
    '지원자 정보',
    '보호자 정보',
    '출신학교 및 학력',
    '전형 선택',
    '성적 입력',
    '자기소개서',
] as const;

/**
 * @TODO 다음페이지로 성공적으로 넘어갔을때 complete 처리를 해줘야합니다
 */

const ProgressBar = () => {
    const { currentPage, movePage } = useFormPage();

    return (
        <StyledProgressBar>
            {PROGRESS_BAR_DATA.map((item, index) => (
                <Circle
                    key={`progress ${index}`}
                    name={item}
                    active={currentPage === index + 1}
                    onClick={movePage}>
                    {index + 1}
                </Circle>
            ))}
        </StyledProgressBar>
    );
};

export default ProgressBar;

const StyledProgressBar = styled.div`
    position: relative;
    ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
    width: 100%;
    padding: 0px 205px;
    margin-bottom: 61px;
    &::before {
        position: absolute;
        content: '';
        width: calc(100% - 410px);
        height: 2px;
        background-color: ${color.gray300};
    }
`;

const Circle = styled.div<{ active: boolean; name: string }>`
    z-index: 1;
    ${font.p1}
    color: ${(props) => (props.active ? color.maruDefault : color.gray600)};
    background-color: ${(props) => (props.active ? color.white : color.gray50)};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    border: 2px solid ${(props) => (props.active ? color.maruDefault : color.gray300)};
    cursor: pointer;
    &::after {
        ${font.context}
        color: ${(props) => (props.active ? color.maruDefault : color.gray600)};
        content: '${(props) => props.name}';
        position: absolute;
        top: calc(100% + 4px);
    }
`;
