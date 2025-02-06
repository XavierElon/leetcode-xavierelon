class Solution:
    def distinctNumbers(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        freq = defaultdict(int)

        for i in range(k):
            freq[nums[i]] += 1

        ans = [len(freq)]

        for i in range(k, n):
            left = nums[i-k]
            freq[left] -= 1
            if freq[left] == 0:
                del freq[left]

            right = nums[i]
            freq[right] += 1

            ans.append(len(freq))
        return ans