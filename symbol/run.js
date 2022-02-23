const data = {
  name: 'John'
}

console.log(data)

const t = Symbol()
data[t] = 'timestamp'

console.log(data)
console.log(data[t])

console.log(Object.keys(data))
console.log(Object.getOwnPropertyNames(data))
console.log(Object.getOwnPropertySymbols(data))

for (const key in data) {
  console.log('key =>', key)
}

const data2 = { ...data }
console.log('data2', data2)

// let s1 = new Symbol() // error

console.log(Symbol('s1') === Symbol('s1'))

const s1 = Symbol('===s1===')
console.log(s1.description)
console.log(s1)
console.log(s1.toString())

const sym1 = Symbol.for('sym1')
console.log(Symbol.for('sym1') === Symbol.for('sym1'))
console.log(Symbol.keyFor(sym1))

