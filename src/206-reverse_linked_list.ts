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

function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    function recursiveHelper(pointer, cache): ListNode | null {
        if (!pointer.next) {
            pointer.next = cache;
            return pointer;
        } 
        const temp = new ListNode(pointer.val, pointer.next);
        pointer.next = cache;
        cache = pointer;
        pointer = temp.next;
        return recursiveHelper(pointer, cache);
    }


    return recursiveHelper(head, null);
};