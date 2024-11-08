function shipWithinDays(weights: number[], days: number): number {
    function getDays(capacity) {
        let D: number = 1
        let total: number = 0

        for (const weight of weights) {
            total += weight
            if (total > capacity) {
                total = weight
                D++
            }
        }
        return D
    }

    let left: number = Math.max(...weights)
    let right: number = weights.reduce((acc, cur) => acc + cur, 0)

    while (left < right) {
        const mid: number = Math.floor((left + right) / 2)
        const D: number = getDays(mid)
        if (D > days) left = mid + 1
        else right = mid
    }
    return right
};