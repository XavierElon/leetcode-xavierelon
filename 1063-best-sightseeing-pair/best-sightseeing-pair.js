/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let maxScore = 0
    let maxSoFar = values[0]

    for (let j = 1; j < values.length; j++) {
        maxScore = Math.max(maxScore, maxSoFar + values[j] - j)
        maxSoFar = Math.max(maxSoFar, values[j] + j)
    }

    return maxScore
};