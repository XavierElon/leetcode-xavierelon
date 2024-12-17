/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const permutations = []

    if (nums.length === 1) return [[...nums]]

    const backtrack = (perm, remainingNums) => {
        if (perm.length === nums.length) {
            permutations.push([...perm])
            return
        }

        for (let i = 0; i < remainingNums.length; i++) {
            perm.push(remainingNums[i])

            newNumbers = [
                ...remainingNums.slice(0, i),
                ...remainingNums.slice(i + 1)
            ]

            backtrack(perm, newNumbers)

            perm.pop()
        }
    }

    backtrack([], nums)
    return permutations
};