'use client';

import { useFormStep } from '@/hooks';
import { 지원자정보, 보호자정보, 출신학교및학력, 전형선택, 성적입력, 자기소개서 } from '.';

const FormPage = () => {
    const { formStep, setFormStep } = useFormStep();
    return (
        <div>
            {formStep === '지원자 정보' && <지원자정보 />}
            {formStep === '보호자 정보' && <보호자정보 />}
            {formStep === '출신학교 및 학력' && <출신학교및학력 />}
            {formStep === '전형 선택' && (
                <전형선택
                    onPrevious={() => setFormStep('출신학교 및 학력')}
                    onNext={() => setFormStep('성적 입력')}
                />
            )}
            {formStep === '성적 입력' && (
                <성적입력
                    onPrevious={() => setFormStep('전형 선택')}
                    onNext={() => setFormStep('자기소개서')}
                />
            )}
            {formStep === '자기소개서' && (
                <자기소개서
                    onPrevious={() => setFormStep('성적 입력')}
                    onNext={() => alert('작성완료')}
                />
            )}
        </div>
    );
};

export default FormPage;
