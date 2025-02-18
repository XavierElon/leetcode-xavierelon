class Solution:
    def findKthPositive(self, arr: List[int], k: int) -> int:
        index = 0
        number = 1
        while k > 0:
            if index < len(arr) and arr[index] == number:
                index += 1
            else:
                k -= 1
                if k == 0:
                    return number
            number += 1
        return number
