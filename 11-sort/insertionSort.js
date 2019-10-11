const insertionSort = array => {
    const { length } = array
    if (length <= 1) return

    for (let i = 1; i < length; i++) {
        let value = array[i]
        let j = i - 1

        while (j >= 0) {
            if (array[j] > value) {
                array[j + 1] = array[j] // 移动
                j--
            } else {
                break
            }
        }
        array[j + 1] = value // 插入数据
    }
}
