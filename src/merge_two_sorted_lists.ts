 // Definition for singly-linked list.
 class ListNode {
   val: number;
   next: ListNode | null;
   constructor(val?: number, next?: ListNode | null) {
     this.val = val === undefined ? 0 : val;
     this.next = next === undefined ? null : next;
   }
 }

const firstNode = new ListNode(1);
const secondNode = new ListNode(2, firstNode);
const thirdNode = new ListNode(3, secondNode);
const fourthNode = new ListNode(4, thirdNode);
const fifthNode = new ListNode(5, fourthNode);

const sampleData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function that converts an array of integers into a linked list
function loadList(intArr: number[]): ListNode {
  let prevNode: ListNode;
  intArr.forEach(( integer, index ) => {
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
  while (currentNode.val) {
    console.log(currentNode.val);
    if (currentNode.next) {
      currentNode = currentNode.next;
    } else {
      break;
    }
  }
}

const lastNode = loadList(sampleData);
traverseList(lastNode)

const firstSideNode = new ListNode(1);
const secondSideNode = new ListNode(3, firstSideNode);
const thirdSideNode = new ListNode(4, firstSideNode);

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    console.log(list1, list2);
    return list2;
};
