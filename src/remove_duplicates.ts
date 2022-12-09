function removeDuplicates(nums: number[], val: number): number {
  let slow = 0,
    fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      if (nums[slow] === val) {
        [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      }
      slow++;
    }
    fast++;
  }
  return slow + 1;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 2));
