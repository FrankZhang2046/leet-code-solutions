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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  function recursiveHelper(node: TreeNode | null): TreeNode {
    console.log(node.val, p.val, q.val);
    // left substree case
    if (p.val < node.val && q.val < node.val) {
      return recursiveHelper(node.left);
    }
    // right subtree case
    else if (p.val > node.val && q.val > node.val) {
      return recursiveHelper(node.right);
    } else {
      return node;
    }
  }

  return recursiveHelper(root);
}
