class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(t) > len(s) or not s or not t:
            return ''

        t_counts = Counter(t)
        required = len(t_counts)

        left = 0
        formed = 0
        window_counts = defaultdict(int)

        min_len = float('inf')
        result_indices = (0, 0)

        for right, char in enumerate(s):
            window_counts[char] += 1

            if char in t_counts and window_counts[char] == t_counts[char]:
                formed += 1

            while left <= right and formed == required:
                current_len = right - left + 1

                if current_len < min_len:
                    min_len = current_len
                    result_indices = (left, right)

                left_char = s[left]
                window_counts[left_char] -= 1

                if left_char in t_counts and window_counts[left_char] < t_counts[left_char]:
                    formed -= 1
                
                left += 1

        if min_len == float('inf'):
            return ''
        else:
            start, end = result_indices
            return s[start : end + 1]

