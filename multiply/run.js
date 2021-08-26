const multiply = (a) => {
  const result = (b) => multiply(a * b)

  result[Symbol.toPrimitive] = () => a

  return result
};

// exec

let res = multiply(2)(5)
// res - число или функция?
console.log(`Result: ${res}`)    // => Result: 10
console.log(`Result: ${res(5)}`) // => Result: 50
