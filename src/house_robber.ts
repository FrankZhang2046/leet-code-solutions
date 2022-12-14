function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  // initialize an empty array
  const resultArr: number[] = [];

  nums.forEach((ele, idx) => {
    if (idx === 0) {
      resultArr.push(ele);
    } else if (idx === 1) {
      resultArr.push(Math.max(ele, resultArr[0]));
    } else {
      resultArr.push(Math.max(resultArr[idx - 1], resultArr[idx - 2] + ele));
    }
  });

  return resultArr[resultArr.length - 1];
}
