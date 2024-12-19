/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    const length = arr.length
    let chunks = 0
    let maxElement = 0

    for (let i = 0; i < length; i++) {
        maxElement = Math.max(maxElement, arr[i])

        if (maxElement === i) {
            chunks += 1
        }
    }

    return chunks
};