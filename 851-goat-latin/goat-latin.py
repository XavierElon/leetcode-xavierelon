class Solution:
    def toGoatLatin(self, sentence: str) -> str:
        vowels = set('aeiouAEIOU')
        words = sentence.split()
        res = []

        for i, word in enumerate(words, start=1):
            if word[0] in vowels:
                goat = word + 'ma'
            else:
                goat = word[1:] + word[0] + 'ma'

            goat += 'a' * i
            res.append(goat)

        return " ".join(res)