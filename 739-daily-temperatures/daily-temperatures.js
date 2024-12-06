/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length
    let hottest = 0
    const answer = new Array(n).fill(0)

    for (let curr_day = n - 1; curr_day >= 0; curr_day--) {
        let current_temp = temperatures[curr_day]
        if (current_temp >= hottest) {
            hottest = current_temp
            continue
        }
        let days = 1
        while (current_temp >= temperatures[curr_day + days]) {
            days += answer[curr_day + days]
        }
        answer[curr_day] = days
    }
    return answer
};