class Solution:
    def calculate(self, s: str) -> int:
        s
        i = 0
        cur = prev = res = 0
        n = len(s)
        operation = '+'

        while i < n:
            curr_char = s[i]
            if curr_char.isdigit():
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

                    res += cur * prev

                    prev = cur * prev

                else:
                    res -= prev

                    res += int(prev/cur)
                    prev = int(prev/cur)
                
                cur = 0

            elif curr_char != ' ':
                operation = curr_char

            i += 1

        return res