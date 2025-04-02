class Solution:
    def simplifyPath(self, path: str) -> str:
        stack = []

        for portion in path.split('/'):
            if portion == '.' or not portion:
                continue
            elif portion == '..':
                if stack:
                    stack.pop()
            else:
                stack.append(portion)

        return '/' + '/'.join(stack)