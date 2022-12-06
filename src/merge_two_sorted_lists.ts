// Definition for singly-linked list.
export class ListNode {
  public val: number;
  public next?: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const secondList = new ListNode(1, new ListNode(3, new ListNode(4)));
const firstList = new ListNode(1, new ListNode(2, new ListNode(4)));

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 && !list2) {
    return null;
  }
  let prevNode: ListNode = null;
  let head: ListNode = null;

  function traverseSingleList(listNode: ListNode) {
    while (listNode.val || listNode.val === 0) {
      const currentNode = new ListNode(listNode.val, null);
      if (prevNode) {
        prevNode.next = currentNode;
      }
      if (!head) {
        head = currentNode;
      }
      prevNode = currentNode;
      if (listNode.next) {
        listNode = listNode.next;
      } else {
        break;
      }
    }
  }

  if (!list1 && list2) {
    traverseSingleList(list2);
    return head;
  } else if (list1 && !list2) {
    traverseSingleList(list1);
    return head;
  } else {
    let currentListNode1 = list1;
    let currentListNode2 = list2;
    while ((currentListNode1.val || currentListNode1.val === 0) && (currentListNode2.val || currentListNode2.val === 0)) {
      let latestNode;
      let newNode;
      if (currentListNode1.val > currentListNode2.val) {
        latestNode = new ListNode(currentListNode1.val);
        newNode = new ListNode(currentListNode2.val, latestNode);
      } else {
        latestNode = new ListNode(currentListNode2.val);
        newNode = new ListNode(currentListNode1.val, latestNode);
      }
      if (prevNode) {
        prevNode.next = newNode;
      }
      if (!head) {
        head = newNode;
      }
      prevNode = latestNode;
      if (currentListNode1.next) {
        currentListNode1 = currentListNode1.next;
      } else if(currentListNode2.next) {
        traverseSingleList(currentListNode2);
      } else {
        break;
      }
      if (currentListNode2.next) {
        currentListNode2 = currentListNode2.next;
      } else if(currentListNode1.next) {
        traverseSingleList(currentListNode2);
      } else {
        break;
      }
    }
  }
  return head;
}

console.log( mergeTwoLists(new ListNode(5), new ListNode(1, new ListNode(2, new ListNode(4)))));
