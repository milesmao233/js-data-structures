const swap = (array, a, b) => {
    ;[array[a], array[b]] = [array[b], array[a]]
}

const bubbleSort = arr => {
    const { length } = arr
    if (length <= 1) return

    for (let i = 0; i < length; i++) {
        let flag = false
        for (let j = 0; j < length - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                swap(arr, j, j + 1)
                flag = true
            }
        }
        if (!flag) break
    }
}

// 时间复杂度
// 最好情况： O(n)
// 最坏情况： O(n^2)
