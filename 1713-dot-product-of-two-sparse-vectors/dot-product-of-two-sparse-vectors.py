class SparseVector:
    def __init__(self, nums: List[int]):
        self.pairs = [(i, val) for i, val in enumerate(nums) if val != 0]
        self.pairs.sort(key=lambda x: x[0])

    # Return the dotProduct of two sparse vectors
    def dotProduct(self, vec: 'SparseVector') -> int:
        if len(self.pairs) > len(vec.pairs):
            return vec.dotProduct(self)
        
        result = 0

        for idx, val in self.pairs:
            match_val = self.bs(vec.pairs, idx)
            if match_val is not None:
                result += val * match_val


        return result

    def bs(self, pairs, target_idx):
        l, r = 0, len(pairs) - 1

        while l <= r:
            mid = (l + r) // 2
            idx, val = pairs[mid]

            if idx == target_idx:
                return val
            elif idx < target_idx:
                l = mid + 1
            else:
                r = mid - 1

        return None
        

# Your SparseVector object will be instantiated and called as such:
# v1 = SparseVector(nums1)
# v2 = SparseVector(nums2)
# ans = v1.dotProduct(v2)