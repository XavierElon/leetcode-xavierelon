/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set = new Set()
    let res = []
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let i = 0, k = 0
    while (i < nums1.length && k < nums2.length) {
        if (nums1[i] === nums2[k]) {
            if(res[res.length-1] !== nums1[i]) {
                res.push(nums1[i])
            }
            i++
            k++
    
        } else if (nums1[i] < nums2[k]) {
            i++
        } else k++
    }

    return res
};