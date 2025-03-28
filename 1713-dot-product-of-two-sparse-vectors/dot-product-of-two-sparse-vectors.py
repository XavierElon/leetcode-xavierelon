class SparseVector:
    def __init__(self, nums: List[int]):
        self.nonzeros = {}
        for i, num in enumerate(nums):
            if num != 0:
                self.nonzeros[i] = num

    # Return the dotProduct of two sparse vectors
    def dotProduct(self, vec: 'SparseVector') -> int:
        if len(self.nonzeros) > len(vec.nonzeros):
            smaller = vec.nonzeros
            larger = self.nonzeros
        else:
            smaller = self.nonzeros
            larger = vec.nonzeros

        res = 0
        for index, value in smaller.items():
            if index in larger:
                res += value * larger[index]

        return res
        

# Your SparseVector object will be instantiated and called as such:
# v1 = SparseVector(nums1)
# v2 = SparseVector(nums2)
# ans = v1.dotProduct(v2)