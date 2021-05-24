function* getNumbers() {
  yield 1
  const a = yield 2
  yield 3 + a
}

console.log([...getNumbers()])

const g = getNumbers()

console.log(g.next().value)
console.log(g.next().value)
console.log(g.next(7).value)
