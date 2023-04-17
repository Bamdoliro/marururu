import styled, { css } from "styled-components";
import { font } from "styles/text.style";
import { color } from "styles/theme.style";

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 8px;
`;

export const DropdownMenuBox = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 48px;
  width: 100%;
  padding: 10px 16px;

  background-color: ${color.white};
  border-radius: 6px;
  cursor: pointer;

  ${({ isOpen }) =>
    isOpen
      ? css`
          border: 1px solid ${color.maruDefault};
          outline: 2px solid rgba(20, 112, 255, 0.25);
        `
      : css`
          border: 1px solid ${color.gray400};
        `};
`;

export const DropdownMenuText = styled.p`
  ${font.p2}
  color: ${color.gray500};
`;

export const Img = styled.img`
  width: 14px;
  height: 14px;
`;

export const DropdownMenuList = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding: 8px 0px;
  width: 100%;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;

export const DropdownMenuItem = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  width: 100%;
  height: 48px;
  cursor: pointer;
  &:hover {
    background-color: ${color.gray200};
  }
`;
