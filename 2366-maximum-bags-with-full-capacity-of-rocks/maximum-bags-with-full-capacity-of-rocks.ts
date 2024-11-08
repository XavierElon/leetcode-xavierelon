function maximumBags(capacity: number[], rocks: number[], additionalRocks: number): number {
    const needed: number[] = capacity.map((cap, idx) => cap - rocks[idx])

    needed.sort((a, b) => a - b)
    console.log(needed)

    let filledBags: number = 0

    for (const rocksNeeded of needed) {
        if (additionalRocks >= rocksNeeded) {
            filledBags++
            additionalRocks -= rocksNeeded
        } else {
            break
        }
    }

    return filledBags
};