import { FormController } from '@/components/form';
import { FormLayout } from '@/layouts';
import { Column, Radio, Row, Td, Th } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';
import { useCTAButton, useInput } from './전형선택.hooks';
import { useChoiceFormTypeState } from './전형선택.state';

const 전형선택 = () => {
    const { choiceFormType } = useChoiceFormTypeState();
    const { handleFormTypeDataChange } = useInput();
    const { handleNextButtonClick, handlePreviousButtonClick } = useCTAButton();

    return (
        <FormLayout title="전형 선택">
            <Table>
                <Row>
                    <Th width="calc(736px/3)" height={56} borderTopLeftRadius={12}>
                        1유형
                    </Th>
                    <Th width="calc(736px/3)" height={56}>
                        2유형
                    </Th>
                    <Th width="calc(736px/3)" height={56}>
                        3유형
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
                        {}
                    </Td>
                    <Td width="calc(736px/3)" height={56}>
                        {}
                    </Td>
                    <Td width={80} height={56}>
                        <Radio name="type" value="REGULAR" />
                    </Td>
                </Row>
                <Row>
                    <Td width="calc(736px/3)" height={616} borderBottomLeftRadius={12}>
                        특별 전형
                    </Td>
                    <Column>
                        <Row>
                            <Td width="calc(736px/3)" height={56}>
                                마이스터인재 전형
                            </Td>
                            <Td width="calc(736px/3)" height={56}>
                                {}
                            </Td>
                            <Td width={80} height={56}>
                                <Radio name="type" value="MEISTER_TALENT" />
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
                                        <Radio name="type" value="NATIONAL_BASIC_LIVING" />
                                    </Td>
                                </Row>
                                <Row>
                                    <Td width="calc(736px/3)" height={56}>
                                        차상위계층
                                    </Td>
                                    <Td width={80} height={56}>
                                        <Radio name="type" value="NEAR_POVERTY" />
                                    </Td>
                                </Row>
                                <Row>
                                    <Td width="calc(736px/3)" height={56}>
                                        국가보훈대상자 (국가유공자)
                                    </Td>
                                    <Td width={80} height={56}>
                                        <Radio name="type" value="NATIONAL_VETERANS" />
                                    </Td>
                                </Row>
                                <Row>
                                    <Td width="calc(736px/3)" height={56}>
                                        한부모가정
                                    </Td>
                                    <Td width={80} height={56}>
                                        <Radio name="type" value="ONE_PARENT" />
                                    </Td>
                                </Row>
                                <Row>
                                    <Td width="calc(736px/3)" height={56}>
                                        북한이탈주민
                                    </Td>
                                    <Td width={80} height={56}>
                                        <Radio name="type" value="FROM_NORTH_KOREA" />
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
                                        다문화가정
                                    </Td>
                                    <Td width={80} height={56}>
                                        <Radio name="type" value="MULTICULTURAL" />
                                    </Td>
                                </Row>
                                <Row>
                                    <Td width="calc(736px/3)" height={56}>
                                        소년소녀가장
                                    </Td>
                                    <Td width={80} height={56}>
                                        <Radio name="type" value="TEEN_HOUSEHOLDER" />
                                    </Td>
                                </Row>
                                <Row>
                                    <Td width="calc(736px/3)" height={56}>
                                        다자녀가정자녀
                                    </Td>
                                    <Td width={80} height={56}>
                                        <Radio name="type" value="MULTI_CHILDREN" />
                                    </Td>
                                </Row>
                                <Row>
                                    <Td width="calc(736px/3)" height={56}>
                                        농어촌지역출신자
                                    </Td>
                                    <Td width={80} height={56}>
                                        <Radio name="type" value="FARMING_AND_FISHING" />
                                    </Td>
                                </Row>
                            </Column>
                        </Row>
                        <Row>
                            <Td width="calc(736px/3)" height={56}>
                                특례입학대상자전형
                            </Td>
                            <Td width="calc(736px/3)" height={56}>
                                {}
                            </Td>
                            <Td width={80} height={56} borderBottomRightRadius={12}>
                                <Radio name="type" value="SPECIAL_ADMISSION" />
                            </Td>
                        </Row>
                    </Column>
                </Row>
            </Table>
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
    ${flex({ flexDirection: 'column' })}
    gap: 48px;
    width: 100%;
    height: 100%;
`;

const Table = styled.table`
    display: flex;
    flex-direction: column;
    width: 816px;
`;
