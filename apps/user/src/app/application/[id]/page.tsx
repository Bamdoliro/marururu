'use client';

import { AppLayout } from '@/layouts';
import { useFormValueStore } from '@/store';
import { color } from '@maru/theme';
import { Button, Column, Input, RadioGroup, Row, Text } from '@maru/ui';
import styled from 'styled-components';
import { useInput } from './application.hooks';

const ApplicationDetailPage = () => {
    const form = useFormValueStore();
    const { handle보호자정보DataChange } = useInput();
    const submitForm = () => {};
    return (
        <AppLayout header footer style={{ padding: '0px 312px', marginTop: 82 }}>
            <StyledApllicationPage>
                <Column gap={48}>
                    <Column gap={36}>
                        <Text fontType="H1" color={color.gray900}>
                            2024학년도 부산소프트웨어마이스터고등학교
                            <br />
                            입학전형 설명회 참가 신청 (학생, 학부모)
                        </Text>
                        <Column gap={24}>
                            <Text fontType="p2" color={color.gray600}>
                                일시 : 2023년 8월 26일(토) 11:00
                                <br />
                                장소 : 부산소프트웨어마이스터고등학교 1층 SRC관
                            </Text>
                            <Text fontType="p2" color={color.red}>
                                신청 기한: 2023.08.09 (수) ~ 2023.08.23 (수)
                            </Text>
                            <Text fontType="p2" color={color.gray600}>
                                *는 필수항목입니다.
                            </Text>
                        </Column>
                    </Column>
                    <Column gap={64}>
                        <Input label="소속학교" required />
                        <Input label="성함 *"></Input>
                        <Input label="참석인원 *" placeholder="0"></Input>
                        <Row justifyContent="flex-start" alignItems="center">
                            <RadioGroup
                                label="신청유형 *"
                                value={form.parent.relation}
                                onChange={handle보호자정보DataChange}
                                name="relation"
                                list={[
                                    { label: '학생', value: '학생' },
                                    { label: '학부모', value: '학부모' },
                                    {
                                        label: '기타',
                                        value: '기타',
                                        checked:
                                            form.applicant.name !== '학생' &&
                                            form.applicant.name !== '엄마',
                                    },
                                ]}
                            />
                        </Row>
                        <Input label="연락처 (전화번호) *"></Input>
                        <Input
                            label="입학설명회에서 특별히 궁금한 부분이 있으시면 자유롭게 작성해 주세요."
                            width="100%"
                            height="100%"
                            placeholder="255자 이내로 작성해주세요."></Input>
                    </Column>
                </Column>
                <StyledInfoAgreement>
                    <Column gap={16}>
                        <Text fontType="H4" color={color.gray900}>
                            개인정보 동의서
                        </Text>
                        <Column gap={36}>
                            <Text fontType="p2" color={color.gray600}>
                                입학설명회 진행을 위해 수집한 개인정보는
                                부산소프트웨어마이스터고등학교 <br />
                                홍보자료 발송 및 입학안내 이외의 용도로 사용되지 않습니다. <br />
                                [개인정보 보호법] 제 15조 및 제 17조 에 따라 개인정보를 수집, 이용
                                및 제공하는 것을 동의합니다.
                                <br />
                                또한 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이
                                달성된 경우 [개인정보 보호법] 제 21조에 따라 처리합니다.
                                <br />
                                단, 개인정보 비동의 시 홍보자료 및 안내자료 발송에 제한이 있습니다.
                            </Text>
                            <Row justifyContent="flex-start" alignItems="center">
                                <RadioGroup
                                    label=""
                                    value={form.parent.relation}
                                    onChange={handle보호자정보DataChange}
                                    name="relation"
                                    list={[
                                        { label: '동의', value: '동의' },
                                        { label: '비동의', value: '비동의' },
                                    ]}
                                />
                            </Row>
                        </Column>
                    </Column>
                </StyledInfoAgreement>
                <Button size="LARGE" onClick={submitForm}>
                    제출하기
                </Button>
            </StyledApllicationPage>
        </AppLayout>
    );
};

export default ApplicationDetailPage;

const StyledApllicationPage = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const StyledInfoAgreement = styled.div`
    margin: 120px 0px;
`;
