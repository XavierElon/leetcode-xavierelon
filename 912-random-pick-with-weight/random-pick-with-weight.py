class Solution:

    def __init__(self, w: List[int]):
        self.prefixSums = []
        prefix_sum = 0

        for weight in w:
            prefix_sum += weight
            self.prefixSums.append(prefix_sum)
        
        self.totalSum = prefix_sum

    def pickIndex(self) -> int:
        rand_target = random.randint(1, self.totalSum)

        left, right = 0, len(self.prefixSums) - 1

        while left < right:
            mid = (left + right) // 2
            if self.prefixSums[mid] < rand_target:
                left = mid + 1
            else:
                right = mid
        return left

# Your Solution object will be instantiated and called as such:
# obj = Solution(w)
# param_1 = obj.pickIndex()