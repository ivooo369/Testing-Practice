import { capitalize } from "../functions/functions";

test("house", () => {
  expect(capitalize("house")).toBe("House");
});

test("cat", () => {
  expect(capitalize("cat")).toBe("Cat");
});

test("elephant", () => {
  expect(capitalize("elephant")).toBe("Elephant");
});
