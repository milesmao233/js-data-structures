/*
插入到合适位置，然后将其余数据往后移动
代码过程是需要先往后一个个移动，再进行插入操作
*/

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
