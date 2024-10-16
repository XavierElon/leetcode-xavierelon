function checkValidGrid(grid: number[][]): boolean {
     const length = grid.length;
  const visited = Array.from({ length }, () => new Array(length).fill(false));

  visited[0][0] = true;
  const isValidStep = (i: number, j: number, expectedValue: number): boolean => {
    if (i < 0 || j < 0 || i >= length || j >= length) {
      return false;
    }
    if (visited[i][j]) {
      return false;
    }
    const value = grid[i][j];
    if (value === expectedValue) {
      return true;
    }


    return false;
  };

  let nextStep: number[] = [0, 0];
  let currentNumber = 0;
  let isValid = true;
  while (currentNumber < length * length - 1) {
    const [i, j] = nextStep;
    const value = grid[i][j];
    const steps = [
      [i + 1, j + 2],
      [i + 1, j - 2],
      [i + 2, j + 1],
      [i + 2, j - 1],
      [i - 1, j + 2],
      [i - 1, j - 2],
      [i - 2, j + 1],
      [i - 2, j - 1],
    ];
    const validStep = steps.find(([x, y]) => isValidStep(x, y, value + 1));
    isValid &&= !!validStep;
    if (validStep?.length) {

      nextStep = validStep;
      visited[validStep[0]][validStep[1]] = true;
    } else {
      return false;
    }
    currentNumber++;
  }

  return isValid;
};