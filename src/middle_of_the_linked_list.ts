import { ListNode } from './merge_two_sorted_lists';

function middleNode(head: ListNode | null): ListNode | null {
  let slow: ListNode = head, fast: ListNode = head;

  while (fast.next) {
    fast = fast.next;
    if (fast?.next) {
      fast = fast.next;
    }

    slow = slow.next;
  }

  return slow;
}