const multiply = (a) => {
  const result = (b) => multiply(a * b)

  result[Symbol.toPrimitive] = () => a

  return result
};

// exec

let res = multiply(2)(5)
// res - число или функция?
console.log(`Result is ${res}`)    // => Result is 10
console.log(`Result is ${res(5)}`) // => Result is 50
