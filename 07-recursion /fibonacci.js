// 递归 斐波那契数列

function fibonacci(n) {
    if (n < 1) return 0
    if (n < 2) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}

// 迭代 斐波那契数列
function fibonacciIterative(n) {
    if (n < 1) return 0
    if (n <= 2) return 1

    let fibNminus2 = 0
    let fibNminus1 = 1
    let fibN = n

    for (let i = 2; i <= n; i++) {
        fibN = fibNminus2 + fibNminus1
        fibNminus2 = fibNminus1
        fibNminus1 = fibN
    }

    return fibN
}

// 记忆化 斐波那契数列
function finbonacciMemoization(n) {
    const memo = [0, 1]
    const fibonacci = n => {
        if (memo[n] != null) return memo[n]
        return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo))
    }
    return fibonacci(n)
}
