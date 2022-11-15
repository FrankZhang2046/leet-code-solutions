// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const sampleData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function that converts an array of integers into a linked list
function loadList(intArr: number[]): ListNode {
  let prevNode: ListNode;
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

// function that traverses through a linked list and prints the values of each node
function traverseList(listNode: ListNode): void {
  let currentNode = listNode;
  while (currentNode?.val) {
    console.log(currentNode?.val);
    if (currentNode?.next) {
      currentNode = currentNode.next;
    } else {
      break;
    }
  }
}

// const lastNode = loadList(sampleData);
// traverseList(lastNode);

const firstList = loadList([1, 2, 4]);
const secondList = loadList([1, 3, 4]);

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
    //   console.log(currentNode.val);
    //   const newListNode = new ListNode(currentNode.val, prevNode);
    //   prevNode = newListNode;
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

traverseList(mergeTwoLists(null, new ListNode(0, null)));
