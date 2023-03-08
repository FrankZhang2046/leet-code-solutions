function climbStairs(n: number): number {
    let cache = new Map<number, number>();
    function recursiveHelper(currentStairs: number): number {
        if (currentStairs === 1) {
            return 1;
        }
        if (currentStairs === 2) {
            return 2;
        }

        if (cache.has(currentStairs)) {
            return cache.get(currentStairs);
        }
        else {
            const returnVal = recursiveHelper(currentStairs -1) + recursiveHelper(currentStairs - 2);
            cache.set(currentStairs, returnVal);
            return returnVal;
        }
    }
    return recursiveHelper(n);
};