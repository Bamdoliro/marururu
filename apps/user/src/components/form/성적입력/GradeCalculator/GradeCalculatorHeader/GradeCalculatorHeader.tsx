import { flex } from '@maru/utils';
import { font, color } from '@maru/theme';
import styled, { css } from 'styled-components';
import { Column, Row } from '@maru/ui';

const GradeCalculatorHeader = () => {
    return (
        <StyledGradeCalculatorHeader>
            <Row alignItems="center">
                <Th option="PRIMARY" width="123px" height="100px">
                    과목
                </Th>
                <Column width={379}>
                    <Th option="PRIMARY" width="100%" height="50px">
                        2학년
                    </Th>
                    <Row>
                        <Th option="SECONDARY" width="100%" height="50px">
                            1학기
                        </Th>
                        <Th option="SECONDARY" width="100%" height="50px">
                            2학기
                        </Th>
                    </Row>
                </Column>
                <Column width={190.5}>
                    <Th option="PRIMARY" width="100%" height="50px">
                        3학년
                    </Th>
                    <Th option="SECONDARY" width="100%" height="50px">
                        1학기
                    </Th>
                </Column>
                <Th option="PRIMARY" width="123px" height="100px">
                    삭제
                </Th>
            </Row>
        </StyledGradeCalculatorHeader>
    );
};

export default GradeCalculatorHeader;

const StyledGradeCalculatorHeader = styled.div`
    width: 100%;
    height: 100px;
`;

const Th = styled.div<{ width: string; height: string; option: 'PRIMARY' | 'SECONDARY' }>`
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    ${(props) =>
        props.option === 'PRIMARY'
            ? css`
                  ${font.context}
                  background-color: ${color.maruDefault};
                  color: ${color.white};
                  border-right: 1px solid ${color.white};
                  &:last-child {
                      border-right: none;
                  }
              `
            : css`
                  ${font.p2}
                  background-color: ${color.gray100};
                  color: ${color.gray900};
                  border-left: 1px solid ${color.gray300};
                  &:first-child {
                      border-left: none;
                  }
              `}
`;

const Td = styled.div<{ width: string; height: string }>`
    ${font.btn2}
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${color.white};
    color: ${color.gray900};
    border: 0.5px solid ${color.gray300};
    &:first-child {
        background-color: ${color.gray50};
    }
`;
