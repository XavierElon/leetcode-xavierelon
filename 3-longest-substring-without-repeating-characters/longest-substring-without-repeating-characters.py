class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        max_len = 0
        char_index_map = {}
        left = 0

        for right, char in enumerate(s):
            if char in char_index_map and char_index_map[char] >= left:
                left = char_index_map[char] + 1

            char_index_map[char] = right

            max_len = max(max_len, right - left + 1)

        return max_len