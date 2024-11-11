function maximumBags(capacity: number[], rocks: number[], additionalRocks: number): number {
    let arr: number [] = []

    for (let i = 0; i < capacity.length; i++) {
        arr.push(capacity[i] - rocks[i])
    }

    arr.sort((a, b) => a - b)
    console.log(arr)

    let count: number = 0

    for (const rock of arr) {
        if (rock <= additionalRocks) {
            additionalRocks -= rock
            count++
        } else {
            break
        }
    }

    return count
};