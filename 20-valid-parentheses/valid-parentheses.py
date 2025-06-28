class Solution:
    def isValid(self, s: str) -> bool:
        mapping = { '(': ')', '[': ']', '{': '}' }
        stack = []

        for ch in s:
            if ch in mapping:
                stack.append(mapping[ch])
            else:
                if not stack or ch != stack.pop():
                    return False

        return not stack