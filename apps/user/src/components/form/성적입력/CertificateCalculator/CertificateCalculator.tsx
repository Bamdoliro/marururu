import { Column, Radio, Row, Td, Th } from '@maru/ui';
import { styled } from 'styled-components';

const CertificateCalculator = () => {
    return (
        <Table>
            <Row>
                <Th width={416} height={56}>
                    자격증명
                </Th>
                <Th width={200} height={56}>
                    시행기관
                </Th>
                <Th width={120} height={56}>
                    반영점수
                </Th>
                <Th width={80} height={56}>
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
                        <Radio name="certificate" />
                    </Td>
                </Row>
                <Row>
                    <Td width={416} height={168}>
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
                                <Radio name="certificate" />
                            </Td>
                        </Row>
                        <Row>
                            <Td width={120} height={56}>
                                2급(2점)
                            </Td>
                            <Td width={80} height={56}>
                                <Radio name="certificate" />
                            </Td>
                        </Row>
                        <Row>
                            <Td width={120} height={56}>
                                3급(1점)
                            </Td>
                            <Td width={80} height={56}>
                                <Radio name="certificate" />
                            </Td>
                        </Row>
                    </Column>
                </Row>
            </Column>
        </Table>
    );
};

const Table = styled.div`
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
`;

export default CertificateCalculator;
