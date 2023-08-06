import { AppLayout } from '@/layouts';
import { Button, Column, Row, Text } from '@maru/ui';
import { color, font } from '@maru/theme';
import { 최종제출Table } from '@/components/form';
import styled from 'styled-components';

const 최종제출 = () => {
    return (
        <AppLayout header style={{ padding: '58px 0px 0px 96px' }}>
            <Styled최종제출>
                <Column gap={36}>
                    <Text fontType="H1" color={color.gray900}>
                        원서 최종 제출
                    </Text>
                    <Column gap={4}>
                        <Text fontType="p2" color={color.gray900}>
                            제출서류들은 스캔해서 하나의 PDF파일로 첨부해주시기 바랍니다.
                        </Text>
                        <Text fontType="p2" color={color.red}>
                            원서를 최종 제출됐을 경우 재업로드는 불가능합니다.
                        </Text>
                    </Column>
                </Column>
                <Row gap={16} alignItems="center">
                    <Button size="SMALL">첨부파일 업로드</Button>
                    <Text fontType="p2" color={color.gray900}>
                        선택된 파일 없음
                    </Text>
                </Row>
                <최종제출Table />
            </Styled최종제출>
        </AppLayout>
    );
};

export default 최종제출;

const Styled최종제출 = styled.div`
    width: 100%;
    height: 100%;
`;
