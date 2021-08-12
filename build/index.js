"use strict";
var printName = function (firstName, lastName) {
    var fullName = firstName + " " + lastName;
    console.log(fullName);
    return fullName;
};
var add = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};
var subtract = function (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
};
var divide = function (firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return 0;
    }
    return firstNumber / secondNumber;
};
module.exports = {
    add: add,
    divide: divide,
    printName: printName,
    subtract: subtract,
};
//# sourceMappingURL=index.js.map