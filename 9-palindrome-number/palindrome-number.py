class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0 or (x != 0 and x % 10 == 0):
            return False

        reversed_half = 0
        original = x

        while x > reversed_half:
            reversed_half = reversed_half * 10 + (x % 10)
            x //= 10

        return x == reversed_half or x == reversed_half // 10