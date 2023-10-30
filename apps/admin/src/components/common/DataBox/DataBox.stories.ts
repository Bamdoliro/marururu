import type { Meta, StoryObj } from '@storybook/react';
import DataBox from './DataBox';

export default {
  component: DataBox,
  title: 'DataBox',
  tags: ['autodocs'],
} as Meta<typeof DataBox>;

export const Default: StoryObj<typeof DataBox> = {
  args: {
    label: '이름',
    data: '문경자',
  },
};
