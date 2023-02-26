/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }
    const nodeSet = new Set();
    
    function recursiveHelper(l: ListNode | null): ListNode | null {
        if (!nodeSet.has(l)) {
            if (!l.next) {
                return null;
            }
            nodeSet.add(l);
            return recursiveHelper(l.next);
        } else {
            return l;
        }
    }

    return recursiveHelper(head);
};