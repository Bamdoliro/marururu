import { FormController } from '@/components/form';
import { useFormStore } from '@/store';
import { Column, Radio, Row, Td, Th } from '@maru/ui';
import { flex } from '@maru/utils';
import { useEffect } from 'react';
import { styled } from 'styled-components';
import FormLayout from '../layout';
import { useCTAButton, useInput } from './전형선택.hooks';

const 전형선택 = () => {
    const [form, setForm] = useFormStore();
    const { handleFormTypeDataChange } = useInput();
    const { handleNextButtonClick, handlePreviousButtonClick } = useCTAButton();

    useEffect(() => {
        if (form.education.graduationType === 'QUALIFICATION_EXAMINATION') {
            if (form.type !== 'REGULAR') {
                alert(
                    '서류상으로 검정고시 합격자는 특별전형 지원이 불가능해요. 일반전형으로 지원해주세요!',
                );
                setForm((prev) => ({ ...prev, type: 'REGULAR' }));
            }
        }
    }, [form.type]);

    return (
        <FormLayout title="전형 선택">
            <Styled전형선택>
                <Table>
                    <Row>
                        <Th width="calc(736px/3)" height={56} borderTopLeftRadius={12}>
                            전형
                        </Th>
                        <Th width="calc(736px/3)" height={56}>
                            유형
                        </Th>
                        <Th width="calc(736px/3)" height={56}>
                            구분
                        </Th>
                        <Th width={80} height={56} borderTopRightRadius={12}>
                            선택
                        </Th>
                    </Row>
                    <Row>
                        <Td width="calc(736px/3)" height={56}>
                            일반 전형
                        </Td>
                        <Td width="calc(736px/3)" height={56}>
                            {null}
                        </Td>
                        <Td width="calc(736px/3)" height={56}>
                            {null}
                        </Td>
                        <Td width={80} height={56}>
                            <Radio
                                name="type"
                                value="REGULAR"
                                onChange={handleFormTypeDataChange}
                                checked={form.type === 'REGULAR'}
                            />
                        </Td>
                    </Row>
                    <Row>
                        <Td width="calc(736px/3)" height={560}>
                            특별 전형
                        </Td>
                        <Column>
                            <Row>
                                <Td width="calc(736px/3)" height={56}>
                                    마이스터인재 전형
                                </Td>
                                <Td width="calc(736px/3)" height={56}>
                                    {null}
                                </Td>
                                <Td width={80} height={56}>
                                    <Radio
                                        name="type"
                                        value="MEISTER_TALENT"
                                        onChange={handleFormTypeDataChange}
                                        checked={form.type === 'MEISTER_TALENT'}
                                    />
                                </Td>
                            </Row>
                            <Row>
                                <Td width="calc(736px/3)" height={280}>
                                    기회균등 전형
                                </Td>
                                <Column>
                                    <Row>
                                        <Td width="calc(736px/3)" height={56}>
                                            국민기초생활수급자
                                        </Td>
                                        <Td width={80} height={56}>
                                            <Radio
                                                name="type"
                                                value="NATIONAL_BASIC_LIVING"
                                                onChange={handleFormTypeDataChange}
                                                checked={form.type === 'NATIONAL_BASIC_LIVING'}
                                            />
                                        </Td>
                                    </Row>
                                    <Row>
                                        <Td width="calc(736px/3)" height={56}>
                                            차상위계층
                                        </Td>
                                        <Td width={80} height={56}>
                                            <Radio
                                                name="type"
                                                value="NEAR_POVERTY"
                                                onChange={handleFormTypeDataChange}
                                                checked={form.type === 'NEAR_POVERTY'}
                                            />
                                        </Td>
                                    </Row>
                                    <Row>
                                        <Td width="calc(736px/3)" height={56}>
                                            국가보훈대상자 (국가유공자)
                                        </Td>
                                        <Td width={80} height={56}>
                                            <Radio
                                                name="type"
                                                value="NATIONAL_VETERANS"
                                                onChange={handleFormTypeDataChange}
                                                checked={form.type === 'NATIONAL_VETERANS'}
                                            />
                                        </Td>
                                    </Row>
                                    <Row>
                                        <Td width="calc(736px/3)" height={56}>
                                            한부모가정보호대상자
                                        </Td>
                                        <Td width={80} height={56}>
                                            <Radio
                                                name="type"
                                                value="ONE_PARENT"
                                                onChange={handleFormTypeDataChange}
                                                checked={form.type === 'ONE_PARENT'}
                                            />
                                        </Td>
                                    </Row>
                                    <Row>
                                        <Td width="calc(736px/3)" height={56}>
                                            북한이탈주민 또는 그 자녀
                                        </Td>
                                        <Td width={80} height={56}>
                                            <Radio
                                                name="type"
                                                value="FROM_NORTH_KOREA"
                                                onChange={handleFormTypeDataChange}
                                                checked={form.type === 'FROM_NORTH_KOREA'}
                                            />
                                        </Td>
                                    </Row>
                                </Column>
                            </Row>
                            <Row>
                                <Td width="calc(736px/3)" height={224}>
                                    사회다양성 전형
                                </Td>
                                <Column>
                                    <Row>
                                        <Td width="calc(736px/3)" height={56}>
                                            다문화가정 자녀
                                        </Td>
                                        <Td width={80} height={56}>
                                            <Radio
                                                name="type"
                                                value="MULTICULTURAL"
                                                onChange={handleFormTypeDataChange}
                                                checked={form.type === 'MULTICULTURAL'}
                                            />
                                        </Td>
                                    </Row>
                                    <Row>
                                        <Td width="calc(736px/3)" height={56}>
                                            소년 ∙ 소녀가장
                                        </Td>
                                        <Td width={80} height={56}>
                                            <Radio
                                                name="type"
                                                value="TEEN_HOUSEHOLDER"
                                                onChange={handleFormTypeDataChange}
                                                checked={form.type === 'TEEN_HOUSEHOLDER'}
                                            />
                                        </Td>
                                    </Row>
                                    <Row>
                                        <Td width="calc(736px/3)" height={56}>
                                            다자녀 가정 자녀
                                        </Td>
                                        <Td width={80} height={56}>
                                            <Radio
                                                name="type"
                                                value="MULTI_CHILDREN"
                                                onChange={handleFormTypeDataChange}
                                                checked={form.type === 'MULTI_CHILDREN'}
                                            />
                                        </Td>
                                    </Row>
                                    <Row>
                                        <Td width="calc(736px/3)" height={56}>
                                            농어촌지역출신자
                                        </Td>
                                        <Td width={80} height={56}>
                                            <Radio
                                                name="type"
                                                value="FARMING_AND_FISHING"
                                                onChange={handleFormTypeDataChange}
                                                checked={form.type === 'FARMING_AND_FISHING'}
                                            />
                                        </Td>
                                    </Row>
                                </Column>
                            </Row>
                        </Column>
                    </Row>
                    <Row>
                        <Td width="calc(736px/3)" height={112} borderBottomLeftRadius={12}>
                            전형 외 전형
                        </Td>
                        <Column>
                            <Td width="calc(736px/3)" height={56}>
                                {null}
                            </Td>
                            <Td width="calc(736px/3)" height={56}>
                                {null}
                            </Td>
                        </Column>
                        <Column>
                            <Td width="calc(736px/3)" height={56}>
                                국가보훈대상자 중 교육지원대상자
                            </Td>
                            <Td width="calc(736px/3)" height={56}>
                                특례 입학 대상자
                            </Td>
                        </Column>
                        <Column>
                            <Td width={80} height={56}>
                                <Radio
                                    name="type"
                                    value="NATIONAL_VETERANS_EDUCATION"
                                    onChange={handleFormTypeDataChange}
                                    checked={form.type === 'NATIONAL_VETERANS_EDUCATION'}
                                />
                            </Td>
                            <Td width={80} height={56} borderBottomRightRadius={12}>
                                <Radio
                                    name="type"
                                    value="SPECIAL_ADMISSION"
                                    onChange={handleFormTypeDataChange}
                                    checked={form.type === 'SPECIAL_ADMISSION'}
                                />
                            </Td>
                        </Column>
                    </Row>
                </Table>
            </Styled전형선택>
            <FormController
                onPrevious={handlePreviousButtonClick}
                onNext={handleNextButtonClick}
                step="전형선택"
            />
        </FormLayout>
    );
};

export default 전형선택;

const Styled전형선택 = styled.div`
    width: 100%;
    height: 100%;
`;

const Table = styled.table`
    ${flex({ flexDirection: 'column' })}
    width: 816px;
`;
