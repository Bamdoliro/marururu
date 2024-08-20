import { color, font } from '@maru/design-token';
import { useBooleanState, useOutsideClick } from '@maru/hooks';
import { IconArrowBottom, IconArrowTop } from '@maru/icon';
import { flex } from '@maru/utils';
import React, { useState } from 'react';
import type { FC } from 'react';
import styled, { css } from 'styled-components';
import Text from '../Text/Text';

type DropdownSizeOption = 'MEDIUM' | 'SMALL';

interface Data {
  value: string;
  label: string;
  children?: Data[];
  onChange?: (value: string) => void;
  setNext?: boolean;
}

interface Props {
  label?: string;
  data: Data[];
  width?: number;
  size?: DropdownSizeOption;
  value?: string;
  onChange: (value: string, name: string) => void;
  name: string;
  placeholder?: string;
}

const SubDropdown: FC<Props> = ({
  label,
  data,
  width = 320,
  size = 'MEDIUM',
  value = '',
  onChange,
  name,
  placeholder,
}) => {
  const {
    value: isOpen,
    setFalse: closeDropdown,
    toggle: handleToggleButtonClick,
  } = useBooleanState();
  const dropdownRef = useOutsideClick(closeDropdown);
  const [selectedParent, setSelectedParent] = useState<string | null>(null);
  const [isSubOpen, setIsSubOpen] = useState<boolean>(false);

  const handleDropdownItemButtonClick = (
    value: string,
    children?: Data[],
    itemOnChange?: (value: string) => void
  ) => {
    if (children && children.length > 0) {
      setSelectedParent(value);
      setIsSubOpen(true);
    } else {
      if (itemOnChange) {
        itemOnChange(value);
      } else {
        onChange(value, name);
      }
      closeDropdown();
      setIsSubOpen(false);
    }
  };

  const handleDropdownItemButtonClickSubData = (value: string) => {
    onChange(value, name);
    closeDropdown();
    setIsSubOpen(false);
  };

  return (
    <div ref={dropdownRef} style={{ width, position: 'relative' }}>
      {label && <Label>{label}</Label>}
      <StyledDropdown size={size} onClick={handleToggleButtonClick} $isOpen={isOpen}>
        <Text fontType="p2" color={value ? color.gray900 : color.gray500}>
          {value || placeholder}
        </Text>
        {isOpen ? (
          <IconArrowTop color={color.gray600} width={24} height={24} />
        ) : (
          <IconArrowBottom color={color.gray600} width={24} height={24} />
        )}
      </StyledDropdown>
      <DropdownListBox $isOpen={isOpen}>
        <DropdownList $isMultiple={data.length > 7}>
          {data.map((item, index) => (
            <DropdownItem
              key={`dropdown ${index}`}
              onClick={() =>
                handleDropdownItemButtonClick(item.value, item.children, item.onChange)
              }
            >
              {item.label}
              {item.children && item.children.length > 0}
            </DropdownItem>
          ))}
        </DropdownList>
        {selectedParent && (
          <ChildDropdown
            data={data.find((item) => item.value === selectedParent)?.children || []}
            onChange={handleDropdownItemButtonClickSubData}
            name={name}
            isOpen={isSubOpen}
            setIsSubOpen={setIsSubOpen}
            width={width}
          />
        )}
      </DropdownListBox>
    </div>
  );
};

interface ChildDropdownProps {
  data: Data[];
  onChange: (value: string, name: string) => void;
  name: string;
  isOpen: boolean;
  setIsSubOpen: (open: boolean) => void;
  width?: number;
}

const ChildDropdown: FC<ChildDropdownProps> = ({
  data,
  onChange,
  name,
  isOpen,
  setIsSubOpen,
  width,
}) => {
  const dropdownRef = useOutsideClick(() => setIsSubOpen(false));

  const handleDropdownItemButtonClick = (value: string) => {
    onChange(value, name);
    setIsSubOpen(false);
  };

  return (
    <ChildDropdownListBox ref={dropdownRef} $isOpen={isOpen}>
      <DropdownList width={width} $isMultiple={data.length > 7}>
        {data.map((item, index) => (
          <DropdownItem
            key={`child-dropdown ${index}`}
            onClick={() => handleDropdownItemButtonClick(item.value)}
          >
            {item.label}
          </DropdownItem>
        ))}
      </DropdownList>
    </ChildDropdownListBox>
  );
};

const Label = styled.p`
  ${font.context}
  color: ${color.gray700};
  margin-bottom: 8px;
`;

const StyledDropdown = styled.div<{ $isOpen: boolean; size: DropdownSizeOption }>`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
  width: 178px;
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
        `};

  ${(props) =>
    props.size === 'MEDIUM'
      ? css`
          height: 48px;
          padding: 10px 16px;
        `
      : css`
          height: 40px;
          padding: 10px 10px 10px 16px;
        `};
`;

const DropdownListBox = styled.div<{ $isOpen: boolean }>`
  position: relative;
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
`;

const ChildDropdownListBox = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  left: 178px;
  top: 0;
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  width: 280px;
`;

const DropdownList = styled.div<{
  $isMultiple?: boolean;
  width?: number;
}>`
  z-index: 1;
  position: absolute;
  margin-top: 8px;
  padding: 8px 0px;
  width: ${(props) => (props.width !== undefined ? `${props.width}px` : '178px')};
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: grid;
  grid-template-columns: ${(props) => (props.$isMultiple ? '1fr 1fr' : '1fr')};
  gap: 4px;
`;

const DropdownItem = styled.button`
  ${flex({ alignItems: 'center' })}
  padding: 10px 16px;
  height: 48px;
  text-align: left;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${color.gray200};
  }
`;

export default SubDropdown;
