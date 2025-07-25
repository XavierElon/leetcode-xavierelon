class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        unmatched_open_count = unmatched_close_count = 0

        for ch in s:
            if ch == '(':
                unmatched_open_count += 1
            elif ch == ')':
                if unmatched_open_count > 0:
                    unmatched_open_count -= 1
                else:
                    unmatched_close_count += 1

        return unmatched_open_count + unmatched_close_count