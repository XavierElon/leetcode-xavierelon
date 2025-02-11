class Solution:
    def removeDuplicates(self, s: str) -> str:
        stack = []

        for char in s:
            if len(stack) > 0 and stack[len(stack) - 1] == char:
                stack.pop()
            else:
                stack.append(char)

        return ''.join(stack)