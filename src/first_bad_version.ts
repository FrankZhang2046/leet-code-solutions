
function isBadVersion(num: number) {
  return num >= 4;
}

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    function recursiveHelperFunction(start: number, end: number, lastBadVersion): number {
      if (start >= end) {
        if (isBadVersion(start)) {
          return start;
        } else {
          return lastBadVersion;
        }
      }
      const midIndex = Math.round((start + end) / 2);
      if (!isBadVersion(midIndex)) {
        return recursiveHelperFunction(midIndex + 1, end, lastBadVersion);
      }
      if (isBadVersion(midIndex)) {
        return recursiveHelperFunction(start, midIndex - 1, midIndex);
      }
    }
    return recursiveHelperFunction(1, n, null);
  }
}

console.log(solution(isBadVersion)(5))