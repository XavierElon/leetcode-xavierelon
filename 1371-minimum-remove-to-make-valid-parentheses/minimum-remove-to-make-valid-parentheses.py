class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        # First pass: remove invalid closing parentheses
        extra_opens = 0  # Tracks number of open parentheses without matching closing ones
        total_opens = 0  # Tracks total number of open parentheses kept
        temp = []
        
        for ch in s:
            if ch == ')':
                # Skip closing parenthesis if there's no matching opening one
                if extra_opens == 0:
                    continue
                extra_opens -= 1
                temp.append(ch)
            elif ch == '(':
                total_opens += 1
                extra_opens += 1
                temp.append(ch)
            else:
                # Keep all non-parenthesis characters
                temp.append(ch)
        
        # Second pass: remove extra opening parentheses
        result = []
        keep = total_opens - extra_opens  # Number of opening parentheses to keep
        
        for ch in temp:
            if ch == '(':
                # Skip extra opening parentheses
                if keep == 0:
                    continue
                result.append(ch)
                keep -= 1
            else:
                result.append(ch)
        
        return ''.join(result)