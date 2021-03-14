const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let a = 0
    matrix.forEach(element => {
        element.forEach(i => {
            if (i == '^^') {
                a++
            }
        })
    });
    return a
};