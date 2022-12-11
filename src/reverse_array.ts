function reverseArray(nums: number[]): number[] {
  let start = 0, end = nums.length - 1;
  while (start <= end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }

  return nums;
}

const myArr = [];

for (let i = 0; i < 101; i++) {
  myArr.push(i);
}

console.log(reverseArray(myArr));