class Solution:
    def exclusiveTime(self, n: int, logs: List[str]) -> List[int]:
        exclusive_times = [0] * n
        stack = []
        prev_time = 0

        for log in logs:
            parts = log.split(':')
            func_id = int(parts[0])
            event_type = parts[1]
            time = int(parts[2])

            if event_type == 'start':
                if stack:
                    elapsed_time = time - prev_time
                    exclusive_times[stack[-1]] += elapsed_time

                stack.append(func_id)
                prev_time = time
            else:
                curr_function_id = stack.pop()
                elapsed_time = (time - prev_time) + 1
                exclusive_times[curr_function_id] += elapsed_time

                prev_time = time + 1

        return exclusive_times