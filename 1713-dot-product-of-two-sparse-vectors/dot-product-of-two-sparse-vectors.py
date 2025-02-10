class SparseVector:
    def __init__(self, nums: List[int]):
        self.idx_val = [(idx, val) for idx, val in enumerate(nums)]

    # Return the dotProduct of two sparse vectors
    def dotProduct(self, vec: 'SparseVector') -> int:
        res = 0
        for pair in self.idx_val:
            val = self.binary_search(vec.idx_val, pair[0])
            res += val * pair[1] if val != float('inf') else 0
        return res

    def binary_search(self, vec_pair, target_idx):
        start, end = 0, len(vec_pair) - 1

        while start + 1 < end:
            mid = (start + end) // 2

            if vec_pair[mid][0] == target_idx:
                return vec_pair[mid][1]
            elif vec_pair[mid][0] > target_idx:
                end = mid
            else:
                start = mid

        if vec_pair[start][0] == target_idx:
            return vec_pair[start][1]
        if vec_pair[end][0] == target_idx:
            return vec_pair[end][1]

        return floatt('inf')
        

# Your SparseVector object will be instantiated and called as such:
# v1 = SparseVector(nums1)
# v2 = SparseVector(nums2)
# ans = v1.dotProduct(v2)