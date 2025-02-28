class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        i, j = len(num1) - 1, len(num2) - 1
        carry = 0
        res = []

        while i >= 0 or j >= 0 or carry > 0:
            first = ord(num1[i]) - ord('0') if i >= 0 else 0
            second = ord(num2[j]) - ord('0') if j >= 0 else 0

            sum_ = first + second + carry
            carry = sum_ // 10
            ans = sum_ % 10
            res.append(str(ans))

            i -= 1
            j -= 1

        return ''.join(res[::-1])