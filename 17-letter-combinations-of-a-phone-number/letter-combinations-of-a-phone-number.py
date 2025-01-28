class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
            
        keypad_map = {
            '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl','6': 'mno','7': 'pqrs','8': 'tuv', '9': 'wxyz'
        }

        res = []
        
        def backtrack(i: int, curr_combination: List[str], digits: str, keypad_map: Dict[str, str], res: List[str]) -> None:
            if len(curr_combination) == len(digits):
                res.append("".join(curr_combination))
                return

            for letter in keypad_map[digits[i]]:
                curr_combination.append(letter)

                backtrack(i+1, curr_combination, digits, keypad_map, res)

                curr_combination.pop()
        
        backtrack(0, [], digits, keypad_map, res)
        return res