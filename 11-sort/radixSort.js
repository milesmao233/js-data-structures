const radixSort = (array, radixBase = 10) => {
    if (array.length < 2) {
        return array
    }

    const minValue = findMinValue(array)
    const maxValue = findMaxValue(array)

    let significantDigit = 1
    while ((maxValue - minValue) / significantDigit >= 1) {
        array = countingSortForRadix(array, radixBase, significantDigit, minValue)
        significantDigit *= radixBase
    }
    return array
}

function countingSortForRadix(array, radixBase, significantDigit, minValue) {
    let bucketsIndex
    const buckets = []
    const aux = []
    // 创建buckets，对应个数为基数
    for (let i = 0; i < radixBase; i++) {
        buckets[i] = 0
    }

    // 拿到基数位，对应的元素个数
    for (let i = 0; i < array.length; i++) {
        bucketsIndex = getBucketIndex(array[i], minValue, significantDigit, radixBase)
        buckets[bucketsIndex]++
    }

    // 将buckets中的值累加
    for (let i = 1; i < radixBase; i++) {
        buckets[i] += buckets[i - 1]
    }
    for (let i = array.length - 1; i >= 0; i--) {
        bucketsIndex = getBucketIndex(array[i], minValue, significantDigit, radixBase)
        aux[--buckets[bucketsIndex]] = array[i]
    }
    for (let i = 0; i < array.length; i++) {
        array[i] = aux[i]
    }
    return array
}

function getBucketIndex(value, minValue, significantDigit, radixBase) {
    return Math.floor(((value - minValue) / significantDigit) % radixBase)
}

// function countingSortForRadix(array, radixBase, significantDigit, minValue) {
//     let bucketsIndex
//     const buckets = []
//     const aux = []
//     for (let i = 0; i < radixBase; i++) {
//         buckets[i] = 0
//     }

//     for (let i = 0; i < array.length; i++) {
//         bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase)
//         buckets[bucketsIndex]++
//     }

//     for (let i = 1; i < radixBase; i++) {
//         buckets[i] += buckets[i - 1]
//     }

//     for (let i = array.length - 1; i > 0; i--) {
//         bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase)
//         aux[--buckets[bucketsIndex]] = array[i]
//     }
//     for (let i = 0; i < array.length; i++) {
//         array[i] = aux[i]
//     }
//     return array
// }

function findMinValue(array) {
    let min = array[0]
    for (let element of array) {
        if (element < min) {
            min = element
        }
    }
    return min
}

function findMaxValue(array) {
    let max = array[0]
    for (let element of array) {
        if (element > max) {
            max = element
        }
    }
    return max
}
