class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []

        keypad_map = {
            '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl','6': 'mno','7': 'pqrs','8': 'tuv', '9': 'wxyz'
        }

        res = []

        def backtrack(i: int, current: List[str]) -> None:
            if len(current) == len(digits):
                res.append("".join(current))
                return

            for letter in keypad_map[digits[i]]:
                current.append(letter)

                backtrack(i + 1, current)

                current.pop()

        backtrack(0, [])
        return res
