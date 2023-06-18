import { mount } from "@vue/test-utils";
import TextField from "./TextField.vue";
import { ref } from "vue";

describe("TextField", () => {
  test("render label and input correctly", () => {
    const wrapper = mount(TextField, {
      props: {
        label: "Name",
        id: "name",
        type: "text",
        errorMessages: undefined,
        modelValue: "Test Name",
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find("label").text()).toBe("Name");
    expect(wrapper.find("input").element.value).toBe("Test Name");
    expect(wrapper.find("label").classes("text-red-500")).toBe(false);
  });

  test.skip("displays error message when errorMessages prop is provided", async () => {
    const inputFocus = ref(false);
    const handleFocus = () => {
      inputFocus.value = true;
    };
    const handleBlur = () => {
      inputFocus.value = false;
    };
    const wrapper = mount(TextField, {
      props: {
        label: "Nome",
        id: "Name",
        type: "email",
        errorMessages: "Nome é um campo obrigatório!",
        modelValue: "",
      },
      global: {
        provide: {
          inputFocus,
          handleFocus,
          handleBlur,
        },
      },
    });

    await wrapper.find("input").trigger("focus");
    expect(wrapper.find("label").classes("text-red-500")).toBe(true);
    expect(wrapper.find("label").classes("text-gray-600")).toBe(false);

    expect(wrapper.text()).toContain("Nome é um campo obrigatório!");
    expect(wrapper.find("span").classes("text-red-500")).toBe(true);
  });

  test("emits input event with correct value when input is typed", async () => {
    const wrapper = mount(TextField, {
      props: {
        label: "Name",
        id: "name",
        type: "text",
        errorMessages: undefined,
        modelValue: "",
      },
    });

    await wrapper.find("input").setValue("John Doe");

    const value = wrapper.emitted("update:modelValue") as Array<[][]>;

    expect(wrapper.emitted("update:modelValue")).toHaveLength(1);
    expect(value[0][0]).toBe("John Doe");
  });
});
