import { Row, Text } from '@maru/ui';
import type { Meta, StoryObj } from '@storybook/react';
import ListHeader from './TableHeader';

export default {
  component: ListHeader,
  title: 'ListHeader',
  tags: ['autodocs'],
} as Meta<typeof ListHeader>;

export const Default: StoryObj<typeof ListHeader> = {
  args: {
    children: (
      <>
        <Row gap={48}>
          <Text fontType="p2" width={60}>
            접수번호
          </Text>
          <Text fontType="p2" width={60}>
            이름
          </Text>
          <Text fontType="p2" width={60}>
            생년월일
          </Text>
          <Text fontType="p2" width={160}>
            학교
          </Text>
          <Text fontType="p2" width={240}>
            전형
          </Text>
        </Row>
        <Text fontType="p2" width={80}>
          상태
        </Text>
      </>
    ),
  },
};
