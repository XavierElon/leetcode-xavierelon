class SparseVector:
    def __init__(self, nums: List[int]):
        self.pairs = [(i, val) for i, val in enumerate(nums) if val != 0]

    # Return the dotProduct of two sparse vectors
    def dotProduct(self, vec: 'SparseVector') -> int:
        result = 0

        i = j = 0

        while i < len(self.pairs) and j < len(vec.pairs):
            idx1, val1 = self.pairs[i]
            idx2, val2 = vec.pairs[j]

            if idx1 == idx2:
                result += val1 * val2
                i += 1
                j += 1
            elif idx1 < idx2:
                i += 1
            else:
                j += 1
                
        return result

# Your SparseVector object will be instantiated and called as such:
# v1 = SparseVector(nums1)
# v2 = SparseVector(nums2)
# ans = v1.dotProduct(v2)