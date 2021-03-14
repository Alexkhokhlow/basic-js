const CustomError = require("../extensions/custom-error");
let result = []

const chainMaker = {

    getLength() {
        return result.length
    },
    addLink(value) {
        result.push(`( ${value} )`)
        return chainMaker
    },
    removeLink(position) {
        if (position < 1) {
            result = []
            throw Error
        }
        result.splice(position - 1, 1)

        return chainMaker
    },
    reverseChain() {
        result.reverse()
        return chainMaker
    },
    finishChain() {
        let c = result
        result = []
        return c.join('~~')
    }
};

module.exports = chainMaker;