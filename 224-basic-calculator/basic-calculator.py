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
                res += sign * num
                num = 0
                sign = 1
            elif c == '-':
                res += sign * num
                num = 0
                sign = -1
            elif c == '(':
                stack.append(res)
                stack.append(sign)
                res = 0
                sign = 1
            elif c == ')':
                res += sign * num
                num = 0
                prev_sign = stack.pop()
                prev_res = stack.pop()
                res = prev_res + prev_sign * res

        res += sign * num
        return res

            