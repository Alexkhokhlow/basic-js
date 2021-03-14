const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw Error
    }
    if (arr.length == 0) {
        return arr
    }
    let result = []
    const DELETE_NEXT = '--discard-next'
    const DELETE_PREV = '--discard-prev'
    const DOUBLE_NEXT = '--double-next'
    const DOUBLE_PREV = '--double-prev'
    let flag = 0
    arr.forEach((element, index, array) => {
        switch (element) {
            case DELETE_NEXT:
                {
                    if (arr[index + 1] != undefined) {
                        flag = 1
                        result.push(-1)
                    }
                    break
                }
            case DELETE_PREV:
                {
                    if (result.length != 0) {
                        result.pop()
                    }
                    break
                }
            case DOUBLE_NEXT:
                {
                    if (arr[index + 1] != undefined) {
                        result.push(arr[index + 1])
                    }
                    break
                }
            case DOUBLE_PREV:
                {
                    if (result[result.length - 1] == -1) {
                        result.pop()
                        break
                    }
                    if (result.length != 0) {
                        let last = result.pop()
                        result.push(last)
                        result.push(last)
                    }
                    break
                }
            default:
                {
                    if (flag != 1) {
                        result.push(element)
                    } else {
                        flag = 0
                    }
                }
        }
    });

    for (let i = 0; i < result.length; i++) {
        if (result[i] == -1) {
            result.splice(i, 1)
            i--
        }
    }

    return result
};