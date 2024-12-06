/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length
    const answer = new Array(n).fill(0)
    let hottest = 0

    for (let curr_day = n - 1; curr_day >= 0; curr_day--) {
        const current_temp = temperatures[curr_day]
        if (current_temp >= hottest) {
            hottest = current_temp
            continue
        }
        let days = 1
        while (temperatures[curr_day] >= temperatures[curr_day + days]) {
            days += answer[curr_day + days]
        }
        answer[curr_day] = days
    }
    return answer
};