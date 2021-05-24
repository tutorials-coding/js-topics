const message = 'This is a message'

let iterator = message[Symbol.iterator]()

while (true) {
  const ch = iterator.next()
  if (ch.done) break
  console.log(ch.value)
}
