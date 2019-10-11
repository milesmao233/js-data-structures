const mergeSort = array => {
    if (array.length > 1) {
        const { length } = array
        const middle = Math.floor(length / 2)
        const left = mergeSort(array.slice(0, middle))
        const right = mergeSort(array.slice(middle, length))
        array = merge(left, right)
    }
    return array
}

function merge(left, right) {
    let i = 0
    let j = 0
    const result = []
    while (i < left.length && j < right.length) {
        result.push(left[i] < right[j] ? left[i++] : right[j++])
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}

let a = [6, 5, 4, 3, 2, 1]

const sortedArr = mergeSort(a)

console.log(sortedArr)
