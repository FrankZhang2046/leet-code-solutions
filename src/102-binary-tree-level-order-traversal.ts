class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  const returnArr: number[][] = [];
  function recursiveHelper(node: TreeNode | null, level: number): void {
    if (node) {
      if (!returnArr[level]) {
        returnArr[level] = [];
      }
      returnArr[level].push(node.val);
      // terminal case:
      if (!node.left && !node.right) {
        return;
      }
      if (node.left) {
        recursiveHelper(node.left, level + 1);
      }
      if (node.right) {
        recursiveHelper(node.right, level + 1);
      }
    }
  }

  recursiveHelper(root, 0);
  return returnArr;
}
