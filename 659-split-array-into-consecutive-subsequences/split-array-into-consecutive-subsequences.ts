function isPossible(nums: number[]): boolean {
    const freqMap: Map<number, number> = new Map()
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }

    const tails: Map<number, number> = new Map()

    for (const num of nums) {
        if (freqMap.get(num) === 0) {
            continue
        }

        if (tails.get(num - 1) > 0) {
            tails.set(num - 1, tails.get(num - 1) - 1)
            tails.set(num, (tails.get(num) || 0) + 1)
            freqMap.set(num, freqMap.get(num) - 1)
        } else if ((freqMap.get(num + 1)) > 0 && (freqMap.get(num + 2)) > 0) {
            freqMap.set(num + 1, freqMap.get(num + 1) - 1)
            freqMap.set(num + 2, freqMap.get(num + 2) - 1)
            tails.set(num + 2, (tails.get(num + 2) || 0) + 1)
            freqMap.set(num, freqMap.get(num) - 1)
        } else {
            return false
        }
    }
    return true
};