import { IconCheckDocument, IconEditDocument, IconPrint, IconUpload } from '@maru/icon';
import { color } from '@maru/design-token';
import { Text } from '@maru/ui';
import type { Meta, StoryObj } from '@storybook/react';
import ButtonMenu from './ButtonMenu';
import ButtonMenuItem from './ButtonMenuItem/ButtonMenuItem';

export default {
  component: ButtonMenu,
  title: 'ButtonMenu',
  tags: ['autodocs'],
} as Meta<typeof ButtonMenu>;

export const Default: StoryObj<typeof ButtonMenu> = {
  args: {
    menuItemList: [
      <ButtonMenuItem>
        <IconCheckDocument color={color.gray600} width={24} height={24} />
        <Text fontType="p2" color={color.gray900}>
          검토해야 하는 원서 모아보기
        </Text>
      </ButtonMenuItem>,
      <ButtonMenuItem>
        <IconEditDocument color={color.gray600} width={24} height={24} />
        <Text fontType="p2" color={color.gray900}>
          2차 전형 점수 입력하기
        </Text>
      </ButtonMenuItem>,
      <ButtonMenuItem>
        <IconUpload color={color.gray600} width={24} height={24} />
        <Text fontType="p2" color={color.gray900}>
          명단 엑셀로 내보내기
        </Text>
      </ButtonMenuItem>,
      <ButtonMenuItem>
        <IconPrint color={color.gray600} width={24} height={24} />
        <Text fontType="p2" color={color.gray900}>
          원서 출력하기
        </Text>
      </ButtonMenuItem>,
    ],
  },
};
