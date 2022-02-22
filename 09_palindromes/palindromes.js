const palindromes = function (str) {
  let toArr = str
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s+/g, "")
    .split("");
  if (toArr.join("") === toArr.reverse().join("")) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
