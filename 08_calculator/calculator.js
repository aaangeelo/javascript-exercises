const add = function (...number) {
  let sum = 0;
  for (num of number) {
    sum += num;
  }
  return sum;
};

const subtract = function (...number) {
  return number.reduce((diff, num) => diff - num);
};

const sum = function (numbers) {
  return numbers.length === 0 ? 0 : numbers.reduce((sum, num) => sum + num);
};

const multiply = function (numbers) {
  return numbers.reduce((product, num) => product * num);
};

const power = function (...numbers) {
  return numbers.reduce((power, powerator) => power ** powerator);
};

const factorial = function (number) {
  if (number === 0) return 1;
  else {
  }
  let numbers = [];
  for (i = 1; i <= number; i++) {
    numbers.push(i);
  }
  return numbers.reduce((product, num) => product * num);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
