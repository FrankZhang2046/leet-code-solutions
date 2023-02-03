function checkInclusion(s1: string, s2: string): boolean {
  let slowPointer = 0,
    fastPointer,
    returnBoolean = false;
  const s1Map = {};
  for (let i = 0; i < s1.length; i++) {
    if (s1Map.hasOwnProperty(s1[i])) {
      s1Map[s1[i]]++;
    } else {
      s1Map[s1[i]] = 1;
    }
  }

  while (slowPointer < s2.length) {
    console.log(`current char: `, slowPointer, s2[slowPointer], s1Map);
    // get a new copy of the dict
    if (s1Map.hasOwnProperty(s2[slowPointer])) {
      console.log(`found start: `, slowPointer, s2[slowPointer]);
      const newCopyOfS1Dict = { ...s1Map };
      newCopyOfS1Dict[s2[slowPointer]]--;
      let jobsDone = true;
      Object.keys(newCopyOfS1Dict).forEach((letter) => {
        if (newCopyOfS1Dict[letter] !== 0) {
          jobsDone = false;
        }
      });
      if (jobsDone) {
        returnBoolean = true;
        break;
      }
      fastPointer = slowPointer + 1;
      while (fastPointer < s2.length) {
        if (newCopyOfS1Dict.hasOwnProperty(s2[fastPointer])) {
          newCopyOfS1Dict[s2[fastPointer]]--;
          let jobsDone = true;
          Object.keys(newCopyOfS1Dict).forEach((letter) => {
            if (newCopyOfS1Dict[letter] !== 0) {
              jobsDone = false;
            }
          });
          if (jobsDone) {
            returnBoolean = true;
            break;
          }
          fastPointer++;
        } else {
          break;
        }
      }
    }
    slowPointer++;
  }

  console.log(`result is: `, returnBoolean);
  return returnBoolean;
}