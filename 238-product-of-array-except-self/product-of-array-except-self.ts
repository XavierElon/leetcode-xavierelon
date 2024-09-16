function productExceptSelf(nums: number[]): number[] {
    const result: Array<number> = new Array(nums.length).fill(1)

    let leftProduct: number = 1
    let rightProduct: number = 1

    for (let i = 0; i < nums.length; i++) {
        result[i] *= leftProduct
        leftProduct *= nums[i]
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= rightProduct
        rightProduct *= nums[i]
    }

    return result
};