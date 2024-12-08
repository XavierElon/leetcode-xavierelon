/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b)
    const res = []

    for (const spell of spells) {
        let left = 0
        let right = potions.length - 1
        let index = potions.length

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)

            if (potions[mid] * spell >= success) {
                index = mid
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        res.push(potions.length - index)
    }

    return res
};