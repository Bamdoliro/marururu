import { FormLayout } from '@/layouts';
import GradeCalculator from './GradeCalculator/GradeCalculator';
import GradePreview from './GradePreview/GradePreview';
import { color, font } from '@maru/theme';
import { Button } from '@maru/ui';
import { flex } from '@maru/utils';
import { useState } from 'react';
import { styled } from 'styled-components';

interface PropsType {
    onPrevious: () => void;
    onNext: () => void;
}

const FIELD_DATA = ['성적 입력', '출결상황', '봉사시간', '자격증'] as const;

const 성적입력 = ({ onPrevious, onNext }: PropsType) => {
    const [fieldStep, setFieldStep] = useState('성적 입력');

    return (
        <FormLayout title="성적 입력">
            <Desc style={{ marginBottom: 24 }}>
                *교과성적이 없는 학기나 학년의 경우 모집요강을 반드시 확인 바랍니다.
                <br />
                *성취수준이 없고 원점수로 되어있는 학기나 학년은 아래표를 참고 바랍니다.
            </Desc>
            <GradePreview />
            <NavigationBar>
                {FIELD_DATA.map((item) => (
                    <Button
                        option="HOVER_UNDERLINE"
                        size="LARGE"
                        onClick={() => setFieldStep(item)}>
                        {item}
                    </Button>
                ))}
            </NavigationBar>

            {fieldStep === '성적 입력' && (
                <>
                    <Desc style={{ marginBottom: 16 }}>
                        *교과성적이 없는 학기나 학년의 경우 모집요강을 반드시 확인 바랍니다.
                        <br />
                        *성취수준이 없고 원점수로 되어있는 학기나 학년은 아래표를 참고 바랍니다.
                    </Desc>
                    <GradeCalculator />
                </>
            )}
            {fieldStep === '출결상황' && (
                <>
                    <Desc style={{ marginBottom: 16 }}>
                        *2023.09.30까지의 출결상황을 기재해주세요. 졸업생은 졸업일 기준으로
                        기재해주세요.
                    </Desc>
                    <div>출결상황 입력 테이블</div>
                </>
            )}
            {fieldStep === '봉사시간' && (
                <>
                    <Desc style={{ marginBottom: 16 }}>
                        *2023.09.30까지의 봉사시간을 기재해주세요. 졸업생은 졸업일 기준으로
                        기재해주세요.
                    </Desc>
                    <div>봉사시간 입력 테이블</div>
                </>
            )}
            {fieldStep === '자격증' && (
                <>
                    <Desc style={{ marginBottom: 16 }}>
                        *자격증을 중복 소지하고 있을 경우, 최고 수준의 자격증 1개만 인정함
                    </Desc>
                    <div>자격증 입력 테이블</div>
                </>
            )}
        </FormLayout>
    );
};

export default 성적입력;

const Desc = styled.p`
    color: ${color.red};
    ${font.p3}
`;

const NavigationBar = styled.div`
    ${flex({ alignItems: 'center' })}
    width: 100%;
    height: 54px;
    margin: 64px 0 16px;
    background-color: ${color.white};
`;
