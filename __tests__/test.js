'use strict';

const {
  add,
  divide,
  printName,
} = require('../build/index');

test('make sure the first name plus the last name equal the full name', () => {
  expect(printName("Hannah", "Seligson")).toBe("Hannah Seligson");
});

test('make sure we can add two numbers', () => {
  expect(add(1, 2)).toBe(3);
});

test('make sure we can handle divide by 0', () => {
  expect(divide(1, 0)).toBe(0);
});
