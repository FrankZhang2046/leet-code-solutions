/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    /* 
        - cache a global sum
        - recurisvely traverse through the linked list to its tail, this is 2^0, add it to sum
            - each time we go back to a lower call stack frame, increase the power by 1, compute the value    
                - Math.pow(2, pow) * node.val, add to sum
        - after the function call, return sum
    */

    let sum = 0;
    let power = 0;

    function addDigits(node) {
        if (!node) {
            return;
        }

        addDigits(node.next);

        sum += node.val * Math.pow(2, power);
        power++;
    }

    addDigits(head);
    return sum;
};