import type { Meta, StoryObj } from '@storybook/react';
import SideMenu from './SideMenu';

export default {
  component: SideMenu,
  title: 'SideMenu',
  tags: ['autodocs'],
} as Meta<typeof SideMenu>;

export const Default: StoryObj<typeof SideMenu> = {
  args: {
    children: '교과 성적',
  },
};

export const Active: StoryObj<typeof SideMenu> = {
  args: {
    children: '교과 성적',
    active: true,
  },
};
