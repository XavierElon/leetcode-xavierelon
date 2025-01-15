class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0

        num_set = set(nums)
        longest_chain = 0

        for num in num_set:
            if num - 1 not in num_set:
                current_num = num
                current_chain = 1
                while (current_num + 1) in num_set:
                    current_num += 1
                    current_chain += 1
                longest_chain = max(current_chain, longest_chain)

        return longest_chain