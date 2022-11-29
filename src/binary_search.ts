function search(nums: number[], target: number): number {
  function binarySearch(array: number[], start: number, end: number): number {
    if (start > nums.length - 1) {
      return -1;
    }
    // * handling edge cases
    if (start === end) {
      if (array[start] === target) {
        return start;
      } else {
        return -1;
      }
    } 
    const midIndex = Math.round((start + end) / 2);
    if (array[midIndex] === target) {
      return midIndex;
    } else {
      if (array[midIndex] > target) {
        return binarySearch(array, start, midIndex - 1);
      } 
      if (array[midIndex] < target) {
        return binarySearch(array, midIndex + 1, end);
      }
    }
  }

  return binarySearch(nums, 0, nums.length - 1);
}

console.log(search([-1, 0, 3, 5, 9, 12], 2));