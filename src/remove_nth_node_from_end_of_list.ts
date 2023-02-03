import { ListNode } from "./merge_two_sorted_lists";

const firstList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const secondList = new ListNode(1, new ListNode(2));
const thirdList = new ListNode(3, new ListNode(7, new ListNode(9, new ListNode(3, new ListNode(5, new ListNode(8, new ListNode(0)))))));

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const nodesArray: ListNode[] = [];
    let pointer: ListNode | null = head;
    while(pointer?.val || pointer?.val ===0) {
        nodesArray.push(pointer);
        pointer = pointer?.next;
    }

    // * taking care of edge cases
    if (nodesArray.length === 1) {
        return nodesArray[0];
    }

    if (n === 1) {
        nodesArray[nodesArray.length - (n+1)].next = null;
    } else {
        nodesArray[nodesArray.length - (n+1)].next = nodesArray[nodesArray.length - (n-1)];
    }

  console.log(nodesArray);
    return nodesArray[0];
};

removeNthFromEnd(thirdList, 2);