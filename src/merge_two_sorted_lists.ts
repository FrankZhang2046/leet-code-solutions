// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  function loadList(intArr: number[]): ListNode {
  let prevNode: ListNode;
  if (intArr.length === 0) {
      return null;
  }
  intArr.forEach((integer, index) => {
    let newNode: ListNode;
    if (index === 0) {
      newNode = new ListNode(integer);
    } else {
      newNode = new ListNode(integer, prevNode);
    }
    prevNode = newNode;
  });
  return prevNode;
}

  const traverseList = (listNode: ListNode) => {
    let currentNode = listNode;
    while (currentNode?.val || currentNode?.val === 0) {
      numArr.push(currentNode.val);
      if (currentNode.next) {
        currentNode = currentNode.next;
      } else {
        break;
      }
    }
  };
  let prevNode: ListNode | null = null;
  let numArr: number[] = [];
  let currentList1Node: ListNode | null = list1;
  let currentList2Node: ListNode | null = list2;
  traverseList(list1);
  traverseList(list2);
  const reversedList = numArr.sort((a, b) => a-b).reverse();
  return loadList(reversedList);
};

mergeTwoLists(null, new ListNode(0, null));
