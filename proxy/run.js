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
  set: function (target, prop, value) {
    if (prop === 'value') {
      if (value.length > 10) {
        throw new Error('length should be less or equal than 10')
      }
    }
    target[prop] = value
    return true
  },
}

const proxy = new Proxy(target, handler)

// console.log(proxy.value)
// console.log(proxy.value2)

proxy.value = 'abcdefghijk'
console.log(proxy.value)
