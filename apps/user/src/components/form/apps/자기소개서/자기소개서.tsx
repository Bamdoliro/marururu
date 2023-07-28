import { FormLayout } from '@/layouts';
import { useInput } from '@maru/hooks';
import { color, font } from '@maru/theme';
import { Column, Textarea } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import FormController from '../../common/FormController/FormController';

interface PropsType {
    onPrevious: () => void;
    onNext: () => void;
}

const 자기소개서 = ({ onPrevious, onNext }: PropsType) => {
    const {
        value: introduce,
        onChange: handleIntroduceDataChange,
        debouncedValue: introduceDebounced,
    } = useInput({
        initialValue: '',
        useDebounce: true,
    });
    const {
        value: studyPlan,
        onChange: handleStudyPlanDataChange,
        debouncedValue: studyPlanDebounced,
    } = useInput({
        initialValue: '',
        useDebounce: true,
    });

    return (
        <FormLayout title="자기소개서">
            <Styled자기소개서>
                <Desc>*자기소개서와 학업계획서는 자동저장됩니다.</Desc>
                <Column gap={64}>
                    <Textarea
                        limit={1500}
                        label="자기소개서"
                        value={introduce}
                        onChange={handleIntroduceDataChange}
                    />
                    <Textarea
                        limit={1500}
                        label="학업계획서"
                        value={studyPlan}
                        onChange={handleStudyPlanDataChange}
                    />
                </Column>
            </Styled자기소개서>
            <FormController onPrevious={onPrevious} onNext={onNext} step="자기소개서" />
        </FormLayout>
    );
};

export default 자기소개서;

const Styled자기소개서 = styled.div`
    ${flex({ flexDirection: 'column' })}
    width: 100%;
    height: 100%;
`;

const Desc = styled.p`
    ${font.p3}
    color: ${color.red};
    margin-bottom: 24px;
`;
