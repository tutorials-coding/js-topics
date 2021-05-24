function* getNumbers() {
  yield 1
  yield 2
  yield 3
}

const g = getNumbers()

console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)

console.log([...g])
