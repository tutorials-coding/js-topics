// node proxy/run.js

const target = {
  value: 'hello',
}

const handler = {}

const proxy = new Proxy(target, handler)

console.log(target.value)
console.log(proxy.value)
