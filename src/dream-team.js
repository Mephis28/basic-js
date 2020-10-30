const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members) { return false }
    let result = "";
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        let name = members[i].trim();
        result = result + name.charAt(0);
      }
    }
    return result.toUpperCase().split("").sort().join("");
};
