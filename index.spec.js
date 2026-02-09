//A capitalize function that takes a string and returns it with the first character capitalized.
import { capitalize,reverse } from "./index.js";

describe("Capitalize", () => {
  it("First character should be capitalized", () => {
    let testCases = [
      { input: "helloworld", output: "Helloworld" },
      { input: "basant", output: "Basant" },
      { input: "lahore", output: "Lahore" },
    ];
    testCases.forEach(function (t) {
      expect(capitalize(t.input)).toBe(t.output);
    });
  });
});

describe("Reverse string",()=>{

it("String should be reversed",()=>{

    expect(reverse("hello")).toBe('olleh')
    expect(reverse("kanye")).toBe("eynak")

})

})


