class SparseVector:
    def __init__(self, nums: List[int]):
        self.nonzeros = {}
        for i, num in enumerate(nums):
            if num != 0:
                self.nonzeros[i] = num

    # Return the dotProduct of two sparse vectors
    def dotProduct(self, vec: 'SparseVector') -> int:
        if len(vec.nonzeros) > len(self.nonzeros):
            smaller = self.nonzeros
            larger = vec.nonzeros
        else:
            smaller = vec.nonzeros
            larger = self.nonzeros

        res = 0

        for idx, value in smaller.items():
            if idx in larger:
                res += value * larger[idx]

        return res
        

# Your SparseVector object will be instantiated and called as such:
# v1 = SparseVector(nums1)
# v2 = SparseVector(nums2)
# ans = v1.dotProduct(v2)