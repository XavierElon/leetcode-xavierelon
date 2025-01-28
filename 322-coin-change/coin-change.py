class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        res = self.top_down_dp(coins, amount, {})
        return -1 if res == float('inf') else res

    def top_down_dp(self, coins: List[int], target: int, memo: Dict[int, int]) -> int:
        if target == 0:
            return 0

        if target in memo:
            return memo[target]

        min_coins = float('inf')

        for coin in coins:
            if coin <= target:
                min_coins = min(min_coins, 1 + self.top_down_dp(coins, target - coin, memo))
        
        memo[target] = min_coins
        return memo[target]