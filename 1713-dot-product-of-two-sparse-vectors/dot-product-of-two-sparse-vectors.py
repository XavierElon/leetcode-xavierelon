class SparseVector:
    def __init__(self, nums: List[int]):
        self.idx_val = [(idx, num) for idx, num in enumerate(nums) if num != 0]

    # Return the dotProduct of two sparse vectors
    def dotProduct(self, vec: 'SparseVector') -> int:
        cur_vec = self.idx_val
        opp_vec = vec.idx_val

        return self.multiply(cur_vec, opp_vec)

    def multiply(self, cur_vec, opp_vec):
        p_cur, p_opp = 0, 0
        res = 0

        while p_cur < len(cur_vec) and p_opp < len(opp_vec):
            if cur_vec[p_cur][0] == opp_vec[p_opp][0]:
                res += cur_vec[p_cur][1] * opp_vec[p_opp][1]
                p_cur += 1
                p_opp += 1
            elif cur_vec[p_cur][0] < opp_vec[p_opp][0]:
                p_cur += 1
            else:
                p_opp += 1
            
        return res

# Your SparseVector object will be instantiated and called as such:
# v1 = SparseVector(nums1)
# v2 = SparseVector(nums2)
# ans = v1.dotProduct(v2)