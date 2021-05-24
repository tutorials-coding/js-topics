function* gerMoreNumbers() {
  yield* getNumbers()
  yield* getNumbers()
}

console.log([...gerMoreNumbers()])
