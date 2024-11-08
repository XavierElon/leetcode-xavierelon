function maximumBags(capacity: number[], rocks: number[], additionalRocks: number): number {
    let arr = []
    let ans: number = 0

    for (const rock in rocks) {
        arr.push(capacity[rock] - rocks[rock])
    }

    arr.sort((a, b) => a - b)

    for (let val of arr) {
        additionalRocks -= val
        if (additionalRocks < 0) break
        ans += 1
    }

    return ans
};