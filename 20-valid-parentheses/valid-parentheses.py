class Solution:
    def isValid(self, s: str) -> bool:
        mapping = { '{': '}', '(': ')', '[': ']'}
        stack = []

        for ch in s:
            if ch in mapping:
                stack.append(ch)

            else:
                if not stack or ch != mapping[stack.pop()]:
                    return False

        return not stack