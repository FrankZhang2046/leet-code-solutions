function reverseWords(s: string): string {
  let fastPointer = 0,
    slowPointer = 0;
  const splitWords = s.split("");

  function reverseHelper(start: number, end: number): void {
    while (start < end) {
      [splitWords[start], splitWords[end]] = [
        splitWords[end],
        splitWords[start],
      ];
      start++;
      end--;
    }
  }

  while (fastPointer <= splitWords.length - 1) {
    if (
      splitWords[fastPointer] === " "
    ) {
      reverseHelper(slowPointer, fastPointer - 1);
      slowPointer = fastPointer+1;
    } else if (fastPointer === splitWords.length - 1) {
      reverseHelper(slowPointer, fastPointer);
    }

    fastPointer++;
  }

  return splitWords.join("");
}

console.log(reverseWords("Let's take LeetCode contest"));
