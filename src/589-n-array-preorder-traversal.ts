class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function preorder(root: Node | null): number[] {
  const returnArr: number[] = [];

  function recursiveHelper(node: Node | null): void {
    if (node) {
      returnArr.push(node.val);
      if (node.children.length === 0) {
        return;
      } else {
        node.children.forEach((subtree) => {
          recursiveHelper(subtree);
        });
      }
    }
  }

  recursiveHelper(root);

  return returnArr;
}
