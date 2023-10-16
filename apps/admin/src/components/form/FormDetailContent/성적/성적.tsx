import SideMenu from '@/components/common/SideMenu/SideMenu';
import { GRADUATION_STEP_LIST } from '@/constants/form/data';
import { Column, Row } from '@maru/ui';
import { SwitchCase } from '@toss/react';
import { useState } from 'react';
import 교과성적 from './교과성적/교과성적';
import 봉사시간 from './봉사시간/봉사시간';
import 자격증 from './자격증/자격증';
import 출결상황 from './출결상황/출결상황';

interface Props {
    id: number;
}

const 성적 = ({ id }: Props) => {
    const [currentGraduationStep, setCurrentGraduationStep] = useState('교과 성적');
    return (
        <Row gap={48}>
            <Column gap={10}>
                {GRADUATION_STEP_LIST.map((graduationStep, index) => (
                    <SideMenu
                        key={`graduation-step ${index}`}
                        active={currentGraduationStep === graduationStep}
                        onClick={() => setCurrentGraduationStep(graduationStep)}>
                        {graduationStep}
                    </SideMenu>
                ))}
            </Column>
            <SwitchCase
                value={currentGraduationStep}
                caseBy={{
                    '교과 성적': <교과성적 id={id} />,
                    '출결 상황': <출결상황 id={id} />,
                    '봉사 시간': <봉사시간 id={id} />,
                    자격증: <자격증 id={id} />,
                }}
            />
        </Row>
    );
};

export default 성적;
