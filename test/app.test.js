import { test, suite } from "node:test";
import assert from "node:assert";
import { greet, greetInRussian } from "../app.js";

// AAA concept to structure a test
// Arrange
// Act
// Assert



suite("Greeting functions", () => {
    test("that greet returns the correct greeting in english", () => {


        const expected = "Hello, World!";
        const actual = greet("World");

        assert.strictEqual(actual, expected);
    })

    test("that greet returns the correct greeting in russian", () => {

        const expected = "привет, World!";
        const actual = greetInRussian("World");

        assert.strictEqual(actual, expected);
    })
}) 