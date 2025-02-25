class Solution:
    def longestValidParentheses(self, s: str) -> int:
        max_len = 0
        stack = [-1]
        
        for i, char in enumerate(s):
            if char == '(':
                stack.append(i)
            else:
                # first pop the top element
                stack.pop()
                if not stack:
                    # stack is empty. update the start of the valid substring
                    stack.append(i)
                else:
                    # stack is not empty.
                    # we can calculate the length of the valid substring
                    max_len = max(max_len, i - stack[-1])
        
        return max_len