class Solution:
    def maxJump(self, stones: List[int]) -> int:
                
        n = len(stones)
        
        if n==2:                                                        # if 2 stones, we have to jump end-to-end. 
            return stones[-1]                                           # So, last stone will be our answer.
                
        diff_alternate_stone = 0                        # Otherwise, the answer will be the max dist between alternate stones                                    
        
        for i in range(n-2):                                            # We find all the alternate distances and maximize it.
            diff_alternate_stone = max(diff_alternate_stone, stones[i+2]-stones[i])
            
        return diff_alternate_stone    