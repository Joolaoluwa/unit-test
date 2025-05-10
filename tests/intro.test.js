import { describe, it, expect } from "vitest";
import { max } from "../src/intro";

describe("max", () => {
  it("This should return the first argument if it is greater", () => {
    expect(max(20, 10)).toBe(20);
  });
  it("This should return the second argument if it is greater or equal to", () => {
    expect(max(20, 20)).toBe(20);
  });
});

// Arrange
// Act
// Assert
