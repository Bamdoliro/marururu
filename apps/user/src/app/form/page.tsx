'use client';

import 지원자정보 from './지원자정보/지원자정보';
import 보호자정보 from './보호자정보/보호자정보';
import 출신학교및학력 from './출신학교및학력/출신학교및학력';
import 전형선택 from './전형선택/전형선택';
import 성적입력 from './성적입력/성적입력';
import 자기소개서 from './자기소개서/자기소개서';
import { useFormStepProvider } from '@/hooks/provider/useFormStepProvider';
import { SwitchCase } from '@toss/react';

const FormPage = () => {
    const { formStep } = useFormStepProvider();

    return (
        <SwitchCase
            value={formStep}
            caseBy={{
                지원자정보: <지원자정보 />,
                보호자정보: <보호자정보 />,
                출신학교및학력: <출신학교및학력 />,
                전형선택: <전형선택 />,
                성적입력: <성적입력 />,
                자기소개서: <자기소개서 />,
            }}
            defaultComponent={<지원자정보 />}
        />
    );
};

export default FormPage;
