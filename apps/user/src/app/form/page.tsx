'use client';

import { 지원자정보, 보호자정보, 출신학교및학력, 전형선택, 성적입력, 자기소개서 } from '.';

const FormPage = () => {
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
