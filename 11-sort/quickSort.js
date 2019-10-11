// 主要思路：
// 拿到数组最后一项，作为基准pivot
// 建立指针i，从指针处开始遍历，如果小于pivot，那么与指针i的值交换，i++
// 遍历完成后，将pivot与i处交换
// 这样，pivot的左边都是小于pivot的，pivot的右边都是大于它的
// 再用递归分别排序左边与右边

const quickSort = array => {
    return quick(array, 0, array.length - 1)
}

function quick(array, left, right) {
    if (left >= right) return

    let pivot = partition(array, left, right) // 获取分区点
    quick(array, left, pivot - 1)
    quick(array, pivot + 1, right)
}

function partition(array, left, right) {
    let pivot = array[right]
    let i = left
    for (let j = left; j < right; j++) {
        if (array[j] < pivot) {
            swap(array, i, j)
            i++
        }
    }
    swap(array, i, right)
    return i
}

function swap(array, a, b) {
    ;[array[a], array[b]] = [array[b], array[a]]
}
