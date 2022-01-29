// node proxy/run.js

const target = {
  value: 'hello',
}

const handler = {
  get: function (target, prop, receiver) {
    console.log('H E L L O !')
    return Reflect.get(...arguments)
  },
}

const proxy = new Proxy(target, handler)

console.log(proxy.value)
