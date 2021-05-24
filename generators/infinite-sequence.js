function* waiter() {
  let waitMs = 100
  while (true) {
    yield waitMs
    waitMs *= 2
  }
}

const w = waiter()

for (let i = 0; i < 10; i++) {
  console.log(w.next().value)
}
