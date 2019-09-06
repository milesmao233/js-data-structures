// 进制转换算法
// 转换为2--32进制
const Stack = require('../stack')

function baseConverter(decNumber, base) {
    const remStack = new Stack()
    let number = decNumber
    let digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let resultString = ''
    let rem

    while (number > 0) {
        rem = Math.floor(number % base)
        remStack.push(rem)
        number = Math.floor(number / base)
    }

    while (!remStack.isEmpty()) {
        resultString += digits[remStack.pop()]
    }

    return resultString
}

module.exports = baseConverter
