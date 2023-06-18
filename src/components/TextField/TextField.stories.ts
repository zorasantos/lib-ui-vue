import type { Meta, StoryObj } from "@storybook/vue3";

import TextField from "./TextField.vue";

const meta = {
  title: "TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: "Name",
    id: "name",
    errorMessages: "",
  },
};

export const WithError: Story = {
  args: {
    label: "Name",
    id: "name",
    errorMessages: "Name is field required!",
  },
};
