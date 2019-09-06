// 进制转换算法
// 转换为2--32进制

function baseConverter(decNumber, base) {
    const remStack = new Stack()
    let number = decNumber
    let digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let rem, resultString
    while (number > 0) {
        rem = Math.floor(number % base)
        remStack.push(rem)
        number = Math.floor(number / base)
    }

    while (remStack.size() !== 0) {
        resultString += digits[remStack.pop()]
    }

    return resultString
}

export default baseConverter
