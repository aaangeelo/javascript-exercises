const sumAll = function(num1, num2) {
    let sum = 0;
    if (num2 > num1) {
        for (let i = num1; num1 <= num2; i++) {
            sum += num1
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
