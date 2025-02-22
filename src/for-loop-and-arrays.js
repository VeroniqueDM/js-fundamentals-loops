const nums = [1, 3, 12, 5, 1, 6, 4, 1, 10] // eslint-disable-line no-unused-vars
const letters = ['H', 'e', 'l', 'l', 'o'] // eslint-disable-line no-unused-vars
let sum = 0 // eslint-disable-line prefer-const
let word = '' // eslint-disable-line prefer-const

// TODO: Add code below this line to make the tests pass

// 1. Use a for loop to set the sum variable to the sum of all the values in nums
for (let index = 0; index < nums.length; index++) {
  const element = nums[index]
  sum += element
}
// 2. Use a for loop to populate doubledNums with every value from nums array doubled (i.e [2, 6, 24, etc...])
const doubledNums = []
for (let index = 0; index < nums.length; index++) {
  const element = nums[index] * 2
  doubledNums.push(element)
}
// 3. Use a for loop to set word equal to all the letters in the letters array
letters.forEach((letter) => {
  word += letter
})
// 4. Use a for loop to populate everySecondNum with every second number from the nums array
const everySecondNum = []
for (let index = 1; index < nums.length; index += 2) {
  const element = nums[index]
  everySecondNum.push(element)
}
// 5. Use a for loop to populate numsReversed with the numbers from nums in reverse order
const numsReversed = []
for (let index = nums.length - 1; index >= 0; index--) {
  const element = nums[index]
  numsReversed.push(element)
}
// do not change below this line
module.exports = {
  a: sum,
  b: doubledNums,
  c: word,
  d: everySecondNum,
  e: numsReversed
}
