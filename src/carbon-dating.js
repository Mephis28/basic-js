const CustomError = require("../extensions/custom-error");

const INITIAL_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = +sampleActivity;

  if (typeof sampleActivity !== "string") { return  false }
  if (MODERN_ACTIVITY > 15) {return false}

  if (MODERN_ACTIVITY > 0) {
    return Math.ceil(
      Math.log(INITIAL_ACTIVITY / MODERN_ACTIVITY) / (0.693 / HALF_LIFE_PERIOD)
    );
  } else {
    return false;
  }
};
