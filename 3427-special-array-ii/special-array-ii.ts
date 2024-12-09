function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
    const res = []
    const prefix = new Array(nums.length).fill(0)
    prefix[0] = 0

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] % 2 === nums[i-1] % 2) {
            prefix[i] = prefix[i-1] + 1
        } else {
            prefix[i] = prefix[i-1]
        }
    }

    let index = 0
    for (const query of queries) {
        const [start, end] = query
        res[index++] = prefix[end] - prefix[start] === 0
    }

    return res
};