const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

    let separator = "+"
    let repeatTimes = 1
    let addition = ""
    let additionRepeatTimes = 1
    let additionSeparator = "|"

    if (options.repeatTimes != undefined) {
        repeatTimes = options.repeatTimes
    }
    if (options.separator != undefined) {
        separator = options.separator
    }
    if (options.addition != undefined) {
        addition = options.addition
    }

    if (typeof(options.addition) == 'object') {
        if (options.addition == null) {
            addition = 'null'
        } else {
            addition = options.addition
        }
    }

    if (options.additionRepeatTimes != undefined) {
        additionRepeatTimes = options.additionRepeatTimes
    }

    if (options.additionSeparator != undefined) {
        additionSeparator = options.additionSeparator
    }
    let additionResult = (addition + additionSeparator).repeat(additionRepeatTimes)
    additionResult = additionResult.slice(0, additionResult.length - additionSeparator.length)
    let result = (str + additionResult + separator).repeat(repeatTimes)
    result = result.slice(0, result.length - separator.length)

    return result
};