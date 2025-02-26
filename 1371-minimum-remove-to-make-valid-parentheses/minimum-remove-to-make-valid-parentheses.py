class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        # First pass: Remove extra closing parentheses
        extra_opens = 0
        total_opens = 0
        j = 0
        result = [''] * len(s)  # Pre-allocate list for in-place modification
        
        for ch in s:
            if ch == ')':
                if extra_opens == 0:
                    continue  # Skip if no open parenthesis to match
                extra_opens -= 1
                result[j] = ch
                j += 1
            elif ch == '(':
                total_opens += 1
                extra_opens += 1
                result[j] = ch
                j += 1
            else:
                result[j] = ch
                j += 1

        # Second pass: Remove extra opening parentheses
        length = j
        j = 0
        keep = total_opens - extra_opens  # Number of '(' to keep
        final_result = [''] * length  # Pre-allocate for second pass
        
        for i in range(length):
            ch = result[i]
            if ch == '(':
                if keep == 0:
                    continue  # Skip extra '('
                final_result[j] = ch
                j += 1
                keep -= 1
            else:
                final_result[j] = ch
                j += 1

        return ''.join(final_result[:j])