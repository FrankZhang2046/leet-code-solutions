var permute = function (nums) {
    /*
        - intuition: recusive permutation
        - fill an array of size N with 0
        - override 0 with 1 
        - make recursive call at index that is not 1
                1, [], [0,0,0]
                /.      \
    2, [1], [1,0,0].    3, [1], [1,0,0]
          /                 \
3, [1,2], [1,1,0].        2, [1,2], [1,0,1]
        /                     \
[1,2,3], [1,1,1].            [1,3,2], [1,1,1]
    */
    const returnSet = new Set();

    function helper(idx, currArr, usedIntMap) {
        currArr.push(nums[idx]);
        usedIntMap[idx] = 1;
        if (currArr.length === nums.length) {
            returnSet.add(currArr);
            return;
        }

        for (let j = 0; j < nums.length; j++) {
            if (usedIntMap[j] === 0) {
                helper(j, [...currArr], [...usedIntMap]);
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        helper(i, [], Array(nums.length).fill(0));
    }



    return Array.from(returnSet);
}