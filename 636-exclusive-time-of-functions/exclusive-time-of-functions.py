class Solution:
    def exclusiveTime(self, n: int, logs: List[str]) -> List[int]:
        exc_times = [0] * n
        stack = []
        prev_time = 0

        for log in logs:
            parts = log.split(':')
            func_id = int(parts[0])
            event = parts[1]
            time = int(parts[2])

            if event == 'start':
                if stack:
                    exc_times[stack[-1]] += time - prev_time
                stack.append(func_id)
                prev_time = time
            else:
                curr_id = stack.pop()
                elapsed_time = time - prev_time + 1
                exc_times[curr_id] += elapsed_time
                prev_time = time + 1

        return exc_times