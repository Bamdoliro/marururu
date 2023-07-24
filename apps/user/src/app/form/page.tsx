'use client';

import { useForm } from '@/hooks';
import { 지원자정보, 보호자정보, 출신학교및학력, 전형선택, 성적입력, 자기소개서 } from '@/components/form';

const FormPage = () => {
    const { formStep, onMoveForm } = useForm();
    return (
        <div>
            {formStep === '지원자 정보' && <지원자정보 onNext={() => onMoveForm('보호자 정보')} />}
            {formStep === '보호자 정보' && (
                <보호자정보
                    onPrevious={() => onMoveForm('지원자 정보')}
                    onNext={() => onMoveForm('출신학교 및 학력')}
                />
            )}
            {formStep === '출신학교 및 학력' && (
                <출신학교및학력
                    onPrevious={() => onMoveForm('보호자 정보')}
                    onNext={() => onMoveForm('전형 선택')}
                />
            )}
            {formStep === '전형 선택' && (
                <전형선택
                    onPrevious={() => onMoveForm('출신학교 및 학력')}
                    onNext={() => onMoveForm('성적 입력')}
                />
            )}
            {formStep === '성적 입력' && (
                <성적입력
                    onPrevious={() => onMoveForm('전형 선택')}
                    onNext={() => onMoveForm('자기소개서')}
                />
            )}
            {formStep === '자기소개서' && (
                <자기소개서
                    onPrevious={() => onMoveForm('성적 입력')}
                    onNext={() => alert('작성완료')}
                />
            )}
        </div>
    );
};

export default FormPage;
