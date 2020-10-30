const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    let elem;
    for (elem of arr) {
      if (typeof elem === "object") {
        console.log(arr);
        arr = arr.flat();
        break;
      }
    }
    if (typeof elem === "object") {
      result += this.calculateDepth(arr);
    }
    return result;
  }
};