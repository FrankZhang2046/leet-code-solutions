function sortedSquares(nums: number[]): number[] {
  if (nums.length === 1) {
    return nums;
  }
  function squareHelper(base: number): number {
    return Math.pow(base, 2);
  }

  const placeholder = [...nums];
  placeholder.fill(null);

  function recursiveHelperFunction(
    backwardsIndex: number,
    start: number,
    end: number
  ): number[] {
    if (backwardsIndex < 0) {
      return placeholder;
    }
    if (squareHelper(nums[start]) > squareHelper(nums[end])) {
      placeholder[backwardsIndex] = squareHelper(nums[start]);
      return recursiveHelperFunction(backwardsIndex - 1, start+1, end);
    } else {
      placeholder[backwardsIndex] = squareHelper(nums[end]);
      return recursiveHelperFunction(backwardsIndex - 1, start, end - 1);
    }
  }
  return recursiveHelperFunction(nums.length - 1, 0, nums.length - 1);
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
