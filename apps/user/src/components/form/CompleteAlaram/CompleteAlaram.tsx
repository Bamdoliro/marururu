import { CancelCircleIcon, CheckCircleIcon } from '@/components/common/Icons';
import { AppLayout } from '@/layouts';
import { font, color } from '@maru/theme';
import { Column } from '@maru/ui';
import styled from 'styled-components';

const CompleteAlaram = () => {
    const complete = true;
    return (
        <Column
            style={{ marginTop: '173px' }}
            width="100%"
            height="100%"
            gap={34}
            alignItems="center">
            {complete ? <CheckCircleIcon size={150} /> : <CancelCircleIcon size={150} />}
            <AlertMessage>
                {complete ? <p>원서 작성 완료!</p> : <p>아직 작성하지 않은 곳이 있어요</p>}
            </AlertMessage>
        </Column>
    );
};

export default CompleteAlaram;

const AlertMessage = styled.p`
    ${font.D2}
    color: ${color.gray900};
`;
