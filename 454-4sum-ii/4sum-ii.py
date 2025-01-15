class Solution:
    def fourSumCount(self, nums1: List[int], nums2: List[int], nums3: List[int], nums4: List[int]) -> int:
        sum_map = defaultdict(int)

        for a in nums1:
            for b in nums2:
                current_sum = a + b
                sum_map[current_sum] += 1

        count = 0

        for c in nums3:
            for d in nums4:
                target = -(c + d)
                if target in sum_map:
                    count += sum_map[target]

        return count