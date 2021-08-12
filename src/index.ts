const printName = (firstName: string, lastName: string) => {
    const fullName = firstName + " " + lastName;
    console.log(fullName);
    return fullName;
}

const add = (firstNumber: number, secondNumber: number) => {
    return firstNumber + secondNumber
}

const subtract = (firstNumber: number, secondNumber: number) => {
    return firstNumber - secondNumber
}

const divide = (firstNumber: number, secondNumber: number) => {
    if (secondNumber === 0) {
      return 0
    }
    return firstNumber/secondNumber;
}

module.exports = {
  add,
  divide,
  printName,
  subtract,
}
