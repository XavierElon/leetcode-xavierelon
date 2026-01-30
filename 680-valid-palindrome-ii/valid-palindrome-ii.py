class Solution:
    def validPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1

        while l < r:
            while l < r and not s[l].isalpha():
                l += 1
            while l < r and not s[r].isalpha():
                r -= 1

            if s[l].lower() == s[r].lower():
                l += 1
                r -= 1
            else:
                return self.check(s, l + 1, r) or self.check(s, l, r - 1)

        return True

    def check(self, s, l, r):
        while l < r:
            while l < r and not s[l].isalpha():
                l += 1
            while l < r and not s[r].isalpha():
                r -= 1
            
            if s[l].lower() != s[r].lower():
                return False
            l += 1
            r -= 1

        return True