import { mount } from "@vue/test-utils";
import Button from "./Button.vue";
describe("Button", () => {
  test("render default button", () => {
    const wrapper = mount(Button, {
      props: {
        label: "Login",
        loading: false,
        block: false,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find("button").text()).toBe("Login");
    expect(wrapper.find("button").classes("bg-blue-600")).toBe(true);
    expect(wrapper.find("button").classes("w-full")).toBe(false);
  });

  test("render the button with loading spinner if loading property true", () => {
    const wrapper = mount(Button, {
      props: {
        label: "Login",
        loading: true,
        block: false,
      },
    });

    expect(wrapper.find("button span").exists()).toBe(false);
    expect(wrapper.find("button div").exists()).toBe(true);
    expect(wrapper.find("button").classes("bg-gray-200")).toBe(true);
  });

  test("render large button if block property true", () => {
    const wrapper = mount(Button, {
      props: {
        label: "Submit",
        loading: false,
        block: true,
      },
    });

    expect(wrapper.find("button").text()).toBe("Submit");
    expect(wrapper.find("button").classes("bg-blue-600")).toBe(true);
    expect(wrapper.find("button").classes("w-full")).toBe(true);
  });
});
