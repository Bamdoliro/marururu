import { color, font } from '@maru/design-token';
import { useBooleanState, useOutsideClick } from '@maru/hooks';
import { IconArrowBottom, IconArrowTop } from '@maru/icon';
import { flex } from '@maru/utils';
import type { CSSProperties } from 'react';
import React from 'react';
import styled, { css } from 'styled-components';
import Text from '../Text/Text';

type DropdownSizeOption = 'MEDIUM' | 'SMALL';

interface Data {
  value: string;
  label: string;
}

interface Props {
  label?: string;
  data: Data[] | string[];
  width?: CSSProperties['width'];
  size?: DropdownSizeOption;
  value?: string;
  onChange: (value: string, name: string) => void;
  name: string;
  placeholder?: string;
  doubled?: number;
  isError?: boolean;
  disabled?: boolean;
  background?: 'White' | 'Gray';
}

const Dropdown = ({
  label,
  data,
  width = '320px',
  size = 'MEDIUM',
  value = '',
  onChange,
  name,
  placeholder,
  doubled,
  isError = false,
  background = 'White',
  disabled = false,
}: Props) => {
  const {
    value: isOpen,
    setFalse: closeDropdown,
    toggle: handleToggleButtonClick,
  } = useBooleanState();
  const dropdownRef = useOutsideClick(closeDropdown);

  const handleDropdownItemButtonClick = (data: string) => {
    if (!disabled) {
      onChange(data, name);
      closeDropdown();
    }
  };

  const handleDropdownClick = () => {
    if (!disabled) {
      handleToggleButtonClick();
    }
  };

  return (
    <div ref={dropdownRef} style={{ width }}>
      {label && <Label>{label}</Label>}
      <StyledDropdown
        size={size}
        onClick={handleDropdownClick}
        $isOpen={isOpen}
        isError={isError}
        background={background}
        disabled={disabled}
      >
        <Text fontType="p2" color={value ? color.gray900 : color.gray500} ellipsis={true}>
          {value || placeholder}
        </Text>
        {isOpen ? (
          <IconArrowTop color={color.gray600} width={24} height={24} />
        ) : (
          <IconArrowBottom color={color.gray600} width={24} height={24} />
        )}
      </StyledDropdown>
      <DropdownListBox $isOpen={isOpen && !disabled}>
        <DropdownList $isMultiple={data.length > (doubled ?? 100)}>
          {data?.map((item, index) => {
            const isString = typeof item === 'string';
            const dropdownLabel = isString ? item : item.label;
            const dropdownValue = isString ? item : item.value;
            return (
              <DropdownItem
                key={`dropdown ${index}`}
                onClick={() => handleDropdownItemButtonClick(dropdownValue)}
              >
                {dropdownLabel}
              </DropdownItem>
            );
          })}
        </DropdownList>
      </DropdownListBox>
    </div>
  );
};

export default Dropdown;

const Label = styled.p`
  ${font.context}
  color: ${color.gray700};
  margin-bottom: 8px;
`;

const StyledDropdown = styled.div<{
  $isOpen: boolean;
  size: DropdownSizeOption;
  isError: boolean;
  background: 'White' | 'Gray';
  disabled: boolean;
}>`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
  width: 100%;
  border-radius: 6px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) =>
    props.background === 'White' ? `${color.white}` : `${color.gray100}`};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  ${(props) =>
    props.$isOpen && !props.disabled
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
        `}

  ${(props) =>
    props.isError &&
    css`
      border: 1px solid ${color.red};
      outline: 2px solid rgba(244, 67, 54, 0.25);

      &:focus {
        border: 1px solid ${color.red};
        outline: 2px solid rgba(244, 67, 54, 0.25);
      }
    `}
`;

const DropdownListBox = styled.div<{ $isOpen: boolean }>`
  position: relative;
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
`;

const DropdownList = styled.div<{ $isMultiple?: boolean }>`
  display: grid;
  z-index: 1;
  position: absolute;
  margin-top: 8px;
  padding: 8px 0px;
  width: ${(props) => (props.$isMultiple ? '200%' : '100%')};
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  grid-template-columns: ${(props) => (props.$isMultiple ? '1fr 1fr' : '1fr')};
  border-radius: 6px;
`;

const DropdownItem = styled.button`
  ${flex({ alignItems: 'center' })}
  padding: 10px 16px;
  width: 100%;
  height: 48px;
  text-align: left;

  cursor: pointer;
  &:hover {
    background-color: ${color.gray200};
  }
`;
