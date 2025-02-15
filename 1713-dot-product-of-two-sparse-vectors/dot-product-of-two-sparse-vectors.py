class SparseVector:
    def __init__(self, nums: List[int]):
        self.values = {i: val for i, val in enumerate(nums) if val != 0}

    # Return the dotProduct of two sparse vectors
    def dotProduct(self, vec: 'SparseVector') -> int:
        return sum(self.values[i] * vec.values[i] for i in self.values.keys() & vec.values.keys())
        

# Your SparseVector object will be instantiated and called as such:
# v1 = SparseVector(nums1)
# v2 = SparseVector(nums2)
# ans = v1.dotProduct(v2)