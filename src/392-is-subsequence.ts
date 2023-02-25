function isSubsequence(s: string, t: string): boolean {
  function recursiveHelper(idxS: number, idxT: number): boolean {
    if (idxS > s.length -1) {
      return true;
    } else if (idxT > t.length-1) {
      return false;
    }

    if (s[idxS] === t[idxT]) {
      return recursiveHelper(idxS+1, idxT+1);
    } else {
      return recursiveHelper(idxS, idxT+1);
    }
  }

  return recursiveHelper(0, 0);
}