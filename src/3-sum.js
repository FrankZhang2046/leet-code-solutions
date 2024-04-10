var threeSum = function (nums) {
    const returnArr = [];
    nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        } else {
            const target = 0 - nums[i];
            const myMap = new Map();
            for (let j = i + 1; j < nums.length; j++) {
                if (myMap.has(nums[j])) {
                    const result = [nums[i], nums[j], myMap.get(nums[j])].sort();
                    const found = returnArr.some(triplet => triplet[0] == result[0] && triplet[2] == result[2]);
                    if (!found) {
                        returnArr.push(result);
                    }
                } else {
                    myMap.set(target - nums[j], nums[j]);
                }
            }
        }
    }

    return returnArr;
};