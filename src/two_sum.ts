function twoSum(numbers: number[], target: number): number[] {
    let start = 0, end = numbers.length - 1;
    while ((numbers[start] + numbers[end]) !== target) {
        if ((numbers[start] + numbers[end]) < target) {
            start++;
        } else if ((numbers[start] + numbers[end]) > target){
            end--;
        }
    }

    return [start+1, end+1];
};