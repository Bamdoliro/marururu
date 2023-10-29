import { IconClose, IconFilter } from '@maru/icon';
import { color } from '@maru/theme';
import { Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';

interface Props {
    onClose: () => void;
}

const ReviewFilterChip = ({ onClose }: Props) => {
    return (
        <ReviewFilterBox>
            <Row alignItems="center" gap={4}>
                <IconFilter width={24} height={24} />
                <Text fontType="context" color={color.maruDefault}>
                    검토해야 하는 원서
                </Text>
            </Row>
            <IconClose
                width={18}
                height={18}
                color={color.maruDefault}
                cursor="pointer"
                onClick={onClose}
            />
        </ReviewFilterBox>
    );
};

export default ReviewFilterChip;

const ReviewFilterBox = styled.div`
    ${flex({ alignItems: 'center' })};
    gap: 12px;
    height: 40px;
    padding: 0 10px 0 8px;
    border-radius: 6px;
    background: ${color.maruLightBlue};
`;
