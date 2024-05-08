/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (a / b) | 0
  };

  const stack = [];

  for (let n of tokens) {
    if (ops[n] != null) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(ops[n](a, b));
    } else {
      stack.push(Number(n));
    }
  }

  return stack[0];
};