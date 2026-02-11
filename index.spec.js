//A capitalize function that takes a string and returns it with the first character capitalized.
import {
  capitalize,
  reverse,
  calculator,
  caesorCipher,
  wrappingEndAlphabets,
  analyzeArray
} from "./index.js";

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

describe("Reverse string", () => {
  it("String should be reversed", () => {
    let tests = [
      { input: "hello", output: "olleh" },
      { input: "kanye", output: "eynak" },
    ];
    tests.forEach((t) => {
      expect(reverse(t.input)).toBe(t.output);
    });
  });
});

describe("Calculator", () => {
  it("should exist", () => {
    expect(calculator).toBeDefined();
  });
  it("add method should exist", () => {
    expect(calculator.add).toBeDefined();
  });

  it("add two numbers", () => {
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.add(4, 6)).toBe(10);
  });

  it("divide should exist", () => {
    expect(calculator.divide).toBeDefined();
  });
  it("divide should be a method", () => {
    expect(typeof calculator.divide).toBe("function");
  });

  it("divide two numbers", () => {
    let tests = [
      { n1: 10, n2: 2, output: 5 },
      { n1: 8, n2: 5, output: 1.6 },
      { n1: 100, n2: 0, output: undefined },
      { n1: 0, n2: 100, output: 0 },
    ];
    tests.forEach((t) => {
      expect(calculator.divide(t.n1, t.n2)).toBe(t.output);
    });
  });

  it("multiply should exist", () => {
    expect(calculator.multiply).toBeDefined();
  });
  it("multiply should be a method", () => {
    expect(typeof calculator.multiply).toBe("function");
  });
  it("multiply two numbers", () => {
    expect(calculator.multiply(2, 4)).toBe(8);
    expect(calculator.multiply(5, 1.78)).toBe(8.9);
  });
});

describe("Caesor Cipher", () => {
  it("should exist", () => {
    expect(caesorCipher).toBeDefined();
  });
  it("should be a function", () => {
    expect(typeof caesorCipher).toBe("function");
  });

  it("should shift characters by 3", () => {
    expect(caesorCipher("xyz", 3)).toBe("abc");
    expect(caesorCipher("abc", 3)).toBe("def");
  });

  it("should wrap from z to a", () => {
    expect(wrappingEndAlphabets("z", 3)).toBe("c");
    expect(wrappingEndAlphabets("x", 3)).toBe("a");
  });

  it("should follow the original lettercase", () => {
    expect(caesorCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    expect(caesorCipher("HeLLo", 3)).toBe("KhOOr");
  });
});

describe("Analyze Array", () => {
  it("should exist", () => {
    expect(analyzeArray).toBeDefined();
  });

  it("should be a function",()=>{
    expect(typeof analyzeArray).toBe("function")
  })

  it("should return an object",()=>{
    expect(typeof analyzeArray()).toBe("object")
  })
});
