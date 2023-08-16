import { useFormStore } from '@/store';
import { color, font } from '@maru/theme';
import { CheckBox, Column, Row, Td, Th } from '@maru/ui';
import { flex } from '@maru/utils';
import { ChangeEventHandler } from 'react';
import { styled } from 'styled-components';

const CertificateCalculator = () => {
    const [form, setForm] = useFormStore();

    const handleCertificateListInfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { checked, value } = e.target;
        if (checked) {
            setForm((prev) => ({
                ...prev,
                grade: { ...prev.grade, certificateList: [...prev.grade.certificateList, value] },
            }));
        } else {
            setForm((prev) => ({
                ...prev,
                grade: {
                    ...prev.grade,
                    certificateList: prev.grade.certificateList.filter(
                        (certificate) => certificate !== value,
                    ),
                },
            }));
        }
    };

    return (
        <StyledCertificateCalculator>
            <Desc style={{ marginBottom: 16 }}>
                *자격증을 중복 소지하고 있을 경우, 최고 수준의 자격증 1개만 인정함
            </Desc>
            <Column>
                <Row>
                    <Th borderTopLeftRadius={12} width={416} height={56}>
                        자격증명
                    </Th>
                    <Th width={200} height={56}>
                        시행기관
                    </Th>
                    <Th width={120} height={56}>
                        반영점수
                    </Th>
                    <Th borderTopRightRadius={12} width={80} height={56}>
                        선택
                    </Th>
                </Row>
                <Column>
                    <Row>
                        <Td width={416} height={56}>
                            정보처리기능사, 정보기기운용기능사, 전자계산기기능사
                        </Td>
                        <Td width={200} height={56}>
                            한국산업인력공단
                        </Td>
                        <Td width={120} height={56}>
                            4점
                        </Td>
                        <Td width={80} height={56}>
                            <CheckBox
                                value="정보처리기능사, 정보기기운용기능사, 전자계산기기능사"
                                onChange={handleCertificateListInfoDataChange}
                            />
                        </Td>
                    </Row>
                    <Row>
                        <Td borderBottomLeftRadius={12} width={416} height={168}>
                            컴퓨터활용능력
                        </Td>
                        <Td width={200} height={168}>
                            한국산업인력공단
                        </Td>
                        <Column>
                            <Row>
                                <Td width={120} height={56}>
                                    1급(3점)
                                </Td>
                                <Td width={80} height={56}>
                                    <CheckBox
                                        checked={form.grade.certificateList.includes(
                                            '컴퓨터활용능력 1급',
                                        )}
                                        value="컴퓨터활용능력 1급"
                                        onChange={handleCertificateListInfoDataChange}
                                    />
                                </Td>
                            </Row>
                            <Row>
                                <Td width={120} height={56}>
                                    2급(2점)
                                </Td>
                                <Td width={80} height={56}>
                                    <CheckBox
                                        checked={form.grade.certificateList.includes(
                                            '컴퓨터활용능력 2급',
                                        )}
                                        value="컴퓨터활용능력 2급"
                                        onChange={handleCertificateListInfoDataChange}
                                    />
                                </Td>
                            </Row>
                            <Row>
                                <Td width={120} height={56}>
                                    3급(1점)
                                </Td>
                                <Td borderBottomRightRadius={12} width={80} height={56}>
                                    <CheckBox
                                        checked={form.grade.certificateList.includes(
                                            '컴퓨터활용능력 3급',
                                        )}
                                        value="컴퓨터활용능력 3급"
                                        onChange={handleCertificateListInfoDataChange}
                                    />
                                </Td>
                            </Row>
                        </Column>
                    </Row>
                </Column>
            </Column>
        </StyledCertificateCalculator>
    );
};

export default CertificateCalculator;

const StyledCertificateCalculator = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap:16px;
    width: 100%;
`;

const Desc = styled.p`
    color: ${color.red};
    ${font.p3}
`;
