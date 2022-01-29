// node proxy/run.js

const target = {
  value: 'hello',
  value2: 'value2',
}

const handler = {
  get: function (target, prop, receiver) {
    if (prop === 'value2') {
      console.log('H E L L O !')
      return 'this is value 2'
    }
    return Reflect.get(...arguments)
  },
}

const proxy = new Proxy(target, handler)

// console.log(proxy.value)
console.log(proxy.value2)
