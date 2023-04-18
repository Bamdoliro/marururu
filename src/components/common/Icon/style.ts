import styled from "styled-components";

export const Icon = styled.img<{ cursor: Boolean }>`
  cursor: ${(cursor) => cursor && "pointer"};
`;
