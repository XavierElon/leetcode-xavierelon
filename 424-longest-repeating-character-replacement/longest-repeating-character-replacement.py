class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = defaultdict(int)
        max_len = 0
        left = 0
        max_freq = 0

        for right in range(len(s)):
            count[s[right]] += 1
            max_freq = max(max_freq, count[s[right]])

            if (right - left + 1) - k > max_freq:
                count[s[left]] -= 1
                left += 1
            
            max_len = max(max_len, right - left + 1)

        return max_len