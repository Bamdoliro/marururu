import type { Meta, StoryObj } from '@storybook/react';
import SideBar from './SideBar';

export default {
  component: SideBar,
  title: 'SideBar',
  tags: ['autodocs'],
} as Meta<typeof SideBar>;

export const Default: StoryObj<typeof SideBar> = {
  args: {},
};
