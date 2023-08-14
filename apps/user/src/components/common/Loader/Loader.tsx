import ClipLoader from 'react-spinners/ClipLoader';
import { color } from '@maru/theme';
import styled from 'styled-components';

const Loader = () => {
    return (
        <SpinnerBox>
            <ClipLoader color={color.maruDefault} />
        </SpinnerBox>
    );
};

export default Loader;

const SpinnerBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
