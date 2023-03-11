function isIsomorphic(s: string, t: string): boolean {
    /*
        intuition: build two dictionaries, 
        d1 = {s[i]: t[i]}
        d2 = {t[i]: s[i]}
        if doesn't match, break loop 
    */
    let returnFlag: boolean = true;
    const d1 = {}, d2 = {};
    // * handle edge case when two strings don't have the same length
    if (s.length !== t.length) {
        return false;
    } 

    for (let i=0; i<s.length; i++) {
        if (!(s[i] in d1)) {
            d1[s[i]] = t[i];
        } 
        if (!(t[i] in d2)) {
            d2[t[i]] = s[i];
        }
        if (d1[s[i]] !== t[i] || d2[t[i]] !== s[i]) {
            returnFlag = false;
            break;
        }
    }

    return returnFlag;
};