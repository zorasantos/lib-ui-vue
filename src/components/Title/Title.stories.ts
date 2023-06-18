import type { Meta, StoryObj } from "@storybook/vue3";

import Title from "./Title.vue";

const meta = {
  title: "Title",
  component: Title,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    name: "Page Title",
  },
};
