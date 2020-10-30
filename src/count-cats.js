const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let result = 0;
  if (array) {
    let newArr = array.flat();
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === "^^") {
        result = result + 1;
      }
    }
  }
  return result;
};
