import { RadioGroup } from '@maru/ui';
import { ChangeEventHandler, useState } from 'react';
import { styled } from 'styled-components';

const 전형선택 = () => {
    const [selectedAdmissions, setSelectedAdmissions] = useState({
        입학전형선택: '',
        특별전형선택: '',
        기회균등전형선택: '',
        사회다양성전형선택: '',
    });

    const handleAdmissionsChange: ChangeEventHandler<HTMLInputElement> = ({
        target: { name, value },
    }) => {
        if (name === '특별전형선택') {
            setSelectedAdmissions({
                ...selectedAdmissions,
                특별전형선택: value,
                기회균등전형선택: '',
                사회다양성전형선택: '',
            });
        } else if (name === '입하전형선택') {
            setSelectedAdmissions({
                입학전형선택: value,
                특별전형선택: '',
                기회균등전형선택: '',
                사회다양성전형선택: '',
            });
        } else {
            setSelectedAdmissions({
                ...selectedAdmissions,
                [name]: value,
            });
        }
    };

    return (
        <Styled전형선택>
            <RadioGroup
                label="입학 전형 선택"
                name="입하전형선택"
                list={['일반전형', '특별전형']}
                onChange={handleAdmissionsChange}
            />
            {selectedAdmissions.입학전형선택 === '특별전형' && (
                <RadioGroup
                    label="특별 전형 선택"
                    name="특별전형선택"
                    list={[
                        '마이스터인재정형',
                        '기회균등전형',
                        '사회다양성전형',
                        '특례입학대상자전형',
                    ]}
                    onChange={handleAdmissionsChange}
                />
            )}
            {selectedAdmissions.특별전형선택 === '기회균등전형' && (
                <RadioGroup
                    label="기회 균등 전형 선택"
                    name="기회균등전형선택"
                    list={[
                        '국민기초생활수급권자',
                        '차상위계층',
                        '국가보훈자녀',
                        '한부모가정',
                        '북한이탈청소년',
                    ]}
                    onChange={handleAdmissionsChange}
                />
            )}
            {selectedAdmissions.특별전형선택 === '사회다양성전형' && (
                <RadioGroup
                    label="사회다양성 전형 선택"
                    name="사회다양성전형선택"
                    list={[
                        '다문화가정',
                        '차상위계층',
                        '국가보훈자녀',
                        '한부모가정',
                        '북한이탈청소년',
                    ]}
                    onChange={handleAdmissionsChange}
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
