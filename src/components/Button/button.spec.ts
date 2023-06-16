import { mount } from "@vue/test-utils";
import Button from "./Button.vue";
describe.skip("Button", () => {
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
  });

  test("renders the button with loading spinner when loading", () => {
    const wrapper = mount(Button, {
      props: {
        label: "Login",
        loading: false,
        block: false,
      },
    });

    expect(wrapper.find("button span").exists()).toBe(false);
    expect(wrapper.find("button div").exists()).toBe(true);
    expect(wrapper.find("button").classes("bg-gray-200")).toBe(true);
  });

  test("renders the button when add style", () => {
    const wrapper = mount(Button, {
      props: {
        label: "Login",
        loading: false,
        block: false,
      },
    });

    expect(wrapper.find("button").text()).toBe("Submit");
    expect(wrapper.find("button").classes("bg-blue-600")).toBe(true);
    expect(wrapper.find("button").classes("cursor-auto")).toBe(true);
  });
});
