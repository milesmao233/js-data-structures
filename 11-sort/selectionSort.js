const swap = (array, a, b) => {
    ;[array[a], array[b]] = [array[b], array[a]]
}

const selectionSort = array => {
    const { length } = array
    if (length <= 1) return

    let indexMin
    for (let i = 0; i < length - 1; i++) {
        indexMin = i
        for (let j = i; j < length; j++) {
            if (array[indexMin] > array[j]) {
                indexMin = j
            }
        }
        if (i !== indexMin) {
            swap(array, i, indexMin)
        }
    }
}
