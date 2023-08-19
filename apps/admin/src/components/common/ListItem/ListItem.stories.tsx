import { Row, Text } from "@maru/ui";
import type { Meta, StoryObj } from "@storybook/react";
import ListItem from "./ListItem";

export default {
    component: ListItem,
    title: "ListItem",
    tags: ["autodocs"],
} satisfies Meta<typeof ListItem>;

export const Default: StoryObj<typeof ListItem> = {
    args: {
        children: <>
            <Row gap={48}>
                <Text fontType="p2" width={60}>1002</Text>
                <Text fontType="p2" width={60}>신준서</Text>
                <Text fontType="p2" width={60}>080815</Text>
                <Text fontType="p2" width={160}>해운대중학교</Text>
                <Text fontType="p2" width={240}>국가보훈대상자 중 교육지원대상자녀</Text>
            </Row>
            <Text fontType="p2" width={80}>승인됨</Text>
        </>
    },
};