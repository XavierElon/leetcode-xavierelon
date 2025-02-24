class Solution:
    def maxScore(self, cards: List[int], k: int) -> int:
        total = sum(cards)
        if k >= len(cards):
            return total
        
        state = 0
        max_points = 0
        start = 0

        for end in range(len(cards)):
            state += cards[end]

            if end - start + 1 == len(cards) - k:
                max_points = max(total - state, max_points)
                state -= cards[start]
                start += 1

        return max_points