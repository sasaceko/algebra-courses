const findMax = require("../script");

var numbers = [1, 5, 10, 15, 40];

test("Najveca vrijdnost niza", () => {
    expect(findMax(numbers)).toBe(40);
})