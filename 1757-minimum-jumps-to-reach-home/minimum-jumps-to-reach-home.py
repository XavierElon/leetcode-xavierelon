class Solution:
    def minimumJumps(self, forbidden: List[int], a: int, b: int, x: int) -> int:
        # Create a set of forbidden positions, set the lower limit to 0, and set the upper limit to the maximum of the goal position, 
        # the maximum of the forbidden positions, and the sum of the jump lengths.
        forbidden, lower, upper = set(forbidden), 0, max(x, max(forbidden)) + a + b
        if 0 in forbidden:
            return -1
        
        # Initialize a queue to hold the positions to be explored, set the number of steps to -1, and add the starting position to the queue.
        queue, steps = deque(), -1
        queue.append((0, True))
        forbidden.add(0)
        
        # Loop through the positions in the queue until the queue is empty.
        while queue:
            # Increment the number of steps.
            steps += 1
            
            # Loop through the positions in the queue that were added in the previous iteration.
            for i in range(len(queue)):
                # Remove the first position from the queue.
                pos, canBackwards = queue.popleft()
                
                # Check if the current position is the goal position, if so, return the number of steps.
                if pos == x:
                    return steps
                
                # Check if it is possible to jump backwards from the current position and if the new position is not forbidden.
                if (canBackwards and pos - b > 0 and pos-b not in forbidden):
                    # Add the new position to the queue with canBackwards set to False, and add it to the forbidden set.
                    queue.append((pos-b, False))
                    forbidden.add(pos-b)
                
                # Check if it is possible to jump forwards from the current position and if the new position is not forbidden.
                if (pos+a <= upper and pos+a not in forbidden):
                    # Add the new position to the queue with canBackwards set to True, and add it to the forbidden set.
                    queue.append((pos+a, True))
                    forbidden.add(pos+a)
        
        # If the goal position is not reached, return -1.
        return -1