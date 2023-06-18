import { mount } from "@vue/test-utils";
import HelloWorld from "./Title.vue";
describe("HelloWorld", () => {
  test("renders message", () => {
    const name = "Hello world";
    const wrapper = mount(HelloWorld, {
      props: {
        name,
      },
    });
    expect(wrapper.text()).toContain(name);
  });
});
