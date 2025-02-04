class Solution:
    def maxScore(self, s: str) -> int:
        # Initialize variables
        n = len(s)
        max_score = 0
        
        # Count the total number of ones in the string
        total_ones = s.count('1')
        
        # Initialize left zeros and right ones counters
        left_zeros = 0
        right_ones = total_ones
        
        # Iterate through the string up to the second last character
        for i in range(n - 1):
            if s[i] == '0':
                left_zeros += 1
            else:
                right_ones -= 1
                
            # Calculate the current score
            current_score = left_zeros + right_ones
            
            # Update the maximum score
            max_score = max(max_score, current_score)
        
        return max_score