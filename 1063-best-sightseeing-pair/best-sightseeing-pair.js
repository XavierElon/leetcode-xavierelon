/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let maxScore = -Infinity
    let maxValue = values[0]

    for (let j = 1; j < values.length; j++) {
        maxScore = Math.max(maxScore, maxValue + values[j] - j)
        maxValue = Math.max(maxValue, values[j] + j)
    }

    return maxScore
};