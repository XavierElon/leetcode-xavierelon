class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        unmatched_open_count = unmatched_close_count = 0
        s = list(s)

        for i in range(len(s)):
            if s[i] == '(':
                unmatched_open_count += 1
            elif s[i] == ')':
                if unmatched_open_count > 0:
                    unmatched_open_count -= 1
                else:
                    unmatched_close_count += 1

        return unmatched_open_count + unmatched_close_count