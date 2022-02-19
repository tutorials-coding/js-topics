const getCommonPrefix = (prefix, str2) => {
  let result = ''

  for (
    let i=0, j=0;
    i< prefix.length && j<str2.length;
    i++, j++
  ) {
    if (prefix[i] != str2[j]) {
      break
    }
    result += prefix[i]
  }

  return result
}


function getLongestCommonPrefix(arr) {
  let prefix = arr[0]

  for (let i=1; i<arr.length; i++) {
    prefix = getCommonPrefix(prefix, arr[i])
  }

  return prefix
}


const arr = ['abc123', 'abcd123', 'abcde123', 'abcdefg123']
console.log(
  getLongestCommonPrefix(arr)
)
