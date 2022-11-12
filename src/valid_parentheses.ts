function isValid(s:string): boolean {
  let symbolsStack = [];
  for (let index = 0; index < s.length; index++) {
    if (s[index] === '(' || s[index] === '{' || s[index] === '[') {
      symbolsStack.push(s[index]);
    } else {
      switch (s[index]) {
        case '}':
          if (symbolsStack[symbolsStack.length - 1] && symbolsStack[symbolsStack.length - 1] === '{') {
            symbolsStack.pop();
          } else {
            return false;
          }
          break;
        case ')':
          if (symbolsStack[symbolsStack.length - 1]&& symbolsStack[symbolsStack.length - 1] === '(') {
            symbolsStack.pop();
          } else {
            return false;
          }
          break;
        case ']':
          if (symbolsStack[symbolsStack.length - 1] && symbolsStack[symbolsStack.length - 1] === '[') {
            symbolsStack.pop();
          } else {
            return false;
          }
          break;
      }
    }
  }
  if (symbolsStack.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isValid("(]"));