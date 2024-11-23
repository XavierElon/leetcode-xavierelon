/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const temp: number[] = []
    let pointer1: number = 0
    let pointer2: number = 0

    while (pointer1 < m && pointer2 < n) {
        if (nums1[pointer1] < nums2[pointer2]) {
            temp.push(nums1[pointer1++])
        } else {
            temp.push(nums2[pointer2++])
        }
    }
    while (pointer1 < m) {
        temp.push(nums1[pointer1++])
    }
    while (pointer2 < n) {
        temp.push(nums2[pointer2++])
    }

    for (let i = 0; i < m + n; i++) {
        nums1[i] = temp[i]
    }
};