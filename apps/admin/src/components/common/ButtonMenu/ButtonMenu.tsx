import { useBooleanState, useOutsideClick } from '@maru/hooks';
import { IconArrowBottom, IconArrowTop } from '@maru/icon';
import { color } from '@maru/theme';
import { Text } from '@maru/ui';
import { flex } from '@maru/utils';
import type { CSSProperties, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  width?: CSSProperties['width'];
  menuItemList: ReactNode[];
}

const ButtonMenu = ({ width, menuItemList = [] }: Props) => {
  const {
    value: isOpen,
    setFalse: closeMenu,
    toggle: handleToggleButtonClick,
  } = useBooleanState();

  const menuRef = useOutsideClick(closeMenu);

  return (
    <div style={{ width: 120 }} ref={menuRef}>
      <StyledButtonMenu $isOpen={isOpen} onClick={handleToggleButtonClick}>
        <Text fontType="p2" color={color.gray700}>
          추가 기능
        </Text>
        {isOpen ? (
          <IconArrowTop color={color.gray600} width={24} height={24} />
        ) : (
          <IconArrowBottom color={color.gray600} width={24} height={24} />
        )}
      </StyledButtonMenu>
      <MenuListBox $isOpen={isOpen}>
        <MenuList style={{ width }}>
          {menuItemList.map((menuItem) => (
            <MenuItem onClick={closeMenu}>{menuItem}</MenuItem>
          ))}
        </MenuList>
      </MenuListBox>
    </div>
  );
};

export default ButtonMenu;

const StyledButtonMenu = styled.div<{ $isOpen: boolean }>`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
  width: 100%;
  height: 40px;
  padding: 0 10px 0 16px;
  background-color: ${color.white};
  border-radius: 6px;
  cursor: pointer;

  ${(props) =>
    props.$isOpen
      ? css`
          border: 1px solid ${color.maruDefault};
          outline: 2px solid rgba(20, 112, 255, 0.25);
        `
      : css`
          border: 1px solid ${color.gray400};
        `}
`;

const MenuListBox = styled.div<{ $isOpen: boolean }>`
  position: relative;
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
`;

const MenuList = styled.div`
  z-index: 1;
  position: absolute;
  right: 0;
  margin-top: 8px;
  padding: 8px;
  min-width: 120px;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
`;

const MenuItem = styled.div`
  width: 100%;
  height: 44px;
  cursor: pointer;
`;
