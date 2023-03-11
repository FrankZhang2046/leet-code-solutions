function isSubsequence(s: string, t: string): boolean {
    /*
        Intuition: use two pointers, p1 for s, p2 for t. When letters under both pointers match, increase both pointers, else increase p2, break when p2 is out of bounds, return true when p1 is out of bounds
        I'd like to use recursion to solve this problem
    */
    function recursiveHelper(p1, p2): boolean {
        if (p1 >= s.length) {
            return true;
        } 
        if (p2 >= t.length) {
            return false;
        }
        if (s[p1] === t[p2]) {
            return recursiveHelper(p1+1, p2+1);
        } else {
            return recursiveHelper(p1, p2+1);
        }
    }
    
    return recursiveHelper(0, 0);
};