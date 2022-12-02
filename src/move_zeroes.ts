function moveZeroes(nums: number[]): void {
  if (nums.length === 1) {
    return;
  }
  let slowPointer = 0,
    fastPointer = 0;
  while (fastPointer < nums.length) {
    if (nums[fastPointer] != 0) {
      nums[slowPointer] = nums[fastPointer];
      slowPointer += 1;
    }
    fastPointer += 1;
  }

  for (++slowPointer; slowPointer <= nums.length - 1; slowPointer++) {
    nums[slowPointer] = 0;
  }
}

moveZeroes([0, 1, 0, 3, 12]);
