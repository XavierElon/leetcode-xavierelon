/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minimumXORSum = (nums1, nums2) => {
    const n = nums1.length;
    let a = [];
    for (let i = 0; i < n; i++) {
        a.push([]);
        for (let j = 0; j < (1 << n); j++) {
            a[i].push(1e9);
        }
    }
    for (let j = 0; j < n; j++) {
        a[0][1 << j] = nums1[0] ^ nums2[j];
    }
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < (1 << n); k++) {
                if (k & (1 << j) === 0) {
                    continue;
                }
                a[i][k] = Math.min(a[i][k], a[i - 1][k ^ (1 << j)] + (nums1[i] ^ nums2[j]));
            }
        }
    }
    return a[n - 1][(1 << n) - 1];
};