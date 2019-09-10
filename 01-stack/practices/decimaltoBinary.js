// 问题：
// 十进制转换为二进制

import Stack from '../stack'

function decimaltoBinary(decNumber) {
    const remStack = new Stack()
    let number = decNumber
    let rem, resultString
    while (number > 0) {
        rem = Math.floor(number % 2)
        remStack.push(rem)
        number = Math.floor(number / 2)
    }

    while (remStack.size() !== 0) {
        resultString += `${remStack.pop()}`
    }

    return resultString
}

export default decimaltoBinary
