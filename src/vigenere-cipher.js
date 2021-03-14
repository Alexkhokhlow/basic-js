const CustomError = require("../extensions/custom-error");
let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class VigenereCipheringMachine {

    constructor(value) {
        this.value = value
    }
    encrypt(message, key) {
        if (typeof message == 'undefined' || typeof key == 'undefined') {
            throw Error
        }

        let result = ''
        let key_number = 0
        message = message.toUpperCase()
        key = key.toUpperCase()
        for (let i = 0; i < message.length; i++) {
            let element = message[i]

            if (arr_EN.includes(element)) {

                if (message[i] == " ") {
                    result += " "
                    continue
                }

                let number = (arr_EN.indexOf(element) + arr_EN.indexOf(key[key_number])) % 26
                result += arr_EN[number]
                key_number++
                if (key_number == key.length) {
                    key_number = 0
                }
            } else {
                result += element
            }

        }

        if (this.value == false) {
            return result.split('').reverse().join('')

        }
        return result

    }
    decrypt(message, key) {

        if (typeof message == 'undefined' || typeof key == 'undefined') {
            throw Error
        }
        let result = ''
        let key_number = 0
        message = message.toUpperCase()
        key = key.toUpperCase()
        for (let i = 0; i < message.length; i++) {
            let element = message[i]

            if (arr_EN.includes(element)) {

                if (message[i] == " ") {
                    result += " "
                    continue
                }

                let number = (arr_EN.indexOf(element) + 26 - arr_EN.indexOf(key[key_number])) % 26
                result += arr_EN[number]
                key_number++
                if (key_number == key.length) {
                    key_number = 0
                }
            } else {
                result += element
            }

        }
        if (this.value == false) {
            return result.split('').reverse().join('')
        }
        return result
    }
}

module.exports = VigenereCipheringMachine;