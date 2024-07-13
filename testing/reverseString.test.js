import { reverseString } from "../functions/functions";

test("sea level", () => {
  expect(reverseString("sea level")).toBe("level aes");
});

test("I am from Bulgaria!", () => {
  expect(reverseString("I am from Bulgaria!")).toBe("!airagluB morf ma I");
});

test("Formula 1", () => {
  expect(reverseString("Formula 1")).toBe("1 alumroF");
});
