const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity != 'string' || isNaN(sampleActivity)) {
        return false
    }

    if (sampleActivity > MODERN_ACTIVITY || sampleActivity < 1) {
        return false
    }
    let a = Math.ceil((Math.log((MODERN_ACTIVITY) / (+sampleActivity))) / (0.693 / HALF_LIFE_PERIOD))

    return a
};