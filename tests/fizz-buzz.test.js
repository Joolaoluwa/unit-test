import { describe, it, expect } from "vitest";
import { fizzBuzz, calculateAverage, factorial } from "../src/fizz-buzz.js";

describe("fizzBuzz", () => {
  it("should return 'FizzBuzz' for multiples of 3 and 5", () => {
    expect(fizzBuzz(45)).toBe("FizzBuzz");
  });
  it("should return 'Fizz' for multiples of 3", () => {
    expect(fizzBuzz(33)).toBe("Fizz");
  });
  it("should return 'Buzz' for multiples of 5", () => {
    expect(fizzBuzz(50)).toBe("Buzz");
  });
  it("should return 'Fizz' for multiples of 3 and 5", () => {
    expect(fizzBuzz(64)).toBe("64");
  });
});

describe("calculateAverage", () => {
  it("should return NaN", () => {
    expect(calculateAverage([])).toBe(NaN);
  });
  it("should return a single value", () => {
    expect(calculateAverage([1])).toBe(1);
  });
  it("should return a single value", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });
  it("should return a single value", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

describe("factorial", () => {
  it("should return 1 for 0", () => {
    expect(factorial(0)).toBe(1);
  });
  it("should return 'please enter a positive number' for negative numbers", () => {
    expect(factorial(-5)).toBe("please enter a positive number");
  });
  it("should return a positive integer", () => {
    expect(factorial(5)).toBe(120);
  });
  it("should return a positive integer", () => {
    expect(factorial(4)).toBe(24);
  });
});
