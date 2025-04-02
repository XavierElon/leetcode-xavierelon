class Solution:
    def calculate(self, s: str) -> int:
        num = 0
        sign = 1
        res = 0
        stack = []

        for i in range(len(s)):
            c = s[i]

            if c.isdigit():
                num = num * 10 + int(c)
            elif c == '+':
                res += num * sign
                sign = 1
                num = 0
            elif c == '-':
                res += num * sign
                sign = -1
                num = 0
            elif c == '(':
                stack.append(res)
                stack.append(sign)
                res = 0
                sign = 1

            elif c == ')':
                res += num * sign
                prev_sign = stack.pop()
                prev_res = stack.pop()
                res =  prev_res + res * prev_sign
                num = 0

        res += num * sign
        return res