function minEatingSpeed(piles: number[], h: number): number {
    const canEatAll = (k: number): boolean => {
        let hours: number = 0
        for (const pile of piles) {
            hours += Math.ceil(pile / k)

            if (hours > h) return false
        }
        return hours <= h
    }

    let left: number = 1
    let right: number = Math.max(...piles)

    while (left < right) {
        const mid: number = Math.floor((left + right) / 2)
        if (canEatAll(mid)) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
};