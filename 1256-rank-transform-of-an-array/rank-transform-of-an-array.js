/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    if (arr.length === 0) return []

    const uniqueSorted = Array.from(new Set([...arr])).sort((a, b) => a - b)

    const rankMap = new Map()
    uniqueSorted.forEach((num, index) => rankMap.set(num, index + 1))

    const result = arr.map(num =>rankMap.get(num))
    
    return result
};