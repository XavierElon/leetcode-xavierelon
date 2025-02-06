class Solution:
    def validPalindrome(self, s: str) -> bool:
        left, right = 0, len(s) - 1

        while left < right:
            if s[left] == s[right]:
                left += 1
                right -= 1
            else:
                return self.is_palindrome(s, left + 1, right) or self.is_palindrome(s, left, right - 1)

        return True  # ✅ Fix: Ensure it returns True if no mismatch is found

    def is_palindrome(self, s: str, left: int, right: int) -> bool:
        while left < right:
            if s[left] != s[right]:  # ✅ Fix: Should check for inequality instead
                return False
            left += 1
            right -= 1

        return True