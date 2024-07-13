import { analyzeArray } from "../functions/functions";

test("analyzeArray function with positive numbers only", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyzeArray function with empty array", () => {
  const result = analyzeArray([]);
  expect(result).toEqual({
    average: NaN,
    min: undefined,
    max: undefined,
    length: 0,
  });
});

test("analyzeArray function with array including negative numbers", () => {
  const result = analyzeArray([1, -5, 8, -3, 0, 4]);
  expect(result).toEqual({
    average: 0.83,
    min: -5,
    max: 8,
    length: 6,
  });
});
