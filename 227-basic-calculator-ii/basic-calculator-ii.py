class Solution:
    def calculate(self, s: str) -> int:
        i = 0
        cur = prev = res = 0
        n = len(s)
        operation = '+'

        while i < n:
            if s[i].isdigit():
                while i < n and s[i].isdigit():
                    cur = cur * 10 + int(s[i])
                    i += 1
                i -= 1
                
                if operation == '+':
                    res += cur
                    prev = cur
                elif operation == '-':
                    res -= cur
                    prev = -cur
                elif operation == '*':
                    res -= prev
                    res += prev * cur
                    prev = prev * cur
                else:
                    res -= prev
                    res += int(prev/cur)
                    prev = int(prev/cur)
            elif s[i] != ' ':
                operation = s[i]
            
            i += 1
            cur = 0

        return res