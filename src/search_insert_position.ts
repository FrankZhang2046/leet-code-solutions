function searchInsert(nums: number[], target: number): number {
  function recursiveHelperFunction(start: number, end: number) {
    if (start >= end) {
      if (nums[start] > target) {
        return start;
      } else if (nums[start] < target) {
        start + 1;
      } else return start;
    }
    const midIndex = Math.round((start + end) / 2);
    if (nums[midIndex] === target) {
      return midIndex;
    } else if (nums[midIndex] > target) {
      return recursiveHelperFunction(start, midIndex - 1);
    } else if (nums[midIndex] < target) {
      return recursiveHelperFunction(midIndex + 1, end);
    }
  }

  return recursiveHelperFunction(0, nums.length - 1);
}

searchInsert([1, 3, 5, 6], 7);