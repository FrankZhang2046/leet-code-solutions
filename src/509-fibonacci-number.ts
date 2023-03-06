function fib(n: number): number {   
    const cache = new Map<number, number>();
    function recursiveHelper(num: number): number {
        if (num === 0) {
            return 0;
        } 
        if (num === 1) {
            return 1;
        }
        
        if (cache.has(num)) {
            return cache.get(num);
        } else {
            const returnVal = recursiveHelper(num-1) + recursiveHelper(num-2);
            cache.set(num, returnVal);
            return returnVal;
        }
    }

    return recursiveHelper(n);
};