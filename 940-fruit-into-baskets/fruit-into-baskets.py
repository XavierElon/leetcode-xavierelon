class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        basket = defaultdict(int)
        max_fruits = 0
        left = 0

        for right in range(len(fruits)):
            basket[fruits[right]] += 1

            while len(basket) > 2:
                basket[fruits[left]] -= 1
                if basket[fruits[left]] == 0:
                    del basket[fruits[left]]
                left += 1

            max_fruits = max(max_fruits, right - left + 1)

        return max_fruits