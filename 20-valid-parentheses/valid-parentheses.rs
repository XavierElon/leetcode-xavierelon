impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut stack = Vec::new();

        for ch in s.chars() {
            match ch {
                '{' => stack.push('}'),
                '[' => stack.push(']'),
                '(' => stack.push(')'),
                _ => {
                    if stack.pop() != Some(ch) {
                        return false;
                    }
                }
            }
        }
        stack.is_empty()
    }
}