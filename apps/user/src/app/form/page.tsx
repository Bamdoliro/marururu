'use client';

import 지원자정보 from './지원자정보/지원자정보';
import 보호자정보 from './보호자정보/보호자정보';
import 출신학교및학력 from './출신학교및학력/출신학교및학력';
import 전형선택 from './전형선택/전형선택';
import 성적입력 from './성적입력/성적입력';
import 자기소개서 from './자기소개서/자기소개서';
import { useFormStepProvider } from '@/hooks/provider/useFormStepProvider';

const FormPage = () => {
    const { formStep } = useFormStepProvider();

    return (
        <div>
            {formStep === '지원자 정보' && <지원자정보 />}
            {formStep === '보호자 정보' && <보호자정보 />}
            {formStep === '출신학교 및 학력' && <출신학교및학력 />}
            {formStep === '전형 선택' && <전형선택 />}
            {formStep === '성적 입력' && <성적입력 />}
            {formStep === '자기소개서' && <자기소개서 />}
        </div>
    );
};

export default FormPage;
