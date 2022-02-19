function getLongestCommonPrefix(arr) {

 arr.sort()


 const minLen = Math.min(arr[0].length, arr[arr.length - 1].length)

 let i = 0
 while (i< minLen && arr[0][i] === arr[arr.length - 1][i]) {
   i++
 }

 return arr[0].substring(0, i)
}

const array = ['abc123', 'abcd123', 'abcde123', 'abcdefg123']
console.log(
  getLongestCommonPrefix(array)
)
