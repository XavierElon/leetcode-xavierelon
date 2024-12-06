/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    if (arr.length === 0) return []
    const uniqueSet = new Set(arr)
    const sortedUniqueArr = Array.from(uniqueSet).sort((a, b) => a - b)

    const rankMap = new Map()
    sortedUniqueArr.forEach((num, index) => rankMap.set(num, index + 1))

    return arr.map(num => rankMap.get(num))

};