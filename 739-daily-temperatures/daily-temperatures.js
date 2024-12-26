/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const n = temperatures.length
  const answer = new Array(n).fill(0)
  const stack = []

  for (let i = 0; i < n; i++) {
    const currentTemp = temperatures[i]

    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < currentTemp) {
        let prevDay = stack.pop()
        answer[prevDay] = i - prevDay
    }
    stack.push(i)
  }

  return answer
};