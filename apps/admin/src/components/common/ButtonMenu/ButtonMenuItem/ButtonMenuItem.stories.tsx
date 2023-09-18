import type { Meta, StoryObj } from "@storybook/react";
import ButtonMenuItem from "./ButtonMenuItem";

export default {
    component: ButtonMenuItem,
    title: "ButtonMenuItem",
    tags: ["autodocs"],
} satisfies Meta<typeof ButtonMenuItem>;

export const Default: StoryObj<typeof ButtonMenuItem> = {
    args: {
        children: '이것은 버튼 메뉴 아이템입니다~~'
    },
};