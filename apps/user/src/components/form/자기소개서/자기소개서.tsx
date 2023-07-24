import { FormLayout } from '@/layouts';
import { color, font } from '@maru/theme';
import { Textarea } from '@maru/ui';
import { flex } from '@maru/utils';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

const 자기소개서 = () => {
    const [value, setValue] = useState('');

    return (
        <FormLayout title="자기소개서">
            <Styled자기소개서>
                <Desc>*자기소개서와 학업계획서는 자동저장됩니다.</Desc>
                <Textarea
                    limit={1500}
                    label="자기소개서"
                    value={value}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                />
            </Styled자기소개서>
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
`;
