function romanToInt(s: string): number {
  // define dictionary of the symbols and its corresponding values
  const valuesDict = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let sum: number = 0;
  // loop over the string to add up all the numbers
  for (let index = 0; index < s.length; index++) {
    // handle all the edge cases
    if (
      s[index] === "I" &&
      s[index + 1] &&
      (s[index + 1] === "V" || s[index + 1] === "X")
    ) {
      sum--;
    } else if (
      s[index] === "X" &&
      s[index + 1] &&
      (s[index + 1] === "L" || s[index + 1] === "C")
    ) {
      sum -= 10;
    } else if (
      s[index] === "C" &&
      s[index + 1] &&
      (s[index + 1] === "D" || s[index + 1] === "M")
    ) {
      sum -= 100;
    } else {
      if (valuesDict.has(s[index])) {
        sum += valuesDict.get(s[index])!;
      }
    }
  }
  return sum;
}

console.log(romanToInt("MCMXCIV"));
