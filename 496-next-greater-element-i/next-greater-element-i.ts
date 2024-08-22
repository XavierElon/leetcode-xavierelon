function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const stack: number[] = []
    const nextGreater: Map<number, number> = new Map()

    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length-1] < nums2[i]) {
            stack.pop()
        }

        if (stack.length > 0) {
            nextGreater.set(nums2[i], stack[stack.length - 1])
        } else {
            nextGreater.set(nums2[i], -1)
        }
        stack.push(nums2[i])
    }
    return nums1.map(num => nextGreater.get(num))
};