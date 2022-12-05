function rotate(nums: number[], k: number): number[] {
  function reverseHelper(start: number, end: number): void {
    while (start <= end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  reverseHelper(0, nums.length - 1);
  reverseHelper(0, k - 1);
  reverseHelper(k, nums.length - 1);
  return nums;
}

console.log(rotate([-1, -100,3,99], 2));