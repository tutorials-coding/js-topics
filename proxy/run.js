// node proxy/run.js

const target = {
  value: 'hello',
}

const handler = {
  get: (target, prop, receiver) => {
    console.log('H E L L O !')
    return target[prop]
  },
}

const proxy = new Proxy(target, handler)

console.log(proxy.value)
