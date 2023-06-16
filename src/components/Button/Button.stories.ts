import type { Meta, StoryObj } from "@storybook/vue3";

import Button from "./Button.vue";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Button",
    loading: false,
    block: false,
  },
};
