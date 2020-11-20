'use strict';

const printName = require('../build/src/index');

test('make sure the first name plust the last name equal the full name', () => {
  expect(printName("Hanna", "Baum")).toBe("Hanna Baum");
});