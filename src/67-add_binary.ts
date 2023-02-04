function addBinary(a: string, b: string): string {
  // declare an empty array as placeholder for final return string
  const placeholder: number[] = [];

  const recursiveHelper = (
    str1Index: number,
    str2Index: number,
    addOne: boolean = false
  ): string => {
    // terminal case
    if (str1Index < 0 && str2Index < 0) {
      if (addOne) {
        placeholder.unshift(1);
        return placeholder.join("");
      } else {
        return placeholder.join("");
      }
    }

    const value1 = Number(a[str1Index]) || 0;
    const value2 = Number(b[str2Index]) || 0;
    const addition = addOne ? 1 : 0;

    if (value1 + value2 + addition >= 2) {
      const sum = (value1 + value2 + addition) % 2;
      placeholder.unshift(sum);
      return recursiveHelper(str1Index - 1, str2Index - 1, true);
    } else {
      placeholder.unshift(value1 + value2 + addition);
      return recursiveHelper(str1Index - 1, str2Index - 1, false);
    }
  };

  return recursiveHelper(a.length - 1, b.length - 1, false);
}
