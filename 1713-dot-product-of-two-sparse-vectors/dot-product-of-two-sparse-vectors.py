class SparseVector:
    def __init__(self, nums: List[int]):
        self.pairs = [(i, val) for i, val in enumerate(nums) if val != 0]

    # Return the dotProduct of two sparse vectors
    def dotProduct(self, vec: 'SparseVector') -> int:
        i = j = 0
        res = 0
        m, n = len(vec.pairs), len(self.pairs)

        while i < m and j < n:
            idx1, val1 = vec.pairs[i]
            idx2, val2 = self.pairs[j]

            if idx1 == idx2:
                res += val1 * val2
                i += 1
                j += 1
            elif idx1 < idx2:
                i += 1
            else:
                j += 1

        return res
        

# Your SparseVector object will be instantiated and called as such:
# v1 = SparseVector(nums1)
# v2 = SparseVector(nums2)
# ans = v1.dotProduct(v2)