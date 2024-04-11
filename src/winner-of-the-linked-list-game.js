/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {string}
 */
var gameResult = function (head) {
    /*
        [2, 5, 4, 7, 20, 5]
        - have 2 variables: even and odd
        - traverse through the linked list, two at at time
                      (even)              (odd)
            - compare node.val against node.next.val
                - true -> even++
                - false -> odd++
        - at the end, return 
            - if even === odd ? 'Tie'
                - if even > odd ? 'Even'
                - else 'Odd'
    */
    let even = 0;
    let odd = 0;
    let current = head;

    while (current) {
        if (current.val > current.next.val) {
            even++;
        } else {
            odd++;
        }

        current = current.next.next;
    }

    if (even === odd) {
        return 'Tie'
    } else if (even > odd) {
        return 'Even'
    } else {
        return 'Odd'
    }

};