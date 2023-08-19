import { Row, Text } from '@maru/ui';
import { color } from '@maru/theme';
import { flex } from '@maru/utils';
import styled from 'styled-components';

const ResultsTableItem = () => {
    return (
        <StyledResultsTableItem>
            <Row alignItems="center" gap={48}>
                <Text fontType="p2" color={color.gray900}>
                    수험번호
                </Text>
                <Text fontType="p2" color={color.gray900}>
                    이름
                </Text>
                <Text fontType="p2" color={color.gray900}>
                    전형
                </Text>
            </Row>
            <Text fontType="p2" color={color.gray900}>
                합격 여부
            </Text>
        </StyledResultsTableItem>
    );
};

export default ResultsTableItem;

const StyledResultsTableItem = styled.div`
    ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
    width: 100%;
    height: 64px;
    padding: 0px 64px 0px 32px;
    background-color: ${color.white};
    border: 1px solid ${color.gray200};
    border-radius: 12px;
`;
