import { calculator } from "../functions/functions";

test("add", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtract", () => {
  expect(calculator.subtract(7, 5)).toBe(2);
});

test("divide", () => {
  expect(calculator.divide(14, 2)).toBe(7);
});

test("divide", () => {
  expect(calculator.divide(15, 2)).toBe(7.5);
});

test("divide by 0", () => {
  expect(() => calculator.divide(10, 0)).toThrow(
    "Division by zero is not allowed!"
  );
});

test("multiply", () => {
  expect(calculator.multiply(7, 8)).toBe(56);
});

test("multiply", () => {
  expect(calculator.multiply(5.5, 2.5)).toBe(13.75);
});

test("multiply", () => {
  expect(calculator.multiply(5, 0)).toBe(0);
});
