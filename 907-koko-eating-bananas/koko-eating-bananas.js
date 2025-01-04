/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 0
    let right = Math.max(...piles)

    while (left < right) {
        const mid = Math.floor((left + right) / 2)

        if (canEatAll(mid, piles, h)) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
};

function canEatAll(k, piles, h) {
    let hours = 0

    for (const pile of piles) {
        hours += Math.ceil(pile/ k)
        if (hours > h) return false
    }
    return true
}