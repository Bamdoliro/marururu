import { font } from '@maru/design-token';
import React from 'react';
import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Font = keyof typeof font;

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  color?: CSSProperties['color'];
  fontType: Font;
  width?: CSSProperties['width'];
  textAlign?: CSSProperties['textAlign'];
  ellipsis?: boolean;
  whiteSpace?: CSSProperties['whiteSpace'];
  tag?: 'span' | 'p';
}

const Text = ({
  children,
  color,
  fontType,
  textAlign,
  width,
  ellipsis = false,
  whiteSpace = 'nowrap',
  tag = 'span',
}: Props) => {
  return (
    <StyledText
      style={{ color, textAlign, width, whiteSpace }}
      fontType={fontType}
      as={tag}
      ellipsis={ellipsis}
    >
      {children}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.span<{ fontType: Font; ellipsis: boolean }>`
  ${({ fontType }) => font[fontType]}
  ${(props) =>
    props.ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;
