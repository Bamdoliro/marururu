import { color } from '@maru/design-token';
import type { CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';

interface Props {
  top?: CSSProperties['top'];
  left?: CSSProperties['left'];
}

const Loader = ({ top = '50%', left = '50%' }: Props) => {
  return (
    <SpinnerBox top={top} left={left}>
      <ClipLoader color={color.maruDefault} />
    </SpinnerBox>
  );
};

export default Loader;

const SpinnerBox = styled.div<{ top: CSSProperties['top']; left: CSSProperties['left'] }>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: translate(-50%, -50%);
`;
