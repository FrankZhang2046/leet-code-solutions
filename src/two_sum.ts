/*
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

*/

// * alternative solution
function twoSum(nums: number[], target: number): number[] {
    const myMap = new Map<number, number>();
    
    function recursiveHelper(currIdx: number): number[] {
        const targetVal = target - nums[currIdx];

        if (myMap.has(targetVal)) {
            return [currIdx, myMap.get(targetVal)];
        }

        myMap.set(nums[currIdx], currIdx);
        return recursiveHelper(currIdx + 1);
    }

    return recursiveHelper(0);
};