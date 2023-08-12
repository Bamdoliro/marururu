import ClipLoader from 'react-spinners/ClipLoader';
import { color } from '@maru/theme';
import styled from 'styled-components';

const Loading = () => {
    return (
        <SpinnerBox>
            <ClipLoader color={color.maruDefault} />
        </SpinnerBox>
    );
};

export default Loading;

const SpinnerBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
