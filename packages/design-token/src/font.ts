import { css } from 'styled-components';

const fontGenerator = (
  weight: number,
  size: number,
  lineHeight: number,
  letterSpacing: number
) => css`
  font-family: 'Pretendard';
  font-weight: ${weight};
  font-size: ${size}rem;
  line-height: ${lineHeight}%;
  letter-spacing: ${letterSpacing}px;
`;

const font = {
  D1: fontGenerator(700, 4.5, 130, -1.5),
  D2: fontGenerator(700, 3.75, 130, -0.5),
  D3: fontGenerator(700, 3, 130, 0),

  H1: fontGenerator(700, 2.25, 140, 0.25),
  H2: fontGenerator(700, 1.75, 140, 0),
  H3: fontGenerator(600, 1.5, 140, 0.15),
  H4: fontGenerator(600, 1.25, 140, 0.15),
  H5: fontGenerator(500, 1.125, 140, 0.15),

  p1: fontGenerator(400, 1.125, 140, -0.15),
  p2: fontGenerator(400, 1, 160, 0),
  p3: fontGenerator(400, 0.875, 160, -0.014),

  btn1: fontGenerator(600, 1.125, 130, 0),
  btn2: fontGenerator(500, 1, 130, 0),
  btn3: fontGenerator(500, 0.875, 130, 0),

  caption: fontGenerator(400, 0.75, 140, 0),
  context: fontGenerator(500, 1, 130, 0),
  code: fontGenerator(400, 1, 130, 0),
  form: fontGenerator(400, 1, 180, 0),
};

export default font;
