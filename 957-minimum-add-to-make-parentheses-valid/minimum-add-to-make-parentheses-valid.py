class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        unmatched_open_count = unmatched_close_count = 0

        for i in s:
            if i == '(':
                unmatched_open_count += 1
            else:
                if unmatched_open_count:
                    unmatched_open_count -= 1
                else:
                    unmatched_close_count += 1
        return unmatched_close_count + unmatched_open_count

    