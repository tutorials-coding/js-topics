// node proxy/run.js

const target = {
  value: 'hello',
}

const handler = {
  get: (target, prop, receiver) => {
    return 'H E L L O !'
  },
}

const proxy = new Proxy(target, handler)

console.log(target.value)
console.log(proxy.value)
