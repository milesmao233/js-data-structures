const set = new Set()
set.add(1)

console.log(set.values())
console.log(set.has(1))
console.log(set.size)

const union = (setA, setB) => {
    const unionAb = new Set()
    setA.forEach(value => {
        unionAb.add(value)
    })
    setB.forEach(value => {
        unionAb.add(value)
    })
    return unionAb
}

const unionES6 = (setA, setB) => {
    return new Set([...setA, ...setB])
}

const intersection = (setA, setB) => {
    const intersectionSet = new Set()
    setA.forEach(value => {
        if (setB.has(value)) {
            intersectionSet.add(value)
        }
    })
    return intersectionSet
}

const intersectionES6 = (setA, setB) => {
    return new Set([...setA].filter(x => setB.has(x)))
}

const difference = (setA, setB) => {
    const differenceSet = new Set()
    setA.forEach(value => {
        if (!setB.has(value)) {
            differenceSet.add(value)
        }
    })
    return differenceSet
}

const differenceES6 = (setA, setB) => {
    return new Set([...setA].filter(x => !setB.has(x)))
}
