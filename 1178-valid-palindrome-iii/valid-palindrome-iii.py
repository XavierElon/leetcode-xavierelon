class Solution:
    def isValidPalindrome(self, s: str, k: int) -> bool:
        @cache
        def isValid(i, j, available):
            if available < 0:
                return False
            elif i >= j:
                return True
            elif s[i] == s[j]:
                return isValid(i + 1, j - 1, available)
            else:
                return isValid(i + 1, j, available - 1) or isValid(i, j - 1, available - 1)

        return isValid(0, len(s) - 1, k)