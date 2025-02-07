class SparseVector:
    def __init__(self, nums: List[int]):
        self.nonZeros = [(i, num) for i, num in enumerate(nums) if num != 0]

    # Return the dotProduct of two sparse vectors
    def dotProduct(self, vec: 'SparseVector') -> int:
        i = 0
        j = 0
        ans = 0
        while i < len(self.nonZeros) and j < len(vec.nonZeros):
            if self.nonZeros[i][0] == vec.nonZeros[j][0]:
                ans += self.nonZeros[i][1] * vec.nonZeros[j][1]
                i += 1
                j += 1
            elif self.nonZeros[i][0] < vec.nonZeros[j][0]:
                i += 1
            else:
                j += 1
        return ans



# Your SparseVector object will be instantiated and called as such:
# v1 = SparseVector(nums1)
# v2 = SparseVector(nums2)
# ans = v1.dotProduct(v2)