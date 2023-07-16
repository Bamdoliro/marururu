'use client';

import { 지원자정보, 보호자정보, 출신학교및학력 } from '@/components/form';
import { useState } from 'react';

type FormStepType =
    | '지원자정보'
    | '보호자정보'
    | '출신학교및학력'
    | '전형선택'
    | '성적입력'
    | '자기소개서'
    | '완료';

const FormPage = () => {
    const [formStep, setFormStep] = useState<FormStepType>('지원자정보');

    return (
        <div>
            {formStep === '지원자정보' && <지원자정보 />}
            {formStep === '보호자정보' && <보호자정보 />}
            {formStep === '출신학교및학력' && <출신학교및학력 />}
            {formStep === '전형선택' && <div />}
            {formStep === '성적입력' && <div />}
            {formStep === '자기소개서' && <div />}
            {formStep === '완료' && <div />}
        </div>
    );
};

export default FormPage;
