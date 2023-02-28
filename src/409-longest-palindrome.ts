function longestPalindrome(s: string): number {
    // build a hashmap of characters and their occurences 
    const myMap = {}
    for (let i=0; i<s.length; i++) {
        if (s[i] in myMap) {
            myMap[s[i]]++;
        } else {
            myMap[s[i]]=1;
        }
    }
    let maxOdd = 0;
    let finalLength = 0;
    for (let char in myMap) {
        if (myMap[char] % 2 === 0) {
            finalLength += myMap[char];
        } else {
            if (myMap[char] > maxOdd) {
                maxOdd = myMap[char];
            }
            finalLength += myMap[char] - 1;
        }
    }

    if (maxOdd > 0) {
        finalLength+=1;
    }
    return finalLength;
};