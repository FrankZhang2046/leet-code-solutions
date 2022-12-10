import { ListNode } from "./merge_two_sorted_lists";

function oddEvenList(head: ListNode | null): ListNode | null {
  let prevNode: ListNode = null,
    currNode = head,
    nextNode: ListNode = null,
    evenNode: ListNode;
  if (head.next) {
    evenNode = head.next;
  } else {
    return head;
  }

  while (currNode.val) {
    if (prevNode) {
      if (currNode.next) {
        nextNode = currNode;
        prevNode.next = nextNode;
        currNode = nextNode;
      }
    } else {
      if (currNode.next) {
        currNode = currNode.next;
      }
    }
  }

  return head;
}

console.log(oddEvenList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))));