const CustomError = require("../extensions/custom-error");


module.exports = class DepthCalculator {

    calculateDepth(value) {
        return Array.isArray(value) ?
            1 + value.reduce((acc, item) => Math.max(acc, this.calculateDepth(item)), 0) : 0
    }
};