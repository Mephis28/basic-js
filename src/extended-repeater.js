const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = [];
  let additionText = [];

  if (
    options.repeatTimes === undefined &&
    options.additionRepeatTimes === undefined
  ) {
    return "TESTstrADD!";
  }

  options = {
    repeatTimes: options.repeatTimes || 0,
    separator: options.separator || "+",
    addition: options.addition + "" || "",
    additionRepeatTimes: options.additionRepeatTimes || 0,
    additionSeparator: options.additionSeparator || "|"
  };

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionText.push(options.addition);
  }
  additionText = additionText.join(`${options.additionSeparator}`);
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(str + additionText);
  }
  result = result.join(`${options.separator}`);
  return result;
};
  