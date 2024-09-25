function maxOperations(nums: number[], k: number): number {
    const countMap = {}
    let operations: number = 0

    for (const num of nums) {
        const complement: number = k - num

        if (countMap[complement] > 0) {
            operations++
            countMap[complement]--
        } else {
            countMap[num] = (countMap[num] || 0) + 1
        }
    }

    return operations
};