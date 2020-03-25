import { formatListForAutoSelect, formatListForApi } from "../helpers";

const formattedForSelect = [
  { value: "1", text: "Front-End" },
  { value: "2", text: "Back-End" }
];
const formattedForApi = [
  { id: "1", description: "Front-End" },
  { id: "2", description: "Back-End" }
];

describe("Test helper fns", () => {
  it("Test formatListForAutoSelect", () => {
    const value = formatListForAutoSelect(formattedForApi);

    const expected = formattedForSelect;
    expect(value).toEqual(expected);
  });
  it("Test formatListForApi", () => {
    const value = formatListForApi(formattedForSelect);

    const expected = formattedForApi;
    expect(value).toEqual(expected);
  });
});

// Vue Unit Test Example

// import { shallowMount } from "@vue/test-utils";
// import HelloWorld from "@/components/HelloWorld.vue";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });
