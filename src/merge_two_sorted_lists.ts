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
}