function lengthOfLongestSubstring(s: string): number {
  if (s.length === 1) {
    return s.length;
  }
  let leftPointer = 0, rightPointer = 0, highestCount = 0;
  const queue: string[] = [];

  while ((rightPointer < s.length - 1) || (Array.from(new Set(queue)).length !== queue.length)) {
    if (!queue.includes(s[rightPointer])) {
      queue.push(s[rightPointer]);
      if (queue.length > highestCount) {
        highestCount = queue.length;
      }
      rightPointer++;
    } else {
      queue.push(s[rightPointer]);
      rightPointer++;
      while ((Array.from(new Set(queue)).length !== queue.length)) {
        leftPointer++;
        queue.shift();
      }
    }
  }

  return highestCount;
}

console.log(lengthOfLongestSubstring('au'));