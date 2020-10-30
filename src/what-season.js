const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
        const arraySeasons = ["spring", "summer", "autumn", "winter"];
        let result = "";

        if (date === undefined) {
          return "Unable to determine the time of year!";
        }

        if (Object.prototype.toString.call(date) != "[object Date]") {
          throw new Error();
        }

        if (date.getMonth() <= 1 || date.getMonth() === 11) {
          result = "winter";
        } else if (date.getMonth() <= 4) {
          result = "spring";
        } else if (date.getMonth() <= 7) {
          result = "summer";
        } else if (date.getMonth() <= 10) {
          result = "autumn";
        }

        return result;
};
