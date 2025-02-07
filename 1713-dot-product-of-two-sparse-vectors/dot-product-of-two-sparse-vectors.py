class SparseVector:
    def __init__(self, nums: List[int]):
        self.values = {i: val for i, val in enumerate(nums) if val != 0}

    def remove_zero_values(self):
        self.values = {i: val for i, val in self.values.items() if val != 0}

    # Return the dotProduct of two sparse vectors
    def dotProduct(self, vec: 'SparseVector') -> int:
        res = 0

        if len(self.values) < len(vec.values):
            for i, val in self.values.items():
                if i in vec.values:
                    res += val * vec.values[i]
        else:
            for i, val in vec.values.items():
                if i in self.values:
                    res += val * self.values[i]

        return res

# Your SparseVector object will be instantiated and called as such:
# v1 = SparseVector(nums1)
# v2 = SparseVector(nums2)
# ans = v1.dotProduct(v2)