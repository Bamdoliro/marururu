import { IconCancelCircle, IconCheck, IconCheckCircle, IconClose } from '@maru/icon';
import { color, font } from '@maru/theme';
import { Column } from '@maru/ui';
import styled from 'styled-components';

interface PropsType {
    isFilledForm: boolean;
}

const CompleteAlaram = ({ isFilledForm }: PropsType) => {
    return (
        <Column
            style={{ marginTop: '173px' }}
            width="100%"
            height="100%"
            gap={34}
            alignItems="center">
            {isFilledForm ? (
                <IconCheckCircle width={150} height={150} />
            ) : (
                <IconCancelCircle width={150} height={150} />
            )}
            <AlertMessage>
                {isFilledForm ? <p>원서 초안 작성 완료</p> : <p>아직 작성하지 않은 곳이 있어요</p>}
            </AlertMessage>
        </Column>
    );
};

export default CompleteAlaram;

const AlertMessage = styled.p`
    ${font.D2}
    color: ${color.gray900};
`;
