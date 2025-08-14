class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        ops = {
            '+': operator.add,
            '-': operator.sub,
            '*': operator.mul,
            '/': lambda a,b: int(a/b)
        }

        for t in tokens:
            if t in ops:
                b, a = stack.pop(), stack.pop()
                result = ops[t](a, b)
                stack.append(result)
            else:
                stack.append(int(t))
        
        return stack[0]
            