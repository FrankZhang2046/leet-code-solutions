function removeElement(nums: number[], val: number): number {
  let slow = 0, fast = 0;

  while (fast < nums.length) {
    if (nums[fast] !== val) {
      if (nums[slow] === val) {
        [ nums[slow], nums[fast] ] = [nums[fast], nums[slow]];
      }
      slow++;
    }
    fast++;
  }

  return slow;
}

console.log(removeElement([3, 2, 2, 3], 3));