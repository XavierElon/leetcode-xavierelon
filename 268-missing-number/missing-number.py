class Solution:
    def missingNumber(self, arr: List[int]) -> int:
        n = len(arr)

        # Rearrange the array elements to their correct indices
        for i in range(n):
            while arr[i] >= 0 and arr[i] < n and arr[arr[i]] != arr[i]:
                # Swap elements to put arr[i] at its correct index
                arr[arr[i]], arr[i] = arr[i], arr[arr[i]]

        # Find the first index where the value does not match the index
        for i in range(n):
            if arr[i] != i:
                return i

        # If all indices from 0 to n-1 are correctly placed, return n
        return n