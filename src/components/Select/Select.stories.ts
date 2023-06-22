import type { Meta, StoryObj } from "@storybook/vue3";

import Select from "./Select.vue";

const meta = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Gender",
    items: [
      { name: "Masculino", value: "M" },
      { name: "Feminino", value: "F" },
    ],
    errorMessages: "",
  },
};

export const WithError: Story = {
  args: {
    label: "Gender",
    items: [
      { name: "Masculino", value: "M" },
      { name: "Feminino", value: "F" },
    ],
    errorMessages: "Gender is field required!",
  },
};
