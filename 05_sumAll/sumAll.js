const sumAll = function(num1, num2) {
    let sum = 0;
    if (num1 < 0 || num2 < 0 || !(Number.isInteger(num1)) || !(Number.isInteger(num2))) {
        return 'ERROR';
    } else if (num2 > num1) {
        let currentNum = num1;
        while (currentNum <= num2) {
            sum += currentNum;
            currentNum++;
        }
    } else if (num1 > num2) {
        let currentNum = num2;
        while (currentNum <= num1) {
            sum += currentNum;
            currentNum++;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
