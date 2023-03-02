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

function isValidBST(root: TreeNode | null): boolean {
  let returnBoolean = true;
  let prevVal: number = -Infinity;
  // perform an recursive in order traversal, anytime the value is less than the current pointer's value, exit out
  function recursiveHelper(node: TreeNode | null): void {
    if (!node.left && !node.right) {
      // terminal case
      if (node.val > prevVal) {
        prevVal = node.val;
        return;
      } else {
        returnBoolean = false;
        return;
      }
    }
    if (node.left) {
      recursiveHelper(node.left);
    }
    if (node.val > prevVal) {
      prevVal = node.val;
    } else {
      returnBoolean = false;
      return;
    }
    if (node.right) {
      recursiveHelper(node.right);
    }
  }

  recursiveHelper(root);

  return returnBoolean;
}
