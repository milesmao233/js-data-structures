import Dictionary from '../dictionary'

const dictionary = new Dictionary()
dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', 'johnsnow@email.com')
dictionary.set('Tyrion', 'tyrion@email.com')

console.log(dictionary.hasKey('Gandalf')) // true
console.log(dictionary.size()) // 3

console.log(dictionary.keys()) // ["Gandalf", "John", "Tyrion"]
console.log(dictionary.values()) // ["gandalf@email.com", "johnsnow@email.com", "tyrion@email.com"]
console.log(dictionary.get('Tyrion')) // tyrion@email.com

console.log(dictionary.keyValues())
// (3) [ValuePair, ValuePair, ValuePair]
// 0: ValuePair {key: "Gandalf", value: "gandalf@email.com"}
// 1: ValuePair {key: "John", value: "johnsnow@email.com"}
// 2: ValuePair {key: "Tyrion", value: "tyrion@email.com"}
