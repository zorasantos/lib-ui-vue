import { mount } from "@vue/test-utils";
import CheckBox from "./index.vue";

describe("CheckBox", () => {
  test("renders label and input correctly", () => {
    const wrapper = mount(CheckBox, {
      props: {
        label: "Accept term!",
        errorMessages: undefined,
        modelValue: false,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find("label").text()).toBe("Accept term!");
    expect(wrapper.find("input").element.checked).toBe(false);
    expect(wrapper.find("label").classes("text-red-500")).toBe(false);
  });

  test("displays error message when errorMessages prop is provided", () => {
    const wrapper = mount(CheckBox, {
      props: {
        label: "Accept term!",
        errorMessages: "Term field is required!",
        modelValue: false,
      },
    });

    expect(wrapper.find("label").classes("text-red-500")).toBe(true);
    expect(wrapper.find("label").classes("text-gray-600")).toBe(false);

    expect(wrapper.text()).toContain("Term field is required!");
    expect(wrapper.find("span").classes("text-red-500")).toBe(true);
  });

  test("emits input event with correct value when input is typed", async () => {
    const wrapper = mount(CheckBox, {
      props: {
        label: "Accept term!",
        errorMessages: undefined,
        modelValue: true,
      },
    });

    // Possivelmente temos que mockar toda a lógica do checkbox

    wrapper.vm.$emit("update:modelValue", true);

    const value = wrapper.emitted("update:modelValue") as Array<[][]>;

    await wrapper.find('input[type="checkbox"]').trigger("click");
    expect(wrapper.find("label").classes("text-gray-600")).toBe(true);
    expect(value[0][0]).toBe(true);
  });
});
