function missingNumber(nums: number[]): number {
    let n = nums.length
    if (n === 0) return 0
    nums.sort((a, b) => a - b)
    console.log(nums)
    if (nums[0] !== 0) return 0
    let prev = nums[0] 
    
    for (let i = 1; i < nums.length; i++) {
        console.log(prev)
        console.log(nums[i])
        if (nums[i] !== prev + 1) return prev + 1
        prev = nums[i]
    }
    return n
}; 