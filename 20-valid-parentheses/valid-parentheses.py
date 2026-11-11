class Solution:
    def isValid(self, s: str) -> bool:
        mapping = { '{': '}', '[': ']', '(': ')'}
        stack = []

        for ch in s:
            if ch in mapping:
                stack.append(ch)

            else:
                if not stack or mapping[stack.pop()] != ch:
                    return False

        return not stack