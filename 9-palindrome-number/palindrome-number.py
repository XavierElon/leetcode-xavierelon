class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False

        reversed_num = 0
        original_num = x

        while x > 0:
            reversed_num = reversed_num * 10 + x % 10
            x = x // 10

        return reversed_num == original_num