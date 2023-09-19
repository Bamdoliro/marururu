import SideMenu from '@/components/common/SideMenu/SideMenu';
import { GRADUATION_STEP_LIST } from '@/constants/form/data';
import { Column, Row } from '@maru/ui';
import { useState } from 'react';

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
        </Row>
    );
};

export default 성적;
