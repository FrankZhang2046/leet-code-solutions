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
var threeSumTwoPointer = function (nums) {
    /*
        - sort the array to avoid duplicates
        - iterate through the array, avoid duplicates
            - 0 - nums[i] becomes the new target number
                - use two pointers methods
                - left pointer start at i+1, right pointer start at nums[nums.length-1]
                    - if lp + rp === target, new solution found.   *
                    - if lp + rp < target, increment lp, avoid dups
                    - if lp + rp > target, decrement rp, avoid dups
    */
    const returnArr = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        } else {
            const target = 0 - nums[i];

            let lp = i + 1;
            let rp = nums.length - 1;

            while (lp < rp) {
                const sum = nums[lp] + nums[rp];
                if (sum === target) {
                    // found a new solution
                    returnArr.push([nums[i], nums[lp], nums[rp]]);
                    while (nums[lp] === nums[lp + 1]) {
                        lp++
                    };
                    while (nums[rp] === nums[rp - 1]) {
                        rp--
                    };
                    lp++
                    rp--;
                }
                if (sum > target) {
                    rp--;
                }

                if (sum < target) {
                    lp++;
                }
            }
        }

    }


    return returnArr;
};