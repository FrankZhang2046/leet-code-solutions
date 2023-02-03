function plusOne(digits: number[]): number[] {
    const recursiveHelper = (processedDigit: number): number[] => {
        if (processedDigit < 0) {
            digits.unshift(1);
            return digits;
        }
        if (digits[processedDigit] < 9) {
            digits[processedDigit]++;
            return digits;
        } else {
            digits[processedDigit] = 0;
            return recursiveHelper(processedDigit-1);
        }
    }

    return recursiveHelper(digits.length-1);
};
