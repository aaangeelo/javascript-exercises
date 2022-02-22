const fibonacci = function (number) {
  if (number < 0) return "OOPS";
  let numbers = [1, 1];
  for (i = 2; i < number; i++) {
    let lastNum = numbers[numbers.length - 1];
    let secondLast = numbers[numbers.length - 2];
    numbers.push(lastNum + secondLast);
  }
  return numbers.pop();
};

// Do not edit below this line
module.exports = fibonacci;
// console.log(fibonacci(15));
