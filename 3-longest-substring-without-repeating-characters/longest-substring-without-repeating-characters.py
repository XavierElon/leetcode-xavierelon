class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        max_len = 0
        hash_set = set()
        left = right = 0

        while right < len(s):
            while s[right] in hash_set:
                hash_set.remove(s[left])
                left += 1
            max_len = max(max_len, right - left + 1)
            hash_set.add(s[right])

            right += 1

        return max_len