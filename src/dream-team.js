const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false
    }

    let a = ""
    members.forEach(element => {
        if (typeof(element) != 'string') {
            return
        }
        a = a + element.trim()[0].toUpperCase()
    })
    return a.split('').sort().join('')
}