class Solution:
    def digitsCount(self, d: int, low: int, high: int) -> int:
        return self._count_digit_occurrences(d, high) - self._count_digit_occurrences(d, low - 1)

    def _count_digit_occurrences(self, d: int, num: int) -> int:
        if num < 0:
            return 0

        count, step, factor = 0, 1, 0

        while num > 0:
            num, digit = divmod(num, 10)
            count += (num - (d == 0)) * step + step * (digit > d) + (factor + 1) * (digit == d)
            factor += digit * step
            step *= 10

        return count