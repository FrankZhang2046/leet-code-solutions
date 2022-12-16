function lengthOfLastWord(s: string): number {
    if (s.length === 1) {return 1;}
    let length: number = 0, wordEnd: number, pointer = s.length-1;

    while (pointer >= 0) {
        if (s[pointer] === " ") {
            if (length) {
                break;
            }
        }
        if (s[pointer] !== " ") {
            if (!wordEnd) {
                wordEnd = pointer;
            }
            length++;
        }
        pointer--;
    }

    return length;
};

lengthOfLastWord("fly me to the moon");