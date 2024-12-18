/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const results = []
    const counter = {}

    for (let num of nums) {
        if (!(num in counter)) counter[num] = 0
        counter[num]++
    }

    console.log(counter)

    const backtrack = (combination) => {
        if (combination.length === nums.length) {
            results.push([...combination])
            return
        }

        for (let num in counter) {
            if (counter[num] === 0) continue
            counter[num]--
            combination.push(parseInt(num))
            backtrack(combination)
            counter[num]++
            combination.pop()
        }

    }

    backtrack([])
    return results
};