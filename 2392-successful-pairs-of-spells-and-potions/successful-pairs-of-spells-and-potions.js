/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    const res = []
    potions.sort((a, b) => a - b)

    const isSuccessful = (spell, potion) => {
        return spell * potion >= success
    }

    for (const spell of spells) {
        let left = 0
        let right = potions.length - 1
        let index = potions.length


        while (left <= right) {
            const mid = Math.floor((left + right) / 2)

            if (isSuccessful(spell, potions[mid])) {
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