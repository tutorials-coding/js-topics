function* getNumbers(a) {
  yield 1
  yield 2 + a
  yield 3
}
console.log([...getNumbers(5)])
