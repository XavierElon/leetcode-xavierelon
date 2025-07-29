class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        s = list(s)
        n = len(s)
        count = 0

        for i in range(n):
            if s[i] == '(':
                count += 1
            elif s[i] == ')':
                if count > 0:
                    count -= 1
                else:
                    s[i] = ''

        count = 0

        for i in range(n - 1, -1, -1):
            if s[i] == ')':
                count += 1
            elif s[i] == '(':
                if count > 0:
                    count -= 1
                else:
                    s[i] = ''

        return ''.join(s)