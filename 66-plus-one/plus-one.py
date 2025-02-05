class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        carry = 1

        for i in range(len(digits) - 1, -1, -1):
            s = digits[i] + carry
            if s < 10:
                digits[i] = s
                carry = 0
                break
            else:
                digits[i] = 0

        if carry == 1:
            digits.insert(0, 1)

        return digits