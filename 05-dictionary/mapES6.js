// Map 与 dictionary 是相似的，将对象扩展为，键可以不止是string

// 作为构造函数的使用： 接受数组作为参数，里面一个个键值对的数组
const map1 = new Map([['name', '张三'], ['title', 'Author']])
// Map(2) {"name" => "张三", "title" => "Author"}

const items = [['name', '张三'], ['title', 'Author']]
const map2 = new Map()
items.forEach(([key, value]) => map2.set(key, value))

//  不仅仅数组作为参数
// 任何具有iterator 接口且每个成员都是一个双元素数组的数据结构都可以作为Map构造函数的参数
const set = new Set([['foo', 1], ['bar', 2]])

const map3 = new Map(set)

// 遍历方法
// keys() / values() /  entries() / forEach()

const map4 = new Map([['F', 'no'], ['T', 'yes']])

for (let key of map4.keys()) {
    console.log(key)
}
// "F"
// "T"

for (let value of map4.values()) {
    console.log(value)
}
// "no"
// "yes"

for (let item of map4.entries()) {
    console.log(item[0], item[1])
}
// "F" "No"
// "T" "yes"
