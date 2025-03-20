class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        first_pass = []
        open_count = 0

        # First pass: remove invalid closing parentheses
        for char in s:
            if char == '(':
                open_count += 1
                first_pass.append(char)
            elif char == ')':
                if open_count > 0:
                    open_count -= 1
                    first_pass.append(char)
            else:
                first_pass.append(char)
        
        # Short-circuit if there are no unmatched opening parentheses
        if open_count == 0:
            return ''.join(first_pass)
        
        # Second pass: remove excess opening parentheses
        result = []
        for char in reversed(first_pass):
            if char == '(' and open_count > 0:
                open_count -= 1
            else:
                result.append(char)
        
        return ''.join(reversed(result))