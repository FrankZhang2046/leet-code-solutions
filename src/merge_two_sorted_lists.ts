  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let head: ListNode | null; 
    if (!list1) {return list2;}
    if (!list2) {return list1;}

    if (list1.val < list2.val) {
        head = list1;
        list1 = list1.next;
    } else {
        head = list2;
        list2=list2.next;
    }
    
    head.next = mergeTwoLists(list1, list2);

    return head;
    // * iterative approach
   let head = new ListNode(null);
    let tail = head;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next; 
        }
        tail = tail.next;
    }
    
    if (!list1) {
        tail.next = list2;
    } else if (!list2) {
        tail.next = list1;
    }

    return head.next;
}