/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const sorted = [...arr].sort((a, b) => a - b)

    const rankMap = new Map()
    let rank = 1

    for (let i = 0; i < sorted.length; i++) {
        if (!rankMap.has(sorted[i])) {
            rankMap.set(sorted[i], rank)
            rank++
        }
    }

    return arr.map(num => rankMap.get(num))
};