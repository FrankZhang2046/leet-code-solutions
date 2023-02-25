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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const head = new ListNode(null);
    function recursiveHelper(l1, l2, pointer) {
        if (!l1 && !l2) {
            return; // terminal case
        } else if (!l1) {
            pointer.next = l2;
            return;
        } else if (!l2) {
            pointer.next = l1;
            return;
        }

        if (l1.val === l2.val) {
            pointer.next = new ListNode(l1.val, null);
            pointer = pointer.next;
            pointer.next = new ListNode(l2.val, null);
            pointer = pointer.next;
            recursiveHelper(l1.next, l2.next, pointer)
        } else if (l1.val < l2.val) {
            pointer.next = new ListNode(l1.val, null);
            pointer= pointer.next;
            recursiveHelper(l1.next, l2, pointer);
        } else if (l1.val > l2.val) {
            pointer.next = new ListNode(l2.val, null);
            pointer= pointer.next;
            recursiveHelper(l1, l2.next, pointer);
        }
        
    }

    recursiveHelper(list1, list2, head);
    return head.next;
};