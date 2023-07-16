import { RadioGroup } from '@maru/ui';
import { ChangeEventHandler, useState } from 'react';
import { styled } from 'styled-components';

const 전형선택 = () => {
    const [selectedAdmissions, setSelectedAdmissions] = useState({
        admissions: '',
        specialAdmissions: '',
        equalOpportunityAdmissions: '',
        diversityAdmissions: '',
    });

    const handleRadioChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.name === 'specialAdmissions') {
            setSelectedAdmissions({
                ...selectedAdmissions,
                specialAdmissions: e.target.value,
                equalOpportunityAdmissions: '',
                diversityAdmissions: '',
            });
        } else if (e.target.name === 'admissions') {
            setSelectedAdmissions({
                admissions: e.target.value,
                specialAdmissions: '',
                equalOpportunityAdmissions: '',
                diversityAdmissions: '',
            });
        } else {
            setSelectedAdmissions({
                ...selectedAdmissions,
                [e.target.name]: e.target.value,
            });
        }
    };

    console.log(JSON.stringify(selectedAdmissions, null, 2));

    return (
        <Styled전형선택>
            <RadioGroup
                label="입학 전형 선택"
                name="admissions"
                list={['일반전형', '특별전형']}
                onChange={handleRadioChange}
            />
            {selectedAdmissions.admissions === '특별전형' && (
                <RadioGroup
                    label="특별 전형 선택"
                    name="specialAdmissions"
                    list={[
                        '마이스터인재정형',
                        '기회균등전형',
                        '사회다양성전형',
                        '특례입학대상자전형',
                    ]}
                    onChange={handleRadioChange}
                />
            )}
            {selectedAdmissions.specialAdmissions === '기회균등전형' && (
                <RadioGroup
                    label="기회 균등 선택"
                    name="equalOpportunityAdmissions"
                    list={[
                        '국민기초생활수급권자',
                        '차상위계층',
                        '국가보훈자녀',
                        '한부모가정',
                        '북한이탈청소년',
                    ]}
                    onChange={handleRadioChange}
                />
            )}
            {selectedAdmissions.specialAdmissions === '사회다양성전형' && (
                <RadioGroup
                    label="사회다양성 전형 선택"
                    name="diversityAdmissions"
                    list={[
                        '다문화가정',
                        '차상위계층',
                        '국가보훈자녀',
                        '한부모가정',
                        '북한이탈청소년',
                    ]}
                    onChange={handleRadioChange}
                />
            )}
        </Styled전형선택>
    );
};

export default 전형선택;

const Styled전형선택 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
`;
