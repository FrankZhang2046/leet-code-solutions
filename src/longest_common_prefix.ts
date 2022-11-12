function longestCommonPrefix(strs): string {
  let returnString = "";
  let currentLetter: string;
  for (let index = 0; index < strs[0].length; index++) {
    currentLetter = strs[0][index];
    let existInAllWords = true;
    strs.filter((word, index) => index != 0).forEach(word => {
      if (!word[index] || word[index] !== currentLetter) {
        existInAllWords = false;
      }     
    })
    if (existInAllWords) {
      returnString += currentLetter;
    } else { return returnString; }
  }
  return returnString;
}

console.log(longestCommonPrefix(["dog","racecar","car"]));
