class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        stack = []
        to_remove = set()

        for index, char in enumerate(s):
            if char == '(':
                stack.append(index)
            elif char == ')':
                if stack:
                    stack.pop()
                else:
                    to_remove.add(index)
        
        to_remove.update(stack)
        return "".join([s[i] for i in range(len(s)) if i not in to_remove])