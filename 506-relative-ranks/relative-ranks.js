/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const pairs = score.map((score, index) => [score, index])

    pairs.sort((a, b) => b[0] - a[0])

    const answer = new Array(score.length)

    for (let i = 0; i < pairs.length; i++) {
        const index = pairs[i][1]

        if (i === 0) answer[index] = "Gold Medal"
        else if (i === 1) answer[index] = "Silver Medal"
        else if (i === 2) answer[index] = "Bronze Medal"
        else answer[index] = (i+1).toString()
    }

    return answer
};