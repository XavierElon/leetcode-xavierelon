class Solution:
    def myPow(self, x: float, n: int) -> float:
        if x == 0: return 0
        if n == 0: return 1

        abs_n = abs(n)
        result = 1.0
        base = x

        while abs_n > 0:
            if abs_n % 2 == 1:
                result *= base
            base *= base
            abs_n //= 2

        return result if n >= 0 else 1 / result 