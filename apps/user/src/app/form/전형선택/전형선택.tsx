import { FormLayout } from '@/layouts';
import { RadioGroup } from '@maru/ui';
import { flex } from '@maru/utils';
import { useInput } from './전형선택.hooks';
import { FormController } from '@/components/form';
import { styled } from 'styled-components';

interface PropsType {
    onPrevious: () => void;
    onNext: () => void;
}

const 전형선택 = ({ onPrevious, onNext }: PropsType) => {
    const { choiceFormType, handleChoiceFormTypeDataChange } = useInput();

    return (
        <FormLayout title="전형 선택">
            <Styled전형선택>
                <RadioGroup
                    label="입학 전형 선택"
                    name="입학전형선택"
                    list={['일반전형', '특별전형']}
                    onChange={handleChoiceFormTypeDataChange}
                />
                {choiceFormType.입학전형선택 === '특별전형' && (
                    <RadioGroup
                        label="특별 전형 선택"
                        name="특별전형선택"
                        list={[
                            '마이스터인재전형',
                            '기회균등전형',
                            '사회다양성전형',
                            '특례입학대상자전형',
                        ]}
                        onChange={handleChoiceFormTypeDataChange}
                    />
                )}
                {choiceFormType.특별전형선택 === '기회균등전형' && (
                    <RadioGroup
                        label="기회 균등 전형 선택"
                        name="기회균등전형선택"
                        list={[
                            '국가기초생활수급권자',
                            '차상위계층',
                            '국가보훈자녀',
                            '한부모가정',
                            '북한이탈주민',
                        ]}
                        onChange={handleChoiceFormTypeDataChange}
                    />
                )}
                {choiceFormType.특별전형선택 === '사회다양성전형' && (
                    <RadioGroup
                        label="사회다양성 전형 선택"
                        name="사회다양성전형선택"
                        list={[
                            '다문화가정',
                            '차상위계층',
                            '국가보훈자녀',
                            '한부모가정',
                            '북한이탈주민',
                        ]}
                        onChange={handleChoiceFormTypeDataChange}
                    />
                )}
            </Styled전형선택>
            <FormController onPrevious={onPrevious} onNext={onNext} step="전형 선택" />
        </FormLayout>
    );
};

export default 전형선택;

const Styled전형선택 = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 48px;
    width: 100%;
    height: 100%;
`;
