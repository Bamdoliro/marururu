import { color } from '@maru/design-token';
import { styled } from 'styled-components';

export const Separator = styled.hr`
  border: 1px solid ${color.gray400};
  margin: 16px 0;
  width: 82%;
`;

export const PrivacyCenter = styled.div`
  width: 100%;
  padding-left: 355px;
  margin: 0;
`;

export const BigPaddingHeight = styled.div`
  padding-top: 50px;
`;

export const SmallPaddingHeight = styled.div`
  padding-top: 8px;
`;
